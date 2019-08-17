import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'

export default {
  Query: {
    getUser: () => ({ id: 1, name: 'test' })
  }
  // Date: new GraphQLScalarType({
  //   name: 'Date',
  //   description: 'Date custom scalar type',
  //   parseValue (value) {
  //     return new Date(value).toISOString()
  //   },
  //   serialize (value) {
  //     return new Date(value).getTime()
  //   },
  //   parseLiteral (ast) {
  //     if (ast.kind === Kind.INT) {
  //       return parseInt(ast.value, 10)
  //     }
  //     return null
  //   }
  // })
}
