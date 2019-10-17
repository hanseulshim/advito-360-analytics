import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import Drilldown from './Drilldown'
import Summary from './Summary'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'

const Container = styled.div`
  margin: auto;
  display: flex;
  position: relative;
  height: 100%;
`

const MainContainer = styled.div`
  padding: 0em 4em;
  width: 100%;
`

const Dashboard = () => (
  <Container>
    <Sidebar />
    <MainContainer>
      <Header />
      <Switch>
        <Route path={'/dashboard'} exact component={Summary} />
        <Route path={'/dashboard/:category'} component={Drilldown} />
      </Switch>
    </MainContainer>
  </Container>
)

export default Dashboard
