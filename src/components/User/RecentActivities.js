import React from 'react'
import styled from 'styled-components'
import { Title } from 'components/common/Typography'
import { useQuery } from '@apollo/react-hooks'
import { LOG_LIST } from 'api'
import Loader from 'components/common/Loader'
import ErrorMessage from 'components/common/ErrorMessage'
import { formatDate } from 'helper'

const Container = styled.div`
  margin-bottom: 2em;
`

const Date = styled.span`
  font-weight: 400;
`

const Activity = styled.div`
  margin-top: 0.5em;
  display: flex;
  flex-direction: column;
`

const RecentActivities = () => {
  const { loading, error, data } = useQuery(LOG_LIST)
  const logList = data ? data.logList : []
  console.log(logList)
  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Title>Recent Activities</Title>
      {error ? (
        <ErrorMessage error={error} />
      ) : (
        logList.map(({ created, activity }, i) => (
          <Activity key={i}>
            <Date>{formatDate(created)}</Date>
            <span>{activity}</span>
          </Activity>
        ))
      )}
    </Container>
  )
}

export default RecentActivities
