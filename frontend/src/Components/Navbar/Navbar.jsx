// import React, { useEffect, useState} from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


// import css 
import './Navbar.css'

// import images 
import logo from '../../assets/logo.png'

const Navbar = () => {
  // For Navigation
  const navigate = useNavigate();
  return (
    <nav className='container'>
        {/* image */}
      <img src={logo} alt="" className='logo'  onClick={()=>navigate("/")}/>
      {/* links */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
        <li><Link to="/info-resources">Informational Resources</Link></li>
        <li><Link to="/quizes">Quizes and Challenges</Link></li>
        <li><Link to="/contact-us">ContactUs</Link></li>
        <li className='btn btn-fill'><Link to="/donate-now">Donate Now</Link></li>
        <li className='btn-out'><Link to="/register-now">Register Now</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
