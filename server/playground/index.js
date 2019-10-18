import user from './user'
import application from './application'
import client from './client'

export default {
  tabs: [client.Query, application.Query, user.Query, user.Mutation]
}
