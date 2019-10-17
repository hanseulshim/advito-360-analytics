import React from 'react'
import styled from 'styled-components'
import { Title } from 'components/common/Typography'
import { useQuery } from '@apollo/react-hooks'
import { APPLICATION_LIST } from 'api'
import Loader from 'components/common/Loader'
import ErrorMessage from 'components/common/ErrorMessage'
import sortBy from 'lodash/sortBy'

const Container = styled.div`
  margin-bottom: 2em;
`

const Application = styled.div`
  margin-top: 0.5em;
`

const MyApplications = () => {
  const { loading, error, data } = useQuery(APPLICATION_LIST)
  const applicationList = data
    ? sortBy(data.applicationList.filter(app => app.enabled), [
      'applicationName'
    ])
    : []
  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Title>My Applications</Title>
      {error ? (
        <ErrorMessage error={error} />
      ) : (
        applicationList.map((app, i) => (
          <Application key={i}>{app.applicationName}</Application>
        ))
      )}
    </Container>
  )
}

export default MyApplications
