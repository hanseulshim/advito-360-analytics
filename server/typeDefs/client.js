export default `
  type Client {
    id: Int
    clientName: String
    gcn: String
    industry: String
  }
  extend type Query {
    clientList(applicationId: Int!): [Client] @auth
  }
`
