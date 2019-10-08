import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'
import user from './user'
import application from './application'
import merge from 'lodash.merge'

export default {
  ...merge(
    user,
    application
  ),
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue (value) {
      return new Date(value)
    },
    serialize (value) {
      return new Date(value).getTime()
    },
    parseLiteral (ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10)
      }
      return null
    }
  })
}
