import React from 'react'
import { FaWhatsapp, FaGoogle, FaInstagram, FaYoutube ,FaEnvelope} from "react-icons/fa";


const Footer = () => {
  return (
    <>
     <footer className="modern-footer">
        <div className="footer-overlay" />

        <div className="footer-container">
          {/* LEFT */}
          <div className="footer-brand">
            <img src="/images/logo-image-footer.png" alt="Rashi Tech" style={{ height: "100%" }} />

            {/* <p>
        Immersive entertainment, education, and smart visual experiences crafted for modern spaces.
      </p> */}
          </div>

          {/* LINKS */}
          <div className="footer-column">
            <h3>Useful Links</h3>

            <a href="/">Home</a>
            <a href="#services">Services</a>
            {/* <a href="#products">Products</a> */}
            <a href="#about">About Us</a>
            {/* <a href="#contact">Contact</a> */}
          </div>

          {/* POLICIES */}
          {/* <div className="footer-column">
            <h3>Policies</h3>

            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Conditions</a>
            <a href="/">Shipping Policy</a>
          </div> */}

          {/* SOCIAL */}
          <div className="footer-column">
            <h3>Social Links</h3>

            <p className="footer-social-text">
              Don’t miss our future updates! Follow us today.
            </p>

            <div className="footer-socials">
              <a href="https://share.google/j9RThQG1hBNcrOo3m" target="_blank"
    rel="noopener noreferrer"><FaGoogle /></a>
              <a href="https://www.instagram.com/rashi_technologies?utm_source=qr" target="_blank"
    rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://youtube.com/@rashitechnologies?si=uGPg217T5an8Ef2F" target="_blank"
    rel="noopener noreferrer"><FaYoutube /></a>
     <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=Rashitech1012@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaEnvelope />
    </a>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom-bar">
          <p style={{ color: 'white' }}>© 2026 Rashi Tech. All rights reserved.</p>


        </div>
      </footer>
      <a
        href="https://wa.me/919116603799?text=Hi%20Rashi%20Tech,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        className="global-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
      </>
  )
}

export default Footer