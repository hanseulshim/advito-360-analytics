import React, { useState } from 'react'
import styled from 'styled-components'
import Icon from 'components/common/Icon'
// import SidebarUserInfo from './SidebarUserInfo'

const Container = styled.div`
  flex: 1.25;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.grayNurse};
  padding: 2.5em 4em;
  height: 100%;
  position: absolute;
  opacity: 0.95;
  z-index: 5;
  left: 0;
`

const PersonIcon = styled(Icon)`
  position: absolute;
  font-size: 1.3em;
  padding: 0.5em;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.grayNurse};
  border-left: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  margin-top: 3.5em;
  @media (max-width: 1336px) {
    margin-top: 4.4em;
  }
  color: ${props => props.theme.treePoppy};
  cursor: pointer;
  left: 0;
`

const CloseIcon = styled(PersonIcon)`
  right: calc(-2em + 6px);
  left: initial;
`

const Sidebar = () => {
  const [collapse, setCollapse] = useState(true)

  return collapse ? (
    <PersonIcon className="fas fa-user" onClick={() => setCollapse(false)} />
  ) : (
    <Container>
      <CloseIcon className="fas fa-times" onClick={() => setCollapse(true)} />
      {/* <SidebarUserInfo /> */}
    </Container>
  )
}

export default Sidebar
