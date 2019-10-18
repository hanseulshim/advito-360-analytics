import {
  AuthenticationError,
  ForbiddenError,
  UserInputError
} from 'apollo-server-lambda'
import {
  AdvitoUser,
  AdvitoUserSession,
  AccessToken,
  AdvitoUserLog
} from '../models'
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
import moment from 'moment-timezone'
import isEmpty from 'lodash/isEmpty'

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
        fullName: user.fullName(),
        roleIds
      }
    },
    userList: async (_, { clientId }) => {
      const userList = await AdvitoUser.query()
        .eager('advitoUserRoleLink')
        .modifyEager('advitoUserRoleLink', builder => {
          builder.select('advitoRoleId')
        })
        .where('clientId', clientId)
      return userList.map(user => ({
        ...user,
        fullName: user.fullName(),
        roleIds: user.advitoUserRoleLink.map(link => link.advitoRoleId)
      }))
    },
    timeZoneList: () => moment.tz.names(),
    dateFormatList: () => ['MM/DD/YY', 'DD/MM/YY', 'YY/MM/DD'],
    logList: async (_, __, { user }) =>
      AdvitoUserLog.query()
        .where('advitoUserId', user.id)
        .orderBy('created', 'desc')
        .limit(5)
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
      if (session) {
        await user
          .$relatedQuery('advitoUserSession')
          .patch({
            sessionEnd: moment.utc()
          })
          .where('sessionEnd', null)
      }
      const sessionToken = crypto.randomBytes(16).toString('base64')
      const date = moment.utc()
      await user.$relatedQuery('advitoUserSession').insert({
        sessionToken: sessionToken,
        sessionStart: date,
        sessionEnd: null,
        sessionDurationSec: 3600,
        sessionType: 'A3 User',
        sessionExpiration: getExpirationDate(SESSION),
        sessionNote: null,
        created: date,
        modified: date
      })
      await user.$relatedQuery('advitoUserLog').insert({
        advitoUserId: user.id,
        activity: 'User login'
      })

      return {
        id: user.id,
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
        .patch({
          sessionEnd: moment.utc()
        })
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
            ? EMAIL_OPTIONS.ANALYTICS_RECOVERY
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
        await user.$relatedQuery('advitoUserLog').insert({
          advitoUserId: user.id,
          activity: 'User sent reset password email'
        })
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
      if (!isActive || tokenExpiration < moment.utc()) {
        throw new AuthenticationError('Access token is not valid')
      }
      const { saltHashed, passwordHashed } = saltHash(password)
      const user = await AdvitoUser.query().patchAndFetchById(advitoUserId, {
        pwd: passwordHashed,
        userSalt: saltHashed
      })
      await user.$relatedQuery('advitoUserLog').insert({
        advitoUserId: user.id,
        activity: 'User password reset'
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
      await user.$relatedQuery('advitoUserLog').insert({
        advitoUserId: user.id,
        activity: 'User created'
      })
      const token = generateAccessToken('PASS')
      await user.$relatedQuery('accessToken').insert({
        tokenType: 'NEW_ACCOUNT',
        token,
        tokenExpiration: getExpirationDate(RECOVERY)
      })

      const option = EMAIL_OPTIONS.ANALYTICS_CREATE
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
        return {
          ...user,
          roleIds
        }
      } catch (err) {
        throw new ForbiddenError(err.message)
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
        defaultTimezone,
        defaultLanguage,
        defaultDateFormat,
        roleIds = []
      }
    ) => {
      const checkUser = await AdvitoUser.query()
        .findById(id)
        .first()
      if (!checkUser) throw new UserInputError('User not found')
      if (checkUser.email && parseInt(checkUser.id) !== id) {
        throw new UserInputError('User email already exists')
      }
      const params = {}
      if (username) {
        const checkEmail = validateEmail(username)
        if (!checkEmail) throw new UserInputError('Username is invalid')
        const email = username.toLowerCase()
        params.username = email
        params.email = email
      }
      if (nameLast) {
        if (!nameLast) throw new UserInputError('Name cannot be blank')
        params.nameLast = nameLast
      }
      if (nameFirst) {
        if (!nameFirst) throw new UserInputError('Name cannot be blank')
        params.nameFirst = nameFirst
      }
      if (isEnabled) {
        params.isEnabled = isEnabled
      }
      if (phone) {
        params.phone = phone
      }
      if (address) {
        params.address = address
      }
      if (defaultTimezone) {
        params.defaultTimezone = defaultTimezone
      }
      if (defaultLanguage) {
        params.defaultLanguage = defaultLanguage
      }
      if (defaultDateFormat) {
        params.defaultDateFormat = defaultDateFormat
      }
      if (isEmpty(params)) return { ...checkUser, roleIds }
      const user = await AdvitoUser.query().patchAndFetchById(id, {
        ...params
      })
      if (roleIds.length) {
        await user.$relatedQuery('advitoUserRoleLink').delete()
        const roleIdsInsert = roleIds.map(advitoRoleId => ({
          advitoRoleId
        }))
        await user.$relatedQuery('advitoUserRoleLink').insert(roleIdsInsert)
      }
      await user.$relatedQuery('advitoUserLog').insert({
        advitoUserId: user.id,
        activity: 'User info updated'
      })
      return {
        ...user,
        fullName: user.fullName(),
        roleIds
      }
    },
    updateUserPassword: async (_, { id, password, confirmPassword }) => {
      const user = await AdvitoUser.query()
        .findById(id)
        .first()
      if (!user) throw new UserInputError('User not found')
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
      await user.$relatedQuery('advitoUserLog').insert({
        advitoUserId: user.id,
        activity: 'User password changed'
      })
      return 'Password has been changed'
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
