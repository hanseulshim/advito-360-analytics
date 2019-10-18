import gql from 'graphql-tag'

export const CLIENT_LIST = gql`
  query clientList($applicationId: Int!) {
    clientList(applicationId: $applicationId) {
      id
      clientName
      gcn
      industry
    }
  }
`
export const IA_GENERAL_ROLE = 5
