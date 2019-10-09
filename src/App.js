import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { Route, Switch, Redirect } from 'react-router-dom'
import theme from 'styles/variables'
import GlobalStyle from 'styles/GlobalStyle'
import Main from 'components/Main'
import Login from 'components/Login'
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
      <PrivateRoute path="/" exact component={Main} />
    </Switch>
  </ThemeProvider>
)

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired
}

export default App
