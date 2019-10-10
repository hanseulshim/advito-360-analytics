import React from 'react'
import styled from 'styled-components'
import SidebarUserInfo from './SidebarUserInfo'

const Container = styled.div`
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.grayNurse};
  padding: 2.5em 4em;
  height: 100%;
  position: absolute;
  opacity: 0.95;
  width: 300px;
  z-index: 5;
  left: 0;
`

const UserSidebar = () => {
  return (
    <Container>
      <SidebarUserInfo />
    </Container>
  )
}

export default UserSidebar
