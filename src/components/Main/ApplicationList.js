import React from 'react'
import { useHistory } from 'react-router-dom'
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

const App = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5em 0;
  color: ${props => props.theme.doveGray};
  font-size: 1em;
  cursor: ${props => (!props.enabled ? 'no-drop' : 'pointer')};
`

const Image = styled.img`
  margin-right: 0.5em;
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
        link: 'https://a3.advito.com/index.html#/login',
        title: 'Air Program Analytics'
      }
    default:
      return ''
  }
}

const ApplicationList = () => {
  const history = useHistory()
  const { loading, error, data } = useQuery(APPLICATION_LIST, {
    fetchPolicy: 'cache-and-network'
  })
  if (loading) return <Loader />
  if (error) {
    return <ErrorMessage error={error} />
  }
  const applicationList = data.applicationList.sort((a, b) =>
    a.enabled ? -1 : 1
  )

  const handleRoute = (details, enabled) => {
    if (!enabled) {
      return
    }
    if (details.name === '360 Analytics') {
      history.push('/dashboard')
    } else {
      window.open(details.link)
    }
  }

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
              <App
                onClick={e => handleRoute(details, app.enabled)}
                enabled={app.enabled}
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
                <AppTitle level={4} enabled={app.enabled}>
                  {details.title}
                </AppTitle>
              </App>
            </CardBody>
          </Card>
        )
      })}
    </Container>
  )
}

export default ApplicationList
