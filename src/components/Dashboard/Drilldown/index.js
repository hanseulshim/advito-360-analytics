import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Navigation from './Navigation'
import ProgramPerformance from './Views/ProgramPerformance'
import SavingsOpportunities from './Views/SavingsOpportunities'
import RiskAreas from './Views/RiskAreas'
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
          <Route
            path={'/dashboard/savings-opportunities'}
            component={SavingsOpportunities}
          />
          <Route path={'/dashboard/risk-areas'} component={RiskAreas} />
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
