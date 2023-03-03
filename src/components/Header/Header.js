import React from 'react'
import { NavLink } from 'react-router-dom'

import "./Header.css"
function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to='module-13-challenge-react-portfolio/'>Homepage</NavLink></li>
          <li><NavLink to='module-13-challenge-react-portfolio/projects'>Projects</NavLink></li>
          <li><NavLink to='module-13-challenge-react-portfolio/contact'>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header