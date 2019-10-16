import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { APPLICATION_LIST } from 'api'
import Loader from 'components/common/Loader'
import ErrorMessage from 'components/common/ErrorMessage'
import styled from 'styled-components'
import { Title } from 'components/common/Typography'

const Container = styled.div`
  display: flex;
  margin-top: 1.5em;
`

const Card = styled.div`
  margin-right: 2em;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.grayNurse};
  border-radius: 10px;
  flex: 1;
  overflow: hidden;
  min-height: 300px;
  max-width: 275px;
  min-width: 200px;
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
  line-height: 1em;
  flex: 2;
  margin-left: 0.5em;
  color: ${props => props.theme.white};
  font-size: 1.25em;
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
  font-size: 1.25em;
`

const AppTitle = styled(Title)`
  color: ${props => !props.enabled && props.theme.pumice};
  font-size: 1em;
`

const getCardDetails = name => {
  switch (name) {
    case '360 Analytics':
      return {
        name,
        icon: '360Analytics.png',
        link: '/#',
        title: 'Travel Manager Dashboard'
      }
    case 'Hotel':
      return {
        name,
        icon: 'hotel.png',
        link: 'https://hpm.bcdtravel.com',
        title: 'Hotel Program Manager'
      }
    case 'Air':
      return {
        name,
        icon: 'air.png',
        link: 'https://a3-prod1.s3.us-east-2.amazonaws.com/index.html#/login',
        title: 'Air Program Analytics'
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
  const applicationList = data.applicationList.sort((a, b) =>
    a.enabled ? -1 : 1
  )

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
                </Link>
                <Link
                  href={details.link}
                  disabled={!app.enabled}
                  target="_blank"
                >
                  <AppTitle level={4} enabled={app.enabled}>
                    {details.title}
                  </AppTitle>
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
