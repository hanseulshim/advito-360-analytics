import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import UserSidebar from 'components/Sidebar/UserSidebar'
import Header from 'components/Header'
import UserProfile from './UserProfile'

const Container = styled.div`
  margin: auto;
  display: flex;
  position: relative;
  height: 100%;
  background-color: ${props => props.theme.white};
`

const Content = styled.div`
  flex: 3;
  padding: 0em 3em;
`

const User = () => {
  return (
    <Container>
      <UserSidebar>
        <div>My Applications</div>
      </UserSidebar>
      <Content>
        <Header />
        <Switch>
          <Route path={'/user-profile'} exact component={UserProfile} />
          {/* <Route path={'/client-setup'} component={ClientSetup} />
          <Route path={'/user-access'} component={UserAcess} /> */}
        </Switch>
      </Content>
    </Container>
  )
}

export default User
