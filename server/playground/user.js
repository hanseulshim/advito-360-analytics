import { User, Login } from '../constants'
export default {
  Query: {
    name: 'User Queries',
    endpoint: '',
    headers: { sessiontoken: 'MY^PR3TTYP0NY' },
    query: `
    {
      user(id: null) {
        ${User}
      }
      timeZoneList
      dateFormatList
      logList {
        id
        advitoUserId
        activity
        created
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
        nameFirst: ""
        nameLast: ""
        isEnabled: true
        phone: null
        address: null
        password: ""
        confirmPassword: ""
        roleIds: []
      ) {
        ${User}
      }
      updateUser(
        id: null
        username: null
        nameFirst: null
        nameLast: null
        isEnabled: null
        phone: null
        address: null
        defaultTimezone: null
        defaultLanguage: null
        defaultDateFormat: null
        roleIds: []
      ) {
        ${User}
      }
      updateUserPassword(
        id: null
        password: ""
        confirmPassword: ""
      )
      deleteUser(id: null)
    }`
  }
}
