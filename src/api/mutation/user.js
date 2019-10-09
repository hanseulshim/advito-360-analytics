import gql from 'graphql-tag'

export const SEND_RESET_PASSWORD = gql`
  mutation sendResetPasswordEmail($appId: Int!, $email: String!) {
    sendResetPasswordEmail(appId: $appId, email: $email)
  }
`
export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      displayName
      clientId
      profilePicturePath
      sessionToken
      roleIds
    }
  }
`
