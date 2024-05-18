import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="navbar">
        <img src= "/Assets/logo.png" alt="" className="logo" />
        <ul className='navbar-menue'>
            <li>Home</li>
            <li>Menu</li>
            <li>Mobile App</li>
            <li>Contact us</li>
        </ul>

        <div className='navbar-right'>

        </div>
    </div>
  )
}

export default NavBar