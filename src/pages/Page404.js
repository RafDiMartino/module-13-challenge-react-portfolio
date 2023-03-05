import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Page404.css"

function Page404() {
  return (
    <div className='page404-container'>
      <h2>Oops...This page does not exist</h2>
      <div className='buttons-container'>
        <NavLink className='button' to='/'>Homepage</NavLink>
        <NavLink className='button' to='projects'>My projects</NavLink>
        <NavLink className='button' to='contact'>Contact me</NavLink>
      </div>
    </div>
  )
}

export default Page404