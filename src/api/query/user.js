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

export const TIME_ZONE_LIST = gql`
  {
    timeZoneList
  }
`

export const DATE_FORMAT_LIST = gql`
  {
    dateFormatList
  }
`
