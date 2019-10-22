import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Navigation from './Navigation'
import ProgramPerformance from './Views/ProgramPerformance'
import Compliance from './Views/Compliance'
import Alerts from './Views/Alerts'
import TeBreakdown from './Views/TeBreakdown'
import NetSpendAnalysis from './Views/NetSpendAnalysis'

const Container = styled.div`
  padding: 4em;
  min-height: 900px;
  display: flex;
  background: ${props => props.theme.white};
  border-left: ${props => `1px solid ${props.theme.grayNurse}`};
  border-right: ${props => `1px solid ${props.theme.grayNurse}`};
  border-bottom: ${props => `1px solid ${props.theme.grayNurse}`};
`

const Drilldown = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Switch>
          <Route
            path={'/dashboard/program-performance'}
            component={ProgramPerformance}
          />
          <Route path={'/dashboard/compliance'} component={Compliance} />
          <Route path={'/dashboard/alerts'} component={Alerts} />
          <Route path={'/dashboard/te-breakdown'} component={TeBreakdown} />
          <Route
            path={'/dashboard/net-spend-analysis'}
            component={NetSpendAnalysis}
          />
        </Switch>
      </Container>
    </>
  )
}

export default Drilldown
