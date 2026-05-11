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
    visualTitle: 'Speaker-led learning with connected classroom devices',
    visualLabel: 'Educational',
    mainImage:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
    floatingImages: [
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    id: 'entertainment',
    tag: 'Entertainment',
    title: 'Entertainment',
    text: 'Highlight speakers, screens, gaming accessories, and electrical appliances with richer motion and bolder imagery so the category feels energetic and immersive.',
    note: 'Built for speakers, cinematic living rooms, and premium home-tech showcases.',
    visualTitle: 'Immersive entertainment zones with speakers and appliances',
    visualLabel: 'Entertainment',
    mainImage:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=80',
    floatingImages: [
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80',
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
  const [activeTrack, setActiveTrack] = useState(audienceTracks[0].id);

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal-card');
    const trackSteps = document.querySelectorAll('.track-step');

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

      const viewportAnchor = window.innerHeight * 0.45;
      let nextActiveTrack = audienceTracks[0].id;
      let closestDistance = Number.POSITIVE_INFINITY;

      trackSteps.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const stepCenter = rect.top + rect.height / 2;
        const distance = Math.abs(stepCenter - viewportAnchor);

        if (distance < closestDistance) {
          closestDistance = distance;
          nextActiveTrack = item.id;
        }
      });

      setActiveTrack((current) => (current === nextActiveTrack ? current : nextActiveTrack));
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

  return (
    <main className="page-shell">
      <div className="pointer-glow" />
      <header className="topbar">
        <div className="topbar-inner">
          <Link className="brand" to="/">
            Veloura
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
          <p className="eyebrow">Design-led Commerce</p>
          <h1>
            Bring cinematic calm
            <span> into everyday living.</span>
          </h1>
          <p className="hero-text">
            A Framer-inspired storefront for elevated home objects, crafted with smooth scrolling,
            layered visuals, and motion that feels quietly luxurious.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#products">
              Explore Collection
            </a>
            <a className="button button-secondary" href="#story">
              See the Experience
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbital orbital-one" />
          <div className="orbital orbital-two" />
          <div className="device-card">
            <div className="device-card-image">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80"
                alt="Curated modern interior"
              />
            </div>
            <div className="device-card-footer">
              <div>
                <p>Featured atmosphere</p>
                <strong>Soft forms, rich light, clean space.</strong>
              </div>
              <span>01</span>
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

      <section className="collab-section" id="categories">
        <div className="section-heading">
          <p className="eyebrow">Create, showcase, and convert</p>
          <h2>Present your store like a living catalog with two clear experience tracks.</h2>
        </div>

        <div className="collab-layout">
          <div className="collab-list">
            {audienceTracks.map((track) => (
              <article
                id={track.id}
                key={track.id}
                className={`track-step ${activeTrack === track.id ? 'track-step-active' : ''}`}
              >
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

          <div className={`collab-visuals collab-visuals-${currentTrack.id}`}>
            <div className="visual-card visual-card-main">
              <img
                src={currentTrack.mainImage}
                alt={currentTrack.visualTitle}
              />
              <div className="visual-label">
                <span>{currentTrack.visualLabel}</span>
                <strong>{currentTrack.visualTitle}</strong>
              </div>
            </div>

            <div className="visual-card visual-card-float visual-card-speaker">
              <img
                src={currentTrack.floatingImages[0]}
                alt={`${currentTrack.visualLabel} supporting scene`}
              />
            </div>

            <div className="visual-card visual-card-float visual-card-appliance">
              <img
                src={currentTrack.floatingImages[1]}
                alt={`${currentTrack.visualLabel} product environment`}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="section-heading">
          <p className="eyebrow">Why it feels premium</p>
          <h2>Built with rhythm, depth, and scroll-driven storytelling.</h2>
        </div>

        <div className="story-grid">
          {storyCards.map((card) => (
            <article key={card.title} className="story-card reveal-card">
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

      <section className="about-section" id="about">
        <div className="about-card">
          <p className="eyebrow">Ready for scale</p>
          <h2>Designed as a strong starting point for a modern e-commerce brand.</h2>
          <p>
            This structure is intentionally clean so you can plug in real products, a cart,
            filtering, CMS data, or checkout later without losing the visual identity.
          </p>
        </div>
      </section>
    </main>
  );
}
