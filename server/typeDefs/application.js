export default `
  type Application {
    applicationName: String
    enabled: Boolean
  }
  extend type Query {
    applicationList: [Application] @auth
  }
`
