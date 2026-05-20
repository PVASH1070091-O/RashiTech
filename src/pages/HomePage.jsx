import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import Testimonials from './ReviewSection';
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Navbar from './Navbar';


const metrics = [
  { target: 12, format: 'k+', label: 'Rooms transformed' },
  { target: 48, format: 'h', label: 'Fast dispatch window' },
  { target: 4.9, format: '/5', label: 'Customer love score' },
];

const storyCards = [
  {
    tag: 'Movement',
    title: 'Motion that feels designed, not bolted on.',
    text: 'Soft parallax, reveal timing, and layered gradients give the page a premium, alive feel without relying on heavy animation libraries.',
  },
  {
    tag: 'Commerce',
    title: 'Built to sell with editorial storytelling.',
    text: 'The homepage behaves like a brand film, then transitions naturally into product discovery and a focused product detail experience.',
  },
  {
    tag: 'Performance',
    title: 'Lightweight by default.',
    text: 'Native scroll behavior, CSS animations, and simple React state keep the experience smooth while staying easy to maintain.',
  },
];
console.log("inddeeerrerere", window.innerWidth)
const audienceTracks = [
  {
    id: 'educational',
    tag: 'Presentation & EdTech Solution',
    title: 'Presentation & EdTech Solution',
    text: 'Show digital boards, teaching displays, smart study tools, and speaker-led setups in a clean visual flow that feels modern and easy to explore.',
    note: 'Built for classrooms, learning spaces, and creator-led study environments.',
    galleryLabel: 'Educational environments',
    galleryImages: [
      '/images/InteractiveFlatPanel.jpeg',
      // 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
      // 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80',
      // 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1400&q=80',
    ],
    mobileImage: '/images/InteractiveFlatPanel.jpeg',
  },
  {
    id: 'entertainment',
    tag: 'Audio & Home Entertainment',
    title: 'Audio & Home Entertainment',
    text: 'Highlight speakers, screens, gaming accessories, and electrical appliances with richer motion and bolder imagery so the category feels energetic and immersive.',
    note: 'Built for speakers, cinematic living rooms, and premium home-tech showcases.',
    galleryLabel: 'Entertainment environments',
    galleryImages: [
      '/images/AcousticSol.jpeg',
      '/images/Recliner.jpeg',
      // 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1400&q=80',
      // 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    ],
    mobileImage: '/images/AcousticSol.jpeg',
  },
  {
    id: 'displaySol',
    tag: 'Display & Visual Solution',
    title: 'Display & Visual Solution',
    text: 'Highlight speakers, screens, gaming accessories, and electrical appliances with richer motion and bolder imagery so the category feels energetic and immersive.',
    note: 'Built for speakers, cinematic living rooms, and premium home-tech showcases.',
    galleryLabel: 'Entertainment environments',
    galleryImages: [
      '/images/Projector1-removebg-preview.png',
      // 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80',
      // 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1400&q=80',
      // 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    ],
    mobileImage: '/images/Projector1-removebg-preview.png',
  },
  {
    id: 'camera',
    tag: 'Camera & Conferencing',
    title: 'Camera & Conferencing',
    text: 'Highlight speakers, screens, gaming accessories, and electrical appliances with richer motion and bolder imagery so the category feels energetic and immersive.',
    note: 'Built for speakers, cinematic living rooms, and premium home-tech showcases.',
    galleryLabel: 'Entertainment environments',
    galleryImages: [
      '/images/CameraConferecing.jpeg',
    ],
    mobileImage: '/images/CameraConferecing.jpeg',
  },
  {
    id: 'accessories',
    tag: 'Accessories & Support Products',
    title: 'Accessories & Support Products',
    text: 'Highlight speakers, screens, gaming accessories, and electrical appliances with richer motion and bolder imagery so the category feels energetic and immersive.',
    note: 'Built for speakers, cinematic living rooms, and premium home-tech showcases.',
    galleryLabel: 'Entertainment environments',
    galleryImages: [
      '/images/hometheater.jpg',
      // 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80',
      // 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1400&q=80',
      // 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    ],
    mobileImage: '/iamges/hometheater.jpg',
  },
];

const eduProducts = [
  {
    image: '/images/PTZCamera-removebg-preview copy.png',
  },
  {
    image: '/images/tripodstandscreeen-removebg-preview.png',
  },
  {
    image: '/images/Projector1-removebg-preview.png',
  },
  {
    image: '/images/HTSystem-removebg-preview.png',
  },
  {
    image: '/images/InteractiveTouchPanel.png',
  },

]

const clients = [
  {
    name: 'unitech',
    mark: 'U',
    className: 'client-logo-unitech',
    subtitle: '',
  },
  {
    name: 'PHILIPS',
    mark: 'P',
    className: 'client-logo-philips',
    subtitle: '',
  },
  {
    name: 'adani',
    mark: 'a',
    className: 'client-logo-adani',
    subtitle: '',
  },
  {
    name: 'INDIA TODAY',
    mark: 'IT',
    className: 'client-logo-india-today',
    subtitle: '',
  },
  {
    name: 'DLF',
    mark: '△',
    className: 'client-logo-dlf',
    subtitle: 'BUILDING INDIA',
  },
  {
    name: 'PCJ',
    mark: '◎',
    className: 'client-logo-pcj',
    subtitle: 'PC Jeweller',
  },
  {
    name: 'OMAXE',
    mark: '▣',
    className: 'client-logo-omaxe',
    subtitle: 'Turning dreams into reality',
  },
  {
    name: 'torrent',
    mark: '✦',
    className: 'client-logo-torrent',
    subtitle: 'POWER',
  },
];

const socialLinks = [
  { name: 'Instagram', handle: '@rashitechspaces', icon: 'IG' },
  { name: 'Facebook', handle: 'Rashi Tech', icon: 'FB' },
  { name: 'X', handle: '@rashitech', icon: 'X' },
  { name: 'LinkedIn', handle: 'Rashi Tech', icon: 'IN' },
];

function formatMetricValue(value, format) {
  if (format === 'k+') {
    return `${Math.round(value)}k+`;
  }

  if (format === 'h') {
    return `${Math.round(value)}h`;
  }

  if (format === '/5') {
    return `${value.toFixed(1)}/5`;
  }

  return `${Math.round(value)}`;
}

function MetricCounter({ target, format, label }) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(() => formatMetricValue(0, format));

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    let frameId = 0;
    let hasAnimated = false;

    const animate = () => {
      const duration = 1400;
      const startTime = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const nextValue = target * eased;
        setDisplayValue(formatMetricValue(nextValue, format));

        if (progress < 1) {
          frameId = window.requestAnimationFrame(tick);
        }
      };

      frameId = window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, [format, target]);

  return (
    <div ref={ref} className="metric metric-animated">
      <strong>{displayValue}</strong>
      <span>{label}</span>
    </div>
  );
}

export default function HomePage() {
  const galleryViewportRef = useRef(null);
  const galleryTrackRef = useRef(null);
  const [activeTrack, setActiveTrack] = useState(audienceTracks[0].id);
  const [galleryProgress, setGalleryProgress] = useState(0);
  const [galleryMaxShift, setGalleryMaxShift] = useState(0);

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal-card');
    const trackSteps = document.querySelectorAll('.track-step');
    const scrollRail = document.querySelector('.collab-scroll-rail');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.2 },
    );

    revealItems.forEach((item) => observer.observe(item));
    let ticking = false;

    const updateActiveTrack = () => {
      ticking = false;

      if (!scrollRail || trackSteps.length === 0) {
        return;
      }

      const railRect = scrollRail.getBoundingClientRect();

      // smoother + earlier start
      const startOffset = window.innerHeight * 0.35;

      // total scrollable area
      const totalScrollable =
        scrollRail.offsetHeight - window.innerHeight * 0.4;

      // normalized progress
      const progress = Math.min(
        Math.max((startOffset - railRect.top) / totalScrollable, 0),
        1
      );

      setGalleryProgress(progress);

      // determine active section properly
      const sectionProgress = progress * audienceTracks.length;

      const activeIndex = Math.min(
        Math.floor(sectionProgress),
        audienceTracks.length - 1
      );

      const nextActiveTrack = audienceTracks[activeIndex]?.id;

      setActiveTrack((current) =>
        current === nextActiveTrack ? current : nextActiveTrack
      );
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateActiveTrack);
      }
    };

    updateActiveTrack();

    const handlePointerMove = (event) => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateActiveTrack);
    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      revealItems.forEach((item) => observer.unobserve(item));
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateActiveTrack);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  const currentTrack =
    audienceTracks.find((track) => track.id === activeTrack) ?? audienceTracks[0];
  const combinedGallery = audienceTracks.flatMap((track, trackIndex) =>
    track.galleryImages.map((image, imageIndex) => ({
      image,
      title: track.title,
      galleryLabel: track.galleryLabel,
      key: `${track.id}-${imageIndex}`,
      trackId: track.id,
      startsTrack: imageIndex === 0 && trackIndex > 0,
    })),
  );
  const galleryPosition = galleryProgress * Math.max(combinedGallery.length - 1, 0);
  const currentGalleryIndex = Math.min(
    Math.floor(galleryPosition),
    Math.max(combinedGallery.length - 1, 0),
  );
  const galleryStepProgress =
    currentGalleryIndex >= combinedGallery.length - 1 ? 0 : galleryPosition - currentGalleryIndex;
  const currentGalleryItem = combinedGallery[currentGalleryIndex];
  const previousGalleryItem = combinedGallery[Math.max(currentGalleryIndex - 1, 0)];
  const nextGalleryItem =
    combinedGallery[Math.min(currentGalleryIndex + 1, combinedGallery.length - 1)];

  return (
    <>

      <Navbar />
      <section className="hero">

        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />
        <div className="hero-copy">
          <p className="eyebrow">Entertainment + Education Spaces</p>
          <h1>
            <span style={{ color: 'white' }}>Premium recliners,</span>
            <span> digital boards, and home theater spaces.</span>
          </h1>
          <p className="hero-text" style={{ color: "white" }}>
            Discover entertainment and learning setups designed for comfort, clarity, and immersion
            from luxury recliners and mini theater seating to digital boards, home theaters, and
            smart visual solutions.
          </p>
        </div>

        <div className="hero-visual">
          <div className="orbital orbital-one" />
          <div className="orbital orbital-two" />
          <div className="device-card">
            <div className="device-card-image">
              <img
                src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=80"
                alt="Mini theater hall with recliner seating"
              />
            </div>
            <div className="device-card-footer">
              <div>
                <p>Featured setup</p>
                <strong style={{ color: "white" }}>Mini theater seating, projection mood, and immersive viewing.</strong>
              </div>
              <span>01</span>
            </div>
          </div>
        </div>

      </section>

      <main className="page-shell">
        <div className="pointer-glow" />

        <section className="intro-section reveal-card" id="about-us">
          <div className="intro-panel">
            <div className="intro-copy">
              <p className="eyebrow">About Us</p>
              <h2>
                We design immersive entertainment and education environments for modern spaces.
              </h2>
              <p>
                Rashi Tech brings together premium recliners, mini theater concepts, digital boards,
                home theater solutions, and smart visual systems to create spaces that feel both
                functional and elevated.
              </p>
              <p>
                From private viewing rooms to learning-led installations, our focus is comfort,
                clarity, and a polished experience that feels seamless from first impression to final
                setup.
              </p>
            </div>

            <div className="intro-orbit">
              <div className="intro-badge intro-badge-one">

                <img src="/images/teacher-teaching-children-classroom.webp" alt="digiclass" />
              </div>
              <div className="intro-badge intro-badge-two">
                <img src="/images/home-theater-in-cartoon-style-with-big-tv-room-with-sofa-modern-interior-acoustic-stereo-sound.jpg" />

              </div>
              <div className="intro-badge intro-badge-three">
                <img src="/images/hand-drawn-conference-room-table-in-flat-style-vector.jpg" />
              </div>
            </div>
          </div>
        </section>
        <section className="marquee-band" aria-label="Education">

          <div style={{ position: 'relative', overflow: 'hidden', width: '100%', padding: '10px 0' }}>

            {/* Left fade */}
            <div style={{
              position: 'absolute', top: 0, left: 0, bottom: 0, width: 90,
              background: 'linear-gradient(to right, #f5efe6 60%, transparent)',
              zIndex: 10, pointerEvents: 'none'
            }} />

            {/* Right fade */}
            <div style={{
              position: 'absolute', top: 0, right: 0, bottom: 0, width: 90,
              background: 'linear-gradient(to left, #f5efe6 60%, transparent)',
              zIndex: 10, pointerEvents: 'none'
            }} />

            <div className="marquee-track-left">
              {[...eduProducts, ...eduProducts].map((client, index) => (
                <div className="client-chip" key={index}>
                  <img src={client.image} alt={`speaker-${index}`} className="client-logo-image" />
                </div>
              ))}
            </div>

          </div>

        </section>


        <section className="collab-section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Our Services</p>
            <h2>Solutions crafted for immersive entertainment and modern education spaces.</h2>
          </div>

          <div className="collab-layout">
            <div className="collab-list collab-list-sticky">
              {audienceTracks.map((track) => (
                <article
                  key={track.id}
                  className={`track-item ${activeTrack === track.id ? 'track-step-active' : ''}`}
                  style={
                    window.innerWidth <= 720
                      ? {
                        backgroundImage: `url(${track.mobileImage || track.image})`,
                      }
                      : {}
                  }
                >
                  <div className="track-copy">
                    <Link
                      to={`/services/${track.id}`}
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        display: 'block',
                      }}
                    >
                      <h3 style={{ cursor: "pointer" }}>{track.title}</h3>
                      <div className="track-body">
                        <div className="track-body-inner">
                          <p>{track.text}</p>
                          <small>{track.note}</small>
                        </div>
                      </div>
                    </Link>
                  </div>

                </article>
              ))}
            </div>

            <div className="collab-gallery-flow">
              <div className={`collab-visuals collab-visuals-${currentTrack.id}`}>
                <div
                  className="service-image-column"
                  style={{
                    transform: `translateY(-${galleryProgress * 70}%)`,
                  }}
                >
                  {combinedGallery.map((item, index) => (
                    <div className="service-image-item" key={item.key}>
                      <img
                        src={item.image}
                        alt={`${item.title}-${index}`}
                      />

                      <div className="visual-label">
                        <span>{item.title}</span>
                        <strong>{item.galleryLabel}</strong>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="collab-scroll-rail" aria-hidden="true">
                {audienceTracks.map((track) => (
                  <div className="track-step" id={track.id} key={track.id} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="metrics-strip">
          {metrics.map((metric) => (
            <MetricCounter
              key={metric.label}
              label={metric.label}
              target={metric.target}
              format={metric.format}
            />
          ))}
        </section>

        {/* <section className="story-section" id="story">
        <div className="section-heading">
          <p className="eyebrow">Why it feels premium</p>
          <h2>Built with rhythm, depth, and scroll-driven storytelling.</h2>
        </div>

        <div className="story-grid">
          {storyCards.map((card, index) => (
            <article
              key={card.title}
              className="story-card reveal-card reveal-card-stagger"
              style={{ '--reveal-delay': `${index * 120}ms` }}
            >
              <span>{card.tag}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section> */}

        {/* <section className="products-section" id="products">
        <div className="section-heading">
          <p className="eyebrow">Collection</p>
          <h2>Two-click shopping flow with a premium editorial homepage.</h2>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <Link
              className="product-card"
              key={product.id}
              to={`/product/${product.id}`}
              style={{ '--accent': product.accent, animationDelay: `${index * 120}ms` }}
            >
              <div className="product-image-wrap">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-meta">
                <div>
                  <span>{product.category}</span>
                  <h3>{product.name}</h3>
                </div>
                <strong>{product.price}</strong>
              </div>
            </Link>
          ))}
        </div>
      </section> */}

        <section className="marquee-band" aria-label="Our clients">
          <div className="marquee-heading">
            <p className="eyebrow">Trusted by</p>
            {/* <h3>Our clients</h3> */}
            <h2>

              <div className="reviews-heading-wrapper">
                <h2>

                  <span className="italic-gold">Our Clients</span>
                </h2>

              </div>
            </h2>
            <div className="ornament">
              <div className="ornament-line" />
              <div className="ornament-center">
                <svg viewBox="0 0 24 24"><path d="M12 2 C10 6 6 7 2 7 C6 9 9 12 8 17 C10 14 12 13 12 13 C12 13 14 14 16 17 C15 12 18 9 22 7 C18 7 14 6 12 2Z" /></svg>
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /></svg>
                <svg viewBox="0 0 24 24"><path d="M12 2 C10 6 6 7 2 7 C6 9 9 12 8 17 C10 14 12 13 12 13 C12 13 14 14 16 17 C15 12 18 9 22 7 C18 7 14 6 12 2Z" /></svg>
              </div>
              <div className="ornament-line right" />
            </div>
          </div>

          <div className="marquee-track">
            {[...clients, ...clients].map((client, index) => (
              <div className={`client-chip ${client.className}`} key={`${client.name}-${index}`}>
                <span className="client-symbol" aria-hidden="true">
                  {client.mark}
                </span>
                <div className="client-wordmark">
                  <span className="client-name">{client.name}</span>
                  {client.subtitle ? <span className="client-subtitle">{client.subtitle}</span> : null}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Testimonials />

        <section className="location-section" id="about">
          <div className="location-card">
            <div className="location-copy">
              <p className="eyebrow" style={{ color: "black" }}>Visit Us</p>
              <h2>Experience our solutions in person at our sample showroom location.</h2>
              <p>
                10, Namrata Awas Colony, Bajrang Nagar, Kota, Rajasthan 324001
              </p>
            </div>

            <div className="location-map">
              <iframe
                title="Rashi Tech Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.7799769435605!2d75.86484227543484!3d25.17690607772394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f9b3990019d3b%3A0x18adc00a12d59590!2sSOUND%20N%20STYLE%20BY%20RASHI%20TECHNOLOGIES!5e0!3m2!1sen!2sin!4v1778689862292!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

      </main>
      <footer className="modern-footer">
        <div className="footer-overlay" />

        <div className="footer-container">
          {/* LEFT */}
          <div className="footer-brand">
            <img src="/images/RashiTechLogo-removebg-preview.png" alt="Rashi Tech" style={{ height: "100%" }} />

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
          <div className="footer-column">
            <h3>Policies</h3>

            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Conditions</a>
            <a href="/">Shipping Policy</a>
          </div>

          {/* SOCIAL */}
          <div className="footer-column">
            <h3>Social Links</h3>

            <p className="footer-social-text">
              Don’t miss our future updates! Follow us today.
            </p>

            <div className="footer-socials">
              <a href="/"><FaFacebook /></a>
              <a href="/"><FaInstagram /></a>
              <a href="/"><FaYoutube /></a>
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
  );
}
