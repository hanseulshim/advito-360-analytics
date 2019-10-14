import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SidebarUserInfo from './SidebarUserInfo'

const Container = styled.div`
  background: ${props => props.theme.alabaster};
  border: 1px solid ${props => props.theme.grayNurse};
  flex: 1
  padding: 2.5em 4em;
`

const UserSidebar = ({ children }) => {
  return (
    <Container>
      <SidebarUserInfo />
      {children}
    </Container>
  )
}

UserSidebar.propTypes = {
  children: PropTypes.object
}

export default UserSidebar
