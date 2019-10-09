import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { HashRouter } from 'react-router-dom'
import { getToken, logout } from './helper'

const client = new ApolloClient({
  // uri: 'http://localhost:4000/graphql',
  uri: 'https://lfl1qiymy7.execute-api.us-east-2.amazonaws.com/dev/graphql',
  request: operation => {
    const sessiontoken = getToken()
    if (sessiontoken) {
      operation.setContext({
        headers: {
          sessiontoken
        }
      })
    }
  },
  onError: ({ graphQLErrors }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ extensions }) => {
        if (extensions.code === 401) {
          logout()
        }
      })
    }
  }
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <HashRouter>
      <App />
    </HashRouter>
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
