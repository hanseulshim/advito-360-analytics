import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Title } from 'components/common/Typography'

const PersonaContainer = styled.div`
  display: flex;
  margin-top: ${props => props.theme.verticalSpace};
  margin-bottom: ${props => props.theme.verticalSpace};
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.concrete};
  border-radius: 0.8em;
  padding: 2em;
  justify-content: space-between;
  min-height: 200px;
`

const Description = styled.div`
  flex: 1;
`

const TitleRow = styled.div`
  margin-bottom: 1em;
`

const TeBreakdownRow = () => (
  <PersonaContainer>
    <Description>
      <TitleRow>
        <Link to="/dashboard/te-breakdown">
          <Title>T&E Breakdown</Title>
        </Link>
      </TitleRow>
    </Description>
  </PersonaContainer>
)

export default TeBreakdownRow
