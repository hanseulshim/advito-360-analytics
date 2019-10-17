import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Title } from 'components/common/Typography'

const Container = styled.div`
  flex: 1;
  padding: 2em 0 0em 2em;
  display: flex;
  flex-direction: column;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5em;
`

const NetSpendAnalysis = () => (
  <Container>
    <TitleContainer>
      <Link to="/dashboard/net-spend-analysis">
        <Title>Net Spend Analysis</Title>
      </Link>
    </TitleContainer>
  </Container>
)

export default NetSpendAnalysis
