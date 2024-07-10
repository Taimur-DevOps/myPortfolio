import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'




const Logo = styled(NavLink)`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
position: fixed;
font-size:2rem;
left: 2rem;
top: 2rem;
z-index:3;
text-decoration: none;
font-weight:bold;
`

const LogoComponent = (props) => {
  return (
    // <Route path="/" element={<Main />} />
    <Logo color={props.theme} to="/">
      TAK
    </Logo>
  )
}

export default LogoComponent
