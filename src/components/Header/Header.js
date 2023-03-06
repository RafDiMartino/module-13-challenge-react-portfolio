import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to='/'>Homepage</NavLink></li>
          <li><NavLink to='/projects'>Projects</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header