import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { APPLICATION_LIST } from 'api'
import Loader from 'components/common/Loader'
import ErrorMessage from 'components/common/ErrorMessage'

const Application = () => {
  const { loading, error, data } = useQuery(APPLICATION_LIST)
  if (loading) return <Loader />
  if (error) {
    return <ErrorMessage error={error} />
  }
  console.log(data)
  return (
    <div>
      <div>Loaded</div>
    </div>
  )
}

export default Application
