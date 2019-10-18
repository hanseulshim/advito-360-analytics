import gql from 'graphql-tag'

export const USER = gql`
  query user($id: Int!) {
    user(id: $id) {
      id
      clientId
      username
      nameLast
      fullName
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

export const USER_LIST = gql`
  query userList($clientId: Int) {
    userList(clientId: $clientId) {
      id
      clientId
      username
      nameLast
      fullName
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
export const LOG_LIST = gql`
  {
    logList {
      id
      advitoUserId
      activity
      created
    }
  }
`
