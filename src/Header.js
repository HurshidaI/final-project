import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { navItems } from './data'

const Container = styled.div`
  width: 100%;
  height: auto;
`
const NavBar = styled.nav`
  width: 100vw;
  height: 60px;
  background: #9a7b4f;
  line-height: 60px;
`

const UL = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  padding: 0 3rem;
`
const LI = styled.li`
  margin-left: 1rem;
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: #000;
  }
`

export default function Hearder() {
  return (
    <Container>
      <NavBar>
        <UL>
          {navItems.map((item, i) => (
            <LI key={i}>
              <Link to={item.path}>{item.navTitle}</Link>
            </LI>
          ))}
        </UL>
      </NavBar>
    </Container>
  )
}
