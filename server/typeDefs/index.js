import { gql } from 'apollo-server-lambda'

export default gql`
 type User {
   id: Int
   name: String
 }

 type Query {
   getUser: User
 }
`
