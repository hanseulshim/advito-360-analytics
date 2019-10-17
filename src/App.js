import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { Route, Switch, Redirect } from 'react-router-dom'
import theme from 'styles/variables'
import GlobalStyle from 'styles/GlobalStyle'
import Main from 'components/Main'
import Login from 'components/Login'
import ResetPassword from 'components/Login/ResetPassword'
import Dashboard from 'components/Dashboard'
import User from 'components/User'
import { getToken } from 'helper'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, fas)

const PrivateRoute = ({ component: Component }) => (
  <Route
    render={() => (getToken() ? <Component /> : <Redirect to="/login" />)}
  />
)

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/reset-password" component={ResetPassword} />
      <PrivateRoute path="/" exact component={Main} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/user-profile" exact component={User} />
    </Switch>
  </ThemeProvider>
)

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired
}

export default App
