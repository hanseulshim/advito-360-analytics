import React from 'react'
import styled from 'styled-components'
import Header from 'components/Header'
import Application from './Application'

const Container = styled.div`
  max-width: 1600px;
  margin: auto;
  display: flex;
  position: relative;
  height: 100%;
`

const MainContainer = styled.div`
  flex: 3;
  padding: 0em 4em;
`

const PortalContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.theme.verticalSpace};
`

const Main = () => (
  <Container>
    <MainContainer>
      <Header />
      <PortalContainer>
        <Application />
      </PortalContainer>
    </MainContainer>
  </Container>
)

export default Main
