import user from './user'
import application from './application'

export default {
  tabs: [
    application.Query,
    user.Query,
    user.Mutation
  ]
}
