import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='header' style={{ display:'flex',justifyContent:'space-between' }}>
<div className='logo'>
<h1>Learning</h1>
</div>

<ul className='navbar'>
            <li><NavLink className='nblink'  to="/" style={{textDecoration:"none"}}>Home</NavLink></li>
            <li><NavLink className='nblink' to="/lecture" style={{textDecoration:"none"}}>Lecture</NavLink></li>
            <li><NavLink className='nblink' to="/contact" style={{textDecoration:"none"}}>Sign in</NavLink></li>
           </ul>


    </div>
  )
}

export default Navbar