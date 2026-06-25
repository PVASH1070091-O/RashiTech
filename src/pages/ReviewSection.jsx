import React, { useEffect, useState } from 'react'
import './ReviewSection.css'

const testimonials = [
  {
    id: 1,
    name: 'Piyush Vashistha',
    // role: 'CEO',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    review:
      'Very good experience,  nice setup, very smooth process, kushagra(owner) is very kind.',
  },
  {
    id: 2,
    name: 'Ritwika Sharma',
    // role: 'Founder',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    review:
      'Rashi technologies people are very experienced and professional...they guided and helped us a lot in making our home theatre.... thanks for your service.',
  },
  {
    id: 3,
    name: 'Vijendra Pradhan',
    role: 'Creative Director',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
    review:
      'Rashi technologies gave the perfect solution we require.Highly recommended for smart class room solutions, interactive panels/ smart boards and studio setup solutions',
  },
  {
    id: 4,
    name: 'Ayush Choudhary',
    // role: 'Architect',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
    review:
      'Rashi technologies did studio setup for me their services are very nice team is very friendly and responsible for their work highly recommend to give them a chance to work they will do it well',
  },
  // {
  //   id: 5,
  //   name: 'Michael Ray5',
  //   role: 'Architect',
  //   image:
  //     'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
  //   review:
  //     'Luxury execution and modern immersive spaces with premium detailing.',
  // },
  // {
  //   id: 6,
  //   name: 'Michael Ray6',
  //   role: 'Architect',
  //   image:
  //     'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
  //   review:
  //     'Luxury execution and modern immersive spaces with premium detailing.',
  // },
]

export default function ReviewSection() {
  const [active, setActive] = useState(0)

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setActive((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [active])

  const getPosition = (index) => {
    const total = testimonials.length

    if (index === active) return 'active'

    if (index === (active - 1 + total) % total) return 'left'

    if (index === (active + 1) % total) return 'right'

    return 'hidden'
  }

  return (
    <section className="testimonial-section">
      {/* <h2 className="testimonial-title">What our clients say about working with us</h2> */}
      <div className="reviews-heading-wrapper">
    <h2>
      What Our Clients Say{" "}
      <span className="italic-gold">About Us</span>
    </h2>
    <div className="ornament">
      <div className="ornament-line" />
      <div className="ornament-center">
        <svg viewBox="0 0 24 24"><path d="M12 2 C10 6 6 7 2 7 C6 9 9 12 8 17 C10 14 12 13 12 13 C12 13 14 14 16 17 C15 12 18 9 22 7 C18 7 14 6 12 2Z"/></svg>
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/></svg>
        <svg viewBox="0 0 24 24"><path d="M12 2 C10 6 6 7 2 7 C6 9 9 12 8 17 C10 14 12 13 12 13 C12 13 14 14 16 17 C15 12 18 9 22 7 C18 7 14 6 12 2Z"/></svg>
      </div>
      <div className="ornament-line right" />
    </div>
  </div>

      <div className="carousel-container">
        <button className="nav-btn left-btn" onClick={prevSlide}>
          ‹
        </button>

        {testimonials.map((item, index) => (
          <div
            key={item.id}
            className={`testimonial-card ${getPosition(index)}`}
          >
            <div className="quote">❝</div>

            {/* <img
              src={item.image}
              alt={item.name}
              className="testimonial-image"
            /> */}

            <p className="testimonial-review">{item.review}</p>

            <div className="stars">★★★★★</div>

            <h3>{item.name}</h3>
            {/* <span>{item.role}</span> */}
          </div>
        ))}

        <button className="nav-btn right-btn" onClick={nextSlide}>
          ›
        </button>
      </div>
    </section>
  )
}