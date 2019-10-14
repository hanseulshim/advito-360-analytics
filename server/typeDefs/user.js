export default `
type User {
  id: Int
  clientId: Int
  username: String
  nameLast: String
  nameFirst: String
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
  displayName: String
  clientId: Int
  profilePicturePath: String
  sessionToken: String
  roleIds: [Int]
}

extend type Query {
  user(id: Int!): User @auth
  timezoneList: [String] @auth
}
extend type Mutation {
  login(username: String!, password: String!): Login
  logout(sessionToken: String!): Boolean @auth
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
    username: String!
    nameFirst: String!
    nameLast: String!
    isEnabled: Boolean!
    phone: String
    address: String
    roleIds: [Int]
  ): User @auth
  updateUserPassword(
    id: Int!
    password: String!
    confirmPassword: String!
  ): Boolean @auth
  deleteUser(
    id: Int!
  ): Boolean @auth
}
`
