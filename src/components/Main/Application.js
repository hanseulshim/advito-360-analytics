import React from 'react'
import { Title } from 'components/common/Typography'
import ApplicationList from './ApplicationList'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.theme.verticalSpace};
`

const Products = styled(Title)`
  font-size: 2em;
`

const Application = () => {
  return (
    <Container>
      <Products>Products</Products>
      <ApplicationList />
    </Container>
  )
}

export default Application
