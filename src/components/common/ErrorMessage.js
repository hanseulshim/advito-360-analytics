import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'antd'

const ErrorMessage = ({ error }) => {
  const description =
    error.graphQLErrors && error.graphQLErrors.length
      ? error.graphQLErrors[0].message
      : 'Something went wrong'
  return <Alert message="Server Error" description={description} type="error" />
}

ErrorMessage.propTypes = {
  error: PropTypes.object.isRequired
}

export default ErrorMessage
