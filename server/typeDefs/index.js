import { gql } from 'apollo-server-lambda'
import user from './user'
import application from './application'
import client from './client'

export default gql`
  scalar Date
  directive @auth on FIELD_DEFINITION
  ${user}
  ${application}
  ${client}
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`
