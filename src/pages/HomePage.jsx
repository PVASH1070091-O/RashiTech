import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

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

const audienceTracks = [
  {
    id: 'educational',
    tag: 'Educational',
    title: 'Educational',
    text: 'Show digital boards, teaching displays, smart study tools, and speaker-led setups in a clean visual flow that feels modern and easy to explore.',
    note: 'Built for classrooms, learning spaces, and creator-led study environments.',
    galleryLabel: 'Educational environments',
    galleryImages: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: 'entertainment',
    tag: 'Entertainment',
    title: 'Entertainment',
    text: 'Highlight speakers, screens, gaming accessories, and electrical appliances with richer motion and bolder imagery so the category feels energetic and immersive.',
    note: 'Built for speakers, cinematic living rooms, and premium home-tech showcases.',
    galleryLabel: 'Entertainment environments',
    galleryImages: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    ],
  },
];

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
      const progressStart = window.innerHeight * 0.16;
      const progressRange = Math.max(scrollRail.offsetHeight - window.innerHeight * 0.84, 1);
      const nextGalleryProgress = Math.min(
        Math.max((progressStart - railRect.top) / progressRange, 0),
        1,
      );

      const firstTrackImageCount = audienceTracks[0].galleryImages.length;
      const totalImageCount = audienceTracks.reduce((sum, track) => sum + track.galleryImages.length, 0);
      const imagePosition = nextGalleryProgress * Math.max(totalImageCount - 1, 1);
      const nextActiveTrack =
        imagePosition < firstTrackImageCount ? audienceTracks[0].id : audienceTracks[1].id;

      setActiveTrack((current) => (current === nextActiveTrack ? current : nextActiveTrack));
      setGalleryProgress((current) =>
        Math.abs(current - nextGalleryProgress) > 0.01 ? nextGalleryProgress : current,
          
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
    <main className="page-shell">
      <div className="pointer-glow" />
      <header className="topbar">
        <div className="topbar-inner">
          <Link className="brand" to="/">
            Rashi Tech
          </Link>
          <nav className="topnav">
            <a href="#categories">Categories</a>
            <a href="#products">Shop</a>
            <a href="#story">Story</a>
            <a href="#about">About</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />
        <div className="hero-copy">
          <p className="eyebrow">Entertainment + Education Spaces</p>
          <h1>
            Premium recliners,
            <span> digital boards, and home theater spaces.</span>
          </h1>
          <p className="hero-text">
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
                <strong>Mini theater seating, projection mood, and immersive viewing.</strong>
              </div>
              <span>01</span>
            </div>
          </div>
        </div>
      </section>

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
              <span>01</span>
              <strong>Entertainment Spaces</strong>
            </div>
            <div className="intro-badge intro-badge-two">
              <span>02</span>
              <strong>Education Solutions</strong>
            </div>
            <div className="intro-badge intro-badge-three">
              <span>03</span>
              <strong>Smart Installations</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="collab-section" id="categories">
        <div className="section-heading">
          <p className="eyebrow">Our Services</p>
          <h2>Solutions crafted for immersive entertainment and modern education spaces.</h2>
        </div>

        <div className="collab-layout">
          <div className="collab-list collab-list-sticky">
            {audienceTracks.map((track) => (
              <article key={track.id} className={`track-item ${activeTrack === track.id ? 'track-step-active' : ''}`}>
                <div className="track-copy">
                  <h3>{track.title}</h3>
                  <div className="track-body">
                    <div className="track-body-inner">
                      <p>{track.text}</p>
                      <small>{track.note}</small>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="collab-gallery-flow">
            <div className={`collab-visuals collab-visuals-${currentTrack.id}`}>
              <div className="service-preview-stack">
                {currentGalleryIndex > 0 ? (
                  <div
                    className="service-preview-card service-preview-card-prev"
                    style={{ transform: `translateY(${(-20 - galleryStepProgress * 26).toFixed(2)}%)` }}
                  >
                    <img src={previousGalleryItem.image} alt={`${previousGalleryItem.title} preview`} />
                  </div>
                ) : null}

                <div
                  className="service-preview-card service-preview-card-current"
                  style={{ transform: `translateY(${(-galleryStepProgress * 20).toFixed(2)}%)` }}
                >
                  <img
                    src={currentGalleryItem.image}
                    alt={`${currentGalleryItem.title} showcase ${currentGalleryIndex + 1}`}
                  />
                  <div className="visual-label">
                    <span>{currentGalleryItem.title}</span>
                    <strong>{currentGalleryItem.galleryLabel}</strong>
                  </div>
                </div>

                {currentGalleryIndex < combinedGallery.length - 1 ? (
                  <div
                    className="service-preview-card service-preview-card-next"
                    style={{ transform: `translateY(${(72 - galleryStepProgress * 72).toFixed(2)}%)` }}
                  >
                    <img src={nextGalleryItem.image} alt={`${nextGalleryItem.title} preview`} />
                  </div>
                ) : null}
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

      <section className="story-section" id="story">
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
      </section>

      <section className="products-section" id="products">
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
      </section>

      <section className="marquee-band" aria-label="Our clients">
        <div className="marquee-heading">
          <p className="eyebrow">Trusted by</p>
          <h3>Our clients</h3>
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

      <section className="location-section" id="about">
        <div className="location-card">
          <div className="location-copy">
            <p className="eyebrow">Visit Us</p>
            <h2>Experience our solutions in person at our sample showroom location.</h2>
            <p>
              Rashi Tech Experience Center, 2nd Floor, Skyline Plaza, Sector 18, Noida,
              Uttar Pradesh 201301
            </p>
          </div>

          <div className="location-map" aria-label="Sample showroom map">
            <div className="map-pin">Rashi Tech</div>
            <div className="map-road map-road-horizontal" />
            <div className="map-road map-road-vertical" />
            <div className="map-block map-block-one" />
            <div className="map-block map-block-two" />
            <div className="map-block map-block-three" />
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand-block">
            <p className="eyebrow">Rashi Tech</p>
            <h3>Immersive spaces for entertainment, education, and smart visual experiences.</h3>
          </div>

          <div className="footer-contact">
            <div>
              <span>Email</span>
              <a href="mailto:hello@rashitech.in">hello@rashitech.in</a>
            </div>
            <div>
              <span>Contact</span>
              <a href="tel:+919999999999">+91 99999 99999</a>
            </div>
            <div>
              <span>Address</span>
              <p>Skyline Plaza, Sector 18, Noida, Uttar Pradesh 201301</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            {socialLinks.map((item) => (
              <a href="/" className="social-link" key={item.name} aria-label={item.name}>
                <span>{item.icon}</span>
                <small>{item.handle}</small>
              </a>
            ))}
          </div>

          <p className="footer-note">© 2026 Rashi Tech. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
