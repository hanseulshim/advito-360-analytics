export default `
type User {
  id: Int
  clientId: Int
  username: String
  nameLast: String
  nameFirst: String
  fullName: String
  isEnabled: Boolean
  email: String
  phone: String
  profilePicturePath: String
  defaultTimezone: String
  defaultLanguage: String
  defaultDateFormat: String
  address: String
  roleIds: [Int]
}
type Login {
  id: Int
  displayName: String
  clientId: Int
  profilePicturePath: String
  sessionToken: String
  roleIds: [Int]
}
type AdvitoUserLog {
  id: Int
  advitoUserId: Int
  activity: String
  created: Date
}

extend type Query {
  user(id: Int!): User @auth
  userList(clientId: Int): [User] @auth
  timeZoneList: [String] @auth
  dateFormatList: [String] @auth
  logList: [AdvitoUserLog] @auth
}
extend type Mutation {
  login(username: String!, password: String!): Login
  logout(sessionToken: String!): Boolean
  sendResetPasswordEmail(appId: Int!, email: String!): String
  resetPassword(token: String!, password: String!, confirmPassword: String!): Boolean
  createUser(
    clientId: Int!
    username: String!
    nameFirst: String!
    nameLast: String!
    isEnabled: Boolean!
    phone: String
    address: String
    password: String!
    confirmPassword: String!
    roleIds: [Int]!
  ): User @auth
  updateUser(
    id: Int!
    username: String
    nameFirst: String
    nameLast: String
    isEnabled: Boolean
    phone: String
    address: String
    defaultTimezone: String
    defaultLanguage: String
    defaultDateFormat: String
    roleIds: [Int]
  ): User @auth
  updateUserPassword(
    id: Int!
    password: String!
    confirmPassword: String!
  ): String @auth
  deleteUser(
    id: Int!
  ): Boolean @auth
}
`
