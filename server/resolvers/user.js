import { AuthenticationError } from 'apollo-server-lambda'
import { AdvitoUser, AdvitoUserSession } from '../models'
import { saltHash, generateAccessToken, getExpirationDate } from '../util'
import { SESSION, RECOVERY } from '../constants'
import crypto from 'crypto'

export default {
  Query: {
    getUser: async (_, __) => AdvitoUser.query().findById(711)
  },
  Mutation: {
    login: async (_, { username, password }) => {
      const user = await AdvitoUser.query().where('username', username).first()
      if (!user) throw new AuthenticationError('User not found')
      if (!user.is_enabled) throw new AuthenticationError('User is not enabled')
      const { pwd: dbPassword, user_salt: userSalt } = user
      const { passwordHashed } = saltHash(password, userSalt)
      if (dbPassword !== passwordHashed) throw new AuthenticationError('Password is incorrect`')

      const roleIds = await user.$relatedQuery('advitoUserRoleLink').map(role => role.advito_role_id)
      const session = await user.$relatedQuery('advitoUserSession').where('session_end', null).first()
      const sessionToken = crypto.randomBytes(16).toString('base64')
      if (session) await user.$relatedQuery('advitoUserSession').patch({ session_end: new Date() }).where('session_end', null)
      await user.$relatedQuery('advitoUserSession').insert({
        advito_user_id: user.id,
        session_token: sessionToken,
        session_start: new Date(),
        session_end: null,
        session_duration_sec: 3600,
        session_type: null,
        session_expiration: getExpirationDate(SESSION),
        session_note: null,
        created: new Date(),
        modified: new Date()
      })

      return {
        displayName: user.fullName(),
        clientId: user.client_id,
        profilePicturePath: user.profile_picture_path,
        sessionToken,
        roleIds
      }
    },
    logout: async (_, { sessionToken }) => {
      const session = await AdvitoUserSession.query().where('session_token', sessionToken).where('session_end', null).first()
      if (!session) throw new AuthenticationError('User session not found')
      await AdvitoUserSession.query().patch({ session_end: new Date() }).where('session_token', sessionToken).where('session_end', null)
    },
    sendResetPassword: async (_, { email }) => {
      const user = await AdvitoUser.query().where('email', email).first()
      if (!user) throw new AuthenticationError('User not found')
      const oldToken = await user.$relatedQuery('accessToken').where('is_active', true).first()
      if (oldToken) await await user.$relatedQuery('accessToken').patch({ is_active: false }).where('is_active', true).first()
      const token = generateAccessToken('PASS')
      await user.$relatedQuery('accessToken').insert({
        advito_user_id: user.id,
        token_type: 'RECOVERY',
        token,
        token_expiration: getExpirationDate(RECOVERY)
      })
      return token
    }
  }
}
