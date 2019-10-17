import React from 'react'
import styled from 'styled-components'
import ProgramPerformance from './ProgramPerformance'
import NetSpendAnalysis from './NetSpendAnalysis'
import TeBreakdownRow from './TeBreakdownRow'
import SavingsOpportunities from './SavingsOpportunities'
import RiskAreas from './RiskAreas'

const SummaryContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: ${props => props.theme.verticalSpace};
`

const Row = styled.div`
  display: flex;
  min-height: 200px;
`

const Summary = () => (
  <SummaryContainer>
    <Row>
      <ProgramPerformance />
      <NetSpendAnalysis />
    </Row>
    <TeBreakdownRow />
    <Row>
      <SavingsOpportunities />
      <RiskAreas />
    </Row>
  </SummaryContainer>
)

export default Summary
