import gql from 'graphql-tag'

export const SEND_RESET_PASSWORD = gql`
  mutation sendResetPasswordEmail($appId: Int!, $email: String!) {
    sendResetPasswordEmail(appId: $appId, email: $email)
  }
`
export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      displayName
      clientId
      profilePicturePath
      sessionToken
      roleIds
    }
  }
`
export const LOGOUT = gql`
  mutation logout($sessionToken: String!) {
    logout(sessionToken: $sessionToken)
  }
`
export const RESET_PASSWORD = gql`
  mutation resetPassword(
    $token: String!
    $password: String!
    $confirmPassword: String!
  ) {
    resetPassword(
      token: $token
      password: $password
      confirmPassword: $confirmPassword
    )
  }
`
export const UPDATE_USER = gql`
  mutation updateUser(
    $id: Int!
    $username: String
    $nameFirst: String
    $nameLast: String
    $isEnabled: Boolean
    $phone: String
    $address: String
    $defaultTimezone: String
    $defaultLanguage: String
    $defaultDateFormat: String
    $roleIds: [Int]
  ) {
    updateUser(
      id: $id
      username: $username
      nameFirst: $nameFirst
      nameLast: $nameLast
      isEnabled: $isEnabled
      phone: $phone
      address: $address
      defaultTimezone: $defaultTimezone
      defaultLanguage: $defaultLanguage
      defaultDateFormat: $defaultDateFormat
      roleIds: $roleIds
    ) {
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
