import React from 'react'
import { Link , NavLink } from 'react-router-dom'

import './Navbar.css'
const Navbar = () => {
  return (
    <div className='Parent'>
      <h1>Kodecamp Dev's</h1>
      <div className='contents'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
      </div>
  </div>
  
  )
}

export default Navbar