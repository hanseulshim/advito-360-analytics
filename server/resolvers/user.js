import { AuthenticationError } from 'apollo-server-lambda'
import { AdvitoUser, AdvitoUserSession } from '../models'
import { saltHash } from '../util'
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

      const roleIds = await user.$relatedQuery('advito_user_role_link').map(role => role.advito_role_id)

      const session = await user.$relatedQuery('advito_user_session').where('session_end', null).first()
      const sessionToken = crypto.randomBytes(16).toString('base64')
      const expirationDate = new Date()
      expirationDate.setHours(expirationDate.getHours() + 1)
      if (session) await user.$relatedQuery('advito_user_session').patch({ session_end: new Date() }).where('session_end', null)
      await user.$relatedQuery('advito_user_session').insert({
        advito_user_id: user.id,
        session_token: sessionToken,
        session_start: new Date(),
        session_end: null,
        session_duration_sec: 3600,
        session_type: null,
        session_expiration: new Date(expirationDate),
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
    }
  }
}
