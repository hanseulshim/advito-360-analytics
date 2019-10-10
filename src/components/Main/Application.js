import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { APPLICATION_LIST } from 'api'
import Loader from 'components/common/Loader'
import ErrorMessage from 'components/common/ErrorMessage'
import { Title } from 'components/common/Typography'
import ApplicationList from './ApplicationList'

const Application = () => {
  const { loading, error, data } = useQuery(APPLICATION_LIST)
  if (loading) return <Loader />
  if (error) {
    return <ErrorMessage error={error} />
  }
  console.log(data)
  return (
    <div>
      <Title level={3} message="Products" />
      <ApplicationList />
    </div>
  )
}

export default Application
