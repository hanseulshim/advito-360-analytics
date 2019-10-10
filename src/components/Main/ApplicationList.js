import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { APPLICATION_LIST } from 'api'
import Loader from 'components/common/Loader'
import ErrorMessage from 'components/common/ErrorMessage'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  margin-top: 1.5em;
  justify-content: space-between;
`

const Card = styled.div`
  margin-right: 4em;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.grayNurse};
  border-radius: 10px;
  flex: 1;
  overflow: hidden;
  min-height: 400px;
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em 2em;
  background: ${props =>
    props.enabled ? props.theme.tradewind : props.theme.pumice};
`

const DivisionIcon = styled.img``

const DivisonTitle = styled.div`
  flex: 2;
  margin-left: 0.5em;
  color: ${props => props.theme.white};
  font-size: 2em;
`

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5em 2em;
`

const AppList = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5em 0;
`

const Image = styled.img`
  margin-right: 0.5em;
`

const Link = styled.a`
  color: ${props => props.theme.doveGray};
`

const getCardDetails = name => {
  switch (name) {
    case '360 Analytics':
      return {
        name,
        icon: '360Analytics.png',
        link: '/#',
        title: 'Travel Manager Dashboard',
      }
    case 'Hotel':
      return {
        name,
        icon: 'hotel.png',
        link: 'https://hpm.bcdtravel.com',
        title: 'Hotel Program Manager',
      }
    case 'Air':
      return {
        name,
        icon: 'air.png',
        link: 'https://a3-prod1.s3.us-east-2.amazonaws.com/index.html#/login',
        title: 'Air Program Analytics',
      }
    default:
      return ''
  }
}

const ApplicationList = () => {
  const { loading, error, data } = useQuery(APPLICATION_LIST)
  if (loading) return <Loader />
  if (error) {
    return <ErrorMessage error={error} />
  }
  const { applicationList } = data
  return (
    <Container>
      {applicationList.map((app, i) => {
        const details = getCardDetails(app.applicationName)
        return (
          <Card key={i}>
            <CardHeader enabled={app.enabled}>
              <DivisionIcon
                src={require(`assets/${details.icon}`)}
                alt="divison icon"
              />
              <DivisonTitle>{details.name.toUpperCase()}</DivisonTitle>
            </CardHeader>
            <CardBody>
              <AppList>
                <Link
                  href={details.link}
                  disabled={!app.enabled}
                  target="_blank"
                >
                  {app.enabled ? (
                    <Image
                      src={require('assets/tool_active.png')}
                      alt="product icon"
                    />
                  ) : (
                    <Image
                      src={require('assets/tool_disabled.png')}
                      alt="product icon"
                    />
                  )}
                  <span>{details.title}</span>
                </Link>
              </AppList>
            </CardBody>
          </Card>
        )
      })}
    </Container>
  )
}

export default ApplicationList
