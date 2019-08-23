import { User, Login } from '../constants'
export default {
  Query: {
    name: 'User Queries',
    endpoint: '',
    headers: { sessiontoken: 'MY^PR3TTYP0NY' },
    query: `
    {
      getUser {
        ${User}
      }
    }`
  },
  Mutation: {
    name: 'User Mutations',
    endpoint: '',
    headers: { sessiontoken: 'MY^PR3TTYP0NY' },
    query: `
    mutation {
      login(username: "", password: "") {
        ${Login}
      }
      logout(sessionToken: "")
      sendResetPasswordEmail(email: "")
    }`
  }
}
