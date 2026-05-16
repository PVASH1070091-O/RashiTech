import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom';


const Navbar = () => {
  return (
    
     <header className="topbar">
        <div className="topbar-inner">
          <Link className="brand" to="/">
            <img
              src="/images/RashiTechLogo-removebg-preview.png"
              alt="logo"
              className="brand-logo"
            />
          </Link>
          <nav className="topnav">
            <a href="#categories">Categories</a>
            <a href="#products">Shop</a>
            <a href="#story">Story</a>
            <a href="#about">About</a>
          </nav>
        </div>
      </header>
  )
}

export default Navbar