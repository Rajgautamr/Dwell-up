import React from 'react'
import './navbar.css'
import ForeverFit from '../../assets/imgs/foreverfit.png'
const Navbar = () => {
  return (
    <div className='Header'>
        <logo>
            <img src={ForeverFit}/>
        </logo>
      <nav className='nav'>
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Contact Us</li>
        </ul>
      </nav>
      <button className='Contact Us' >
        Contact Us
      </button>
    </div>
  )
}

export default Navbar
