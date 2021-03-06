import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: flex-end;
`

export const NavItem = styled(Link)`
  flex: 1;
  text-align: center;
  font-weight: 500;
  color: #000;
  text-transform: uppercase;
  padding: 1em;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  border-top: ${props => props.replace && `1px solid ${props.theme.grayNurse}`};
  border-bottom: ${props =>
    !props.replace && `1px solid ${props.theme.grayNurse}`};
  border-left: ${props =>
    props.replace && `1px solid ${props.theme.grayNurse}`};
  border-right: ${props =>
    props.replace && `1px solid ${props.theme.grayNurse}`};
  padding: ${props =>
    !props.replace && '0 calc(1em + 1px) calc(1em - 1px) calc(1em + 1px)'};
  background: ${props => props.replace && props.theme.white};
  cursor: pointer;
`

const NavItems = [
  {
    link: '/dashboard/program-performance',
    title: 'Program Performance'
  },
  {
    link: '/dashboard/net-spend-analysis',
    title: 'Net Spend Analysis'
  },
  {
    link: '/dashboard/te-breakdown',
    title: 'T&E Breakdown'
  },
  {
    link: '/dashboard/compliance',
    title: 'Compliance'
  },
  {
    link: '/dashboard/alerts',
    title: 'Alerts'
  }
]

const Navigation = () => {
  const location = useLocation()
  return (
    <Container>
      {NavItems.map((nav, index) => (
        <NavItem
          key={index}
          to={nav.link}
          replace={location.pathname.includes(nav.link)}
        >
          {nav.title}
        </NavItem>
      ))}
    </Container>
  )
}

export default Navigation
