import {
  AuthenticationError,
  ForbiddenError,
  UserInputError
} from 'apollo-server-lambda'
import { AdvitoUser, AdvitoUserSession, AccessToken } from '../models'
import {
  saltHash,
  generateAccessToken,
  getExpirationDate,
  sendEmail,
  checkValidPassword,
  validateEmail
} from '../util'
import {
  SESSION,
  RECOVERY,
  EMAIL_OPTIONS,
  AIR_ID,
  ANALYTICS_ID
} from '../constants'
import crypto from 'crypto'

export default {
  Query: {
    user: async (_, { id }) => {
      const user = await AdvitoUser.query()
        .findById(id)
        .first()
      if (!user) throw new UserInputError('User not found')
      const roleIds = await user
        .$relatedQuery('advitoUserRoleLink')
        .map(role => role.advitoRoleId)
      return {
        ...user,
        roleIds
      }
    }
  },
  Mutation: {
    login: async (_, { username, password }) => {
      const user = await AdvitoUser.query()
        .where('username', username.toLowerCase())
        .first()
      if (!user) throw new UserInputError('User not found')
      if (!user.isEnabled) throw new UserInputError('User is not enabled')
      const { pwd: dbPassword, userSalt } = user
      const { passwordHashed } = saltHash(password, userSalt)
      if (dbPassword !== passwordHashed) {
        throw new UserInputError('Password is incorrect')
      }

      const roleIds = await user
        .$relatedQuery('advitoUserRoleLink')
        .map(role => role.advitoRoleId)
      const session = await user
        .$relatedQuery('advitoUserSession')
        .where('sessionEnd', null)
        .first()
      const sessionToken = crypto.randomBytes(16).toString('base64')
      if (session) {
        await user
          .$relatedQuery('advitoUserSession')
          .patch({ sessionEnd: new Date() })
          .where('sessionEnd', null)
      }
      await user.$relatedQuery('advitoUserSession').insert({
        sessionToken: sessionToken,
        sessionStart: new Date(),
        sessionEnd: null,
        sessionDurationSec: 3600,
        sessionType: 'A3 User',
        sessionExpiration: getExpirationDate(SESSION),
        sessionNote: null,
        created: new Date(),
        modified: new Date()
      })

      return {
        displayName: user.fullName(),
        clientId: user.clientId,
        profilePicturePath: user.profilePicturePath,
        sessionToken,
        roleIds
      }
    },
    logout: async (_, { sessionToken }) => {
      const session = await AdvitoUserSession.query()
        .where('sessionToken', sessionToken)
        .where('sessionEnd', null)
        .first()
      if (!session) throw new AuthenticationError('User session not found')
      await AdvitoUserSession.query()
        .patch({ sessionEnd: new Date() })
        .where('sessionToken', sessionToken)
        .where('sessionEnd', null)
      return true
    },
    sendResetPasswordEmail: async (_, { appId, email }) => {
      const user = await AdvitoUser.query()
        .where('email', email.toLowerCase())
        .first()
      if (!user) throw new UserInputError('User not found')
      const oldToken = await user
        .$relatedQuery('accessToken')
        .where('isActive', true)
        .first()
      if (oldToken) {
        await user
          .$relatedQuery('accessToken')
          .patch({ isActive: false })
          .where('isActive', true)
          .first()
      }
      const token = generateAccessToken('PASS')
      await user.$relatedQuery('accessToken').insert({
        tokenType: 'RECOVERY',
        token,
        tokenExpiration: getExpirationDate(RECOVERY)
      })

      const option =
        appId === AIR_ID
          ? EMAIL_OPTIONS.AIR
          : appId === ANALYTICS_ID
            ? EMAIL_OPTIONS.ANALYTICS
            : EMAIL_OPTIONS.DEFAULT

      const placeholders = {
        NAMEFIRST: user.nameFirst,
        URL: `${option.url}${token}`
      }
      try {
        await sendEmail(
          option.templateName,
          user.email,
          placeholders,
          option.id
        )
        return `Password has been sent to ${user.email}`
      } catch (err) {
        throw new ForbiddenError(err.message)
      }
    },
    resetPassword: async (_, { token, password, confirmPassword }) => {
      if (password !== confirmPassword) {
        throw new UserInputError('Passwords do not match')
      }
      const errorMessages = checkValidPassword(password)
      if (errorMessages.length) throw new UserInputError(errorMessages)
      const accessToken = await AccessToken.query()
        .where('token', token)
        .first()
      if (!accessToken) {
        throw new AuthenticationError('Access token is not valid')
      }
      const { isActive, tokenExpiration, advitoUserId } = accessToken
      if (!isActive || tokenExpiration < new Date()) {
        throw new AuthenticationError('Access token is not valid')
      }
      const { saltHashed, passwordHashed } = saltHash(password)
      await AdvitoUser.query().patchAndFetchById(advitoUserId, {
        pwd: passwordHashed,
        userSalt: saltHashed
      })
      return true
    },
    createUser: async (
      _,
      {
        clientId,
        username,
        nameLast,
        nameFirst,
        isEnabled,
        phone,
        address,
        password,
        confirmPassword,
        roleIds = []
      }
    ) => {
      const errorMessages = checkValidPassword(password)
      if (password !== confirmPassword) {
        throw new UserInputError('Passwords do not match')
      }
      if (errorMessages.length) throw new UserInputError(errorMessages)
      const checkEmail = validateEmail(username)
      if (!checkEmail) throw new UserInputError('Username is invalid')
      if (!nameLast || !nameFirst) {
        throw new UserInputError('Name cannot be blank')
      }
      if (!roleIds.length) throw new UserInputError('User needs a role')
      const email = username.toLowerCase()
      const checkUser = await AdvitoUser.query()
        .where('username', email)
        .first()
      if (checkUser) throw new UserInputError('User already exists')
      const { saltHashed, passwordHashed } = saltHash(password)
      const user = await AdvitoUser.query().insert({
        clientId,
        username: email,
        pwd: passwordHashed,
        nameLast,
        nameFirst,
        isEnabled,
        isVerified: false,
        mustChangePwd: false,
        userSalt: saltHashed,
        email,
        phone,
        address,
        defaultTimezone: 'EST',
        defaultLanguage: 'English'
      })
      const roleIdsInsert = roleIds.map(advitoRoleId => ({
        advitoRoleId
      }))
      await user.$relatedQuery('advitoUserRoleLink').insert(roleIdsInsert)
      return {
        ...user,
        roleIds
      }
    },
    updateUser: async (
      _,
      {
        id,
        username,
        nameLast,
        nameFirst,
        isEnabled,
        phone,
        address,
        roleIds = []
      }
    ) => {
      const checkUserId = await AdvitoUser.query()
        .findById(id)
        .first()
      if (!checkUserId) throw new UserInputError('User not found')
      const checkUserEmail = await AdvitoUser.query()
        .where('username', username)
        .first()
      if (checkUserEmail && parseInt(checkUserEmail.id) !== id) {
        throw new UserInputError('User email already exists')
      }
      const checkEmail = validateEmail(username)
      if (!checkEmail) throw new UserInputError('Username is invalid')
      if (!nameLast || !nameFirst) {
        throw new UserInputError('Name cannot be blank')
      }
      if (!roleIds.length) throw new UserInputError('User needs a role')
      const email = username.toLowerCase()
      const user = await AdvitoUser.query().patchAndFetchById(id, {
        username: email,
        nameLast,
        nameFirst,
        isEnabled,
        email,
        phone,
        address
      })
      await user.$relatedQuery('advitoUserRoleLink').delete()
      const roleIdsInsert = roleIds.map(advitoRoleId => ({
        advitoRoleId
      }))
      await user.$relatedQuery('advitoUserRoleLink').insert(roleIdsInsert)
      return {
        ...user,
        roleIds
      }
    },
    updateUserPassword: async (_, { id, password, confirmPassword }) => {
      const checkUserId = await AdvitoUser.query()
        .findById(id)
        .first()
      if (!checkUserId) throw new UserInputError('User not found')
      if (password !== confirmPassword) {
        throw new UserInputError('Passwords do not match')
      }
      const errorMessages = checkValidPassword(password)
      if (errorMessages.length) throw new UserInputError(errorMessages)
      const { saltHashed, passwordHashed } = saltHash(password)
      await AdvitoUser.query().patchAndFetchById(id, {
        pwd: passwordHashed,
        userSalt: saltHashed
      })
      return true
    },
    deleteUser: async (_, { id }) => {
      const user = await AdvitoUser.query()
        .findById(id)
        .first()
      if (!user) throw new UserInputError('User not found')
      await user
        .$relatedQuery('advitoUserSession')
        .delete()
        .where('advitoUserId', id)
      await user
        .$relatedQuery('advitoUserRoleLink')
        .delete()
        .where('advitoUserId', id)
      await user
        .$relatedQuery('accessToken')
        .delete()
        .where('advitoUserId', id)
      await AdvitoUser.query().deleteById(id)
      return true
    }
  }
}
