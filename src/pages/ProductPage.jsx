import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';

export default function ProductPage() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId) ?? products[0];

  return (
    <main className="product-page-shell" style={{ '--accent': product.accent }}>
      <header className="topbar">
        <div className="topbar-inner">
          <Link className="brand" to="/">
            Veloura
          </Link>
          <Link className="back-link" to="/">
            Back to home
          </Link>
        </div>
      </header>

      <section className="product-hero">
        <div className="product-gallery" aria-label="Product image gallery">
          {product.gallery.map((image) => (
            <div className="gallery-frame" key={image}>
              <img src={image} alt={product.name} />
            </div>
          ))}
        </div>

        <div className="product-summary">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="product-price">{product.price}</p>
          <p className="product-description">{product.description}</p>

          <div className="product-actions">
            <button className="button button-primary" type="button">
              Add to Cart
            </button>
            <button className="button button-secondary" type="button">
              Save for Later
            </button>
          </div>

          <div className="bullet-list">
            {product.bullets.map((bullet) => (
              <div key={bullet} className="bullet-item">
                <span />
                <p>{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-band">
        <div className="detail-card">
          <span>Material story</span>
          <strong>Crafted for tactile warmth and visual calm.</strong>
        </div>
        <div className="detail-card">
          <span>Delivery</span>
          <strong>Ships in 48 hours with premium packaging.</strong>
        </div>
        <div className="detail-card">
          <span>Styling note</span>
          <strong>Pairs beautifully with stone, wood, and muted textiles.</strong>
        </div>
      </section>
    </main>
  );
}
