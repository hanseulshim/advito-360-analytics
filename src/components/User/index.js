import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import UserSidebar from 'components/Sidebar/UserSidebar'
import Header from 'components/Header'
import UserProfile from './UserProfile'
import ClientSetup from './ClientSetup'
import MyApplications from './MyApplications'
import RecentActivities from './RecentActivities'

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
        <>
          <MyApplications />
          <RecentActivities />
        </>
      </UserSidebar>
      <Content>
        <Header />
        <Switch>
          <Route path={'/user-profile'} component={UserProfile} />
          <Route path={'/client-setup'} component={ClientSetup} />
        </Switch>
      </Content>
    </Container>
  )
}

export default User
