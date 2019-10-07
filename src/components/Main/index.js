import React from 'react'
import styled from 'styled-components'

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

const Portal = () => (
  <Container>
    <MainContainer>
      <PortalContainer>
        <div>test</div>
      </PortalContainer>
    </MainContainer>
  </Container>
)

export default Portal
