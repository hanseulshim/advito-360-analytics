export default `
type User {
  id: String,
  client_id: String,
  username: String,
  pwd: String,
  name_last: String,
  name_first: String,
  is_enabled: Boolean,
  is_verified: Boolean,
  must_change_pwd: Boolean,
  pwd_expiration: Date,
  email: String,
  phone: String,
  profile_picture_path: String,
  default_timezone: String,
  default_language: String,
  user_salt: String,
  default_date_format: String,
  address: String,
  created: String,
  modified: String
}
type Login {
  displayName: String,
  clientId: Int,
  profilePicturePath: String,
  sessionToken: String,
  roleIds: [Int]
}

extend type Query {
  getUser: User
}
extend type Mutation {
  login(username: String!, password: String!): Login
  logout(sessionToken: String!): Int
  sendResetPassword(email: String!): Int
}
`
