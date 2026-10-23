import { Link } from 'react-router-dom'
import ProductBags, { GripaLogo } from '../components/ProductBags'
import {
  IconEye,
  IconTarget,
  IconShield,
  IconBuilding,
  IconPeople,
  IconWorker,
  IconHandshake,
} from '../components/Icons'
import { images } from '../data/site'

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="home-hero">
        <span className="corner-tl" />
        <span className="corner-tr" />
        <span className="corner-bl" />
        <span className="corner-br" />

        {/* Right side full image - NO OVERLAY */}
        <div className="home-hero-image-wrap">
          <img
            src="/images/house-hero-modern.jpg"
            alt="Modern Luxury Architecture"
            className="home-hero-clean-img"
          />
        </div>

        {/* 60-degree angled divider panel with gold accent edge */}
        <div className="home-hero-60deg-panel" />

        <div className="wrap home-hero-content-wrap">
          <div className="hero-content home-hero-narrow">
            <p className="eyebrow">HEAVEN EMPIRE PRIVATE LIMITED</p>
            <h1 className="hero-title">A Legacy of Trust</h1>
            <h2 className="hero-subtitle">A Trusted Vision for Modern Construction</h2>
            <p className="hero-desc">
              At Heaven Empire Private Limited, we believe every beautiful structure begins with quality
              materials and the right foundation. With a focus on construction materials and evolving
              industry needs, we aim to provide practical solutions for modern building and interior
              finishing.
            </p>
            <Link className="btn btn-pill" to="/about">
              ABOUT US →
            </Link>
          </div>
        </div>
      </section>

      {/* 2. MEET GRIPA SECTION */}
      <section className="section meet-gripa-section">
        <div className="wrap meet-gripa-grid">
          <div className="gripa-col-brand">
            <GripaLogo className="gripa-logo-home" />
          </div>
          <div className="gripa-col-intro">
            <h3 className="intro-heading">Introducing GRIPA —</h3>
            <p className="intro-text">
              our dedicated brand for tile and stone installation solutions, focused on product quality,
              dependable bonding, and the needs of construction professionals.
            </p>
          </div>
          <div className="gripa-col-bags">
            <ProductBags className="bags-photo-clean" />
          </div>
        </div>
      </section>

      {/* 3. OUR VISION & MISSION */}
      <section className="section vision-section">
        <div className="wrap">
          <h2 className="section-title-line">
            <span>Our Vision &amp; Mission</span>
          </h2>
          <div className="vision-grid">
            <article className="vision-card">
              <div className="vision-icon-circle">
                <IconEye size={30} />
              </div>
              <div className="vision-text">
                <h3>Our Vision</h3>
                <p>
                  To establish Heaven Empire Private Limited as a recognised name in construction
                  materials and grow GRIPA into a trusted brand for tile and stone adhesive solutions.
                </p>
              </div>
            </article>

            <article className="vision-card">
              <div className="vision-icon-circle">
                <IconTarget size={30} />
              </div>
              <div className="vision-text">
                <h3>Our Mission</h3>
                <p>
                  To provide quality-focused products, strengthen business partnerships, and support
                  customers with practical solutions for modern construction.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE HEAVEN EMPIRE & GRIPA? */}
      <section className="section navy why-section">
        <div className="wrap">
          <h2 className="section-title-gold">
            Why Choose Heaven Empire &amp; GRIPA?
          </h2>
          <div className="why-row">
            <div className="why-item">
              <div className="why-circle">
                <IconShield size={32} />
              </div>
              <h4>Quality-Focused Approach</h4>
            </div>

            <div className="why-item">
              <div className="why-circle">
                <IconBuilding size={32} />
              </div>
              <h4>Solutions for Modern Construction</h4>
            </div>

            <div className="why-item">
              <div className="why-circle">
                <IconPeople size={32} />
              </div>
              <h4>Customer-Centric Service</h4>
            </div>

            <div className="why-item">
              <div className="why-circle">
                <IconWorker size={32} />
              </div>
              <h4>Supporting Construction Professionals</h4>
            </div>

            <div className="why-item">
              <div className="why-circle">
                <IconHandshake size={32} />
              </div>
              <h4>Dealer &amp; Distributor Opportunities</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BAND */}
      <section className="cta-band" style={{ '--cta-image': `url(${images.skyline})` }}>
        <div className="wrap cta-content">
          <h2>Let’s Build a Stronger Tomorrow Together</h2>
          <p className="cta-sub">
            Join hands with Heaven Empire Private Limited and GRIPA.
          </p>
          <p className="cta-desc">
            Be a part of our growing network of dealers, distributors, builders and business partners.
          </p>
          <Link className="btn btn-pill cta-btn" to="/partner">
            BECOME A BUSINESS PARTNER →
          </Link>
        </div>
      </section>
    </>
  )
}
