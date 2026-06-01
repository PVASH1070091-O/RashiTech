import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom';


const Navbar = () => {
  return (
    
     <header className="topbar">
        <div className="topbar-inner">
          <Link className="brand" to="/">
            <img
              src="/images/ShortLogo.png"
              alt="logo"
              className="brand-logo"
            />
          </Link>
          <nav className="topnav">
            <a href="#services">Services</a>
            {/* <a href="#products">Shop</a>
            <a href="#story">Story</a> */}
            <a href="#about-us">About Us</a>
          </nav>
        </div>
      </header>
  )
}

export default Navbar