import React from 'react'
import styled from 'styled-components'
import Header from 'components/Header'
import Application from './Application'
import Sidebar from 'components/Sidebar'

const MainContainer = styled.div`
  width: 100%;
  padding: 0em 4em;
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
`

const PortalContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Main = () => (
  <>
    <MainContainer>
      <Sidebar />
      <Header />
      <PortalContainer>
        <Application />
      </PortalContainer>
    </MainContainer>
  </>
)

export default Main
