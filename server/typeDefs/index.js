import { gql } from 'apollo-server-lambda'
import user from './user'

export default gql`
  scalar Date
  ${user}
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`
