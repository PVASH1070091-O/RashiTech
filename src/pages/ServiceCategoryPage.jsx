import { useEffect, useLayoutEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { serviceCategories } from './products';
import Navbar from './Navbar';
import { FaWhatsapp,FaGoogle,FaInstagram,FaYoutube,FaEnvelope } from "react-icons/fa";
import Footer from './Footer';



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
   <Footer />
      </>
  );
}