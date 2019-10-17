import gql from 'graphql-tag'

export const USER = gql`
  query user($id: Int!) {
    user(id: $id) {
      id
      clientId
      username
      nameLast
      nameFirst
      isEnabled
      email
      phone
      profilePicturePath
      defaultTimezone
      defaultLanguage
      defaultDateFormat
      address
      roleIds
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
