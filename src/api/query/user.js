import gql from 'graphql-tag'

export const USER = gql`
  query user($id: Int!) {
    user(id: $id) {
      id
      nameLast
      nameFirst
    }
  }
`

export const TIMEZONE_LIST = gql`
  {
    timezoneList
  }
`
