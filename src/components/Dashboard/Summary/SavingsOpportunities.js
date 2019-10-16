import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Title } from 'components/common/Typography'

const Container = styled.div`
  flex: 1;
  padding: 2em;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.concrete};
  border-radius: 0.8em;
`

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
`

const SavingsOpportunities = () => (
  <Container>
    <SectionContainer>
      <Link to="/dashboard/savings-opportunities">
        <Title>Savings Opportunities</Title>
      </Link>
    </SectionContainer>
  </Container>
)

export default SavingsOpportunities
