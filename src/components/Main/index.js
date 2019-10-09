import React from 'react'
import styled from 'styled-components'
import Header from 'components/Header'
import Application from './Application'
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

const PortalContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.theme.verticalSpace};
`

const Main = () => (
  <Container>
    <Sidebar />
    <MainContainer>
      <Header />
      <PortalContainer>
        <Application />
      </PortalContainer>
    </MainContainer>
  </Container>
)

export default Main
