import { useEffect, useLayoutEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { serviceCategories } from './products';
import Navbar from './Navbar';
import { FaWhatsapp,FaFacebook,FaInstagram,FaYoutube } from "react-icons/fa";



export default function ServiceCategoryPage() {
  const { categoryId } = useParams();
  const category = serviceCategories[categoryId];
//   useLayoutEffect(() => {
//   window.scrollTo(0, 0);
// }, [categoryId]);
useEffect(() => {
  console.log('scroll position on mount:', window.scrollY);
  setTimeout(() => {
    console.log('scroll position after 100ms:', window.scrollY);
  }, 100);
  setTimeout(() => {
    console.log('scroll position after 500ms:', window.scrollY);
  }, 500);
}, []);

  // Scroll to top before paint
  useEffect(() => {
    const revealItems = document.querySelectorAll('.scroll-reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.18 },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      revealItems.forEach((item) => observer.unobserve(item));
      observer.disconnect();
    };
  }, [categoryId]);

  if (!category) {
    return <Navigate to="/" replace />;
  }


  return (
    <>
    <main className="service-page-shell" style={{ '--accent': category.accent }}>
      <Navbar />

      {/* Hero: CSS keyframe animation, no scroll-reveal */}
      <section className="service-page-hero">
        <div className="service-page-copy">
          <p className="eyebrow" style={{color:'black'}}>{category.eyebrow}</p>
          <h1>{category.title}</h1>
          <p>{category.intro}</p>
        </div>

        <div className="service-hero-image">
          <img src={category.heroImage} alt={`${category.label} product showcase`} />
        </div>
      </section>

      <section className="category-products" aria-label={`${category.label} product list`}>
        {category.products.map((item, index) => (
          <article
            className={`category-product-row scroll-reveal ${
              index % 2 === 1 ? 'category-product-row-reverse' : ''
            }`}
            style={{ '--reveal-delay': `${index * 90}ms` }}
            key={item.name}
          >
            <div className="category-product-image">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="category-product-copy">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </section>
      
    </main>
    <footer className="modern-footer">
        <div className="footer-overlay" />
      
        <div className="footer-container">
          {/* LEFT */}
          <div className="footer-brand">
            <img src="/images/RashiTechLogo-removebg-preview.png" alt="Rashi Tech" style={{height:"100%"}}/>
        
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
              <a href="/"><FaFacebook /></a>
              <a href="https://www.instagram.com/rashi_technologies?utm_source=qr" target="_blank"
    rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://youtube.com/@rashitechnologies?si=uGPg217T5an8Ef2F" target="_blank"
    rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </div>
        
        </div>
      
        {/* BOTTOM */}
        <div className="footer-bottom-bar">
          <p style={{color:'white'}}>© 2026 Rashi Tech. All rights reserved.</p>
      
         
        </div>
      </footer>
      </>
  );
}