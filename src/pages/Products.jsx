import { Link } from 'react-router-dom'
import ProductBags, { GripaLogo } from '../components/ProductBags'
import {
  IconBonding,
  IconDurability,
  IconTrowel,
  IconStarBadge,
  IconWarning,
} from '../components/Icons'
import { images } from '../data/site'

const applications = [
  {
    title: 'Ceramic & Vitrified Tiles',
    sub: '(where approved)',
    image: '/images/ceramic-vitrified-tiles.jpg',
  },
  {
    title: 'Floor & Wall Tile Fixing',
    sub: '(as per product grade)',
    image: '/images/floor-wall-tile-fixing.jpg',
  },
  {
    title: 'Natural & Manufactured Stone',
    sub: '(compatible applications)',
    image: '/images/natural-manufactured-stone.jpg',
  },
  {
    title: 'Residential & Commercial Projects',
    sub: '',
    image: '/images/residential-commercial-projects.png',
  },
]

export default function Products() {
  return (
    <>
      {/* 1. PRODUCT HERO */}
      <section className="hero product-hero">
        <span className="corner-tl" />
        <span className="corner-tr" />
        <span className="corner-bl" />
        <span className="corner-br" />
        <div className="wrap product-hero-grid">
          <div className="product-hero-copy">
            <GripaLogo className="gripa-logo-hero" />
          </div>
          <div className="product-hero-visual">
            <div className="product-bags-stage">
              <ProductBags className="bags-photo-product" />
              <div className="product-floor-shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT GRIPA */}
      <section className="section about-gripa-section">
        <div className="wrap split-about">
          <div className="about-left">
            <h2 className="about-title">About GRIPA</h2>
            <p className="about-desc">
              GRIPA Tile &amp; Stone Adhesive is specially formulated to provide strong and long-lasting
              bonding for tiles and stones. It is designed to meet the demands of modern construction,
              offering reliable performance for both residential and commercial projects.
            </p>
            <div className="features-row">
              <div className="feature-item">
                <div className="feature-circle">
                  <IconBonding size={28} />
                </div>
                <span>Strong Bonding Performance</span>
              </div>

              <div className="feature-item">
                <div className="feature-circle">
                  <IconDurability size={28} />
                </div>
                <span>Long Lasting Durability</span>
              </div>

              <div className="feature-item">
                <div className="feature-circle">
                  <IconTrowel size={28} />
                </div>
                <span>Easy to Apply</span>
              </div>

              <div className="feature-item">
                <div className="feature-circle">
                  <IconStarBadge size={28} />
                </div>
                <span>Professional Grade</span>
              </div>
            </div>
          </div>
          <div className="about-right">
            <div className="install-img-card install-img-angled">
              <div className="install-img-angled-inner">
                <img
                  src="/images/gripa-installation-process.png"
                  alt="Tile installation with notched trowel using GRIPA adhesive"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT APPLICATIONS */}
      <section className="section applications-section">
        <div className="wrap">
          <h2 className="section-title-line">
            <span>Product Applications</span>
          </h2>

          <div className="app-cards-row">
            {applications.map((app) => (
              <article className="app-photo-card" key={app.title}>
                <div className="app-photo-wrap">
                  <img src={app.image} alt={app.title} />
                </div>
                <div className="app-card-caption">
                  <h3>{app.title}</h3>
                  {app.sub ? <span className="app-sub">{app.sub}</span> : null}
                </div>
              </article>
            ))}
          </div>

          {/* TWO SIDE-BY-SIDE CALLOUT BOXES */}
          <div className="guide-boxes-row">
            <div className="guide-selection-box">
              <div className="guide-box-header">
                <div className="guide-icon">
                  <IconWarning size={24} />
                </div>
                <h3>Product Selection Guide</h3>
              </div>
              <p>
                Always select the appropriate adhesive according to the tile or stone type, substrate,
                installation environment and product technical specifications.
              </p>
            </div>

            <div className="guide-enquire-box">
              <div className="enquire-box-copy">
                <h3>Need the right product for your project?</h3>
                <p>Our team is here to help you choose the best solution.</p>
              </div>
              <Link className="btn btn-navy-pill" to="/partner">
                ENQUIRE NOW →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
