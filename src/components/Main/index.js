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
  flex: 1;
  flex-direction: column;
  margin-top: ${props => props.theme.verticalSpace};
  padding: 0em 4em;
`

const Main = () => (
  <Container>
    <Sidebar />
    <PortalContainer>
      <Header />
      <Application />
    </PortalContainer>
  </Container>
)

export default Main
