import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/variables'
import GlobalStyle from 'styles/GlobalStyle'
import Main from 'components/Main'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  )
}

export default App
