export default `
  type Application {
    applicationName: String
    enabled: Boolean
  }
  extend type Query {
    getApplicationList: [Application] @auth
  }
`
