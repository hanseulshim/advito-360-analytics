import { User, Login } from '../constants'
export default {
  Query: {
    name: 'User Queries',
    endpoint: '',
    headers: { sessiontoken: 'MY^PR3TTYP0NY' },
    query: `
    {
      getUser(id: null) {
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
      resetPassword(token: "", password: "", confirmPassword: "")
      createUser(
        clientId: 1
        username: ""
        nameLast: ""
        nameFirst: ""
        isEnabled: true
        phone: ""
        address: ""
        password: ""
        confirmPassword: ""
        roleIds: []
      ) {
        ${User}
      }
    }`
  }
}
