export default `
type User {
  id: Int
  name: String
}

extend type Query {
  getUser: User
}
`
