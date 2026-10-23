import { Link } from 'react-router-dom'
import {
  IconShield,
  IconBuilding,
  IconPeople,
  IconWorker,
  IconHandshake,
} from '../components/Icons'
import { images } from '../data/site'

export default function WhyUs() {
  return (
    <>
      <section className="hero why-hero" style={{ '--hero-image': `url(${images.commercial})` }}>
        <span className="corner-tl" />
        <span className="corner-tr" />
        <span className="corner-bl" />
        <span className="corner-br" />
        <div className="wrap hero-grid">
          <div className="hero-content">
            <p className="eyebrow">HEAVEN EMPIRE &amp; GRIPA</p>
            <h1 className="hero-title">Why Choose Us</h1>
            <h2 className="hero-subtitle">Quality, Reliability &amp; Enduring Value</h2>
            <p className="hero-desc">
              We aim to serve builders, contractors, architects, tile installers, and other construction
              professionals with quality-focused products and professional service.
            </p>
          </div>
        </div>
      </section>

      <section className="section navy why-section" style={{ padding: '80px 0' }}>
        <div className="wrap">
          <h2 className="section-title-gold">Why Choose Heaven Empire &amp; GRIPA?</h2>
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

      <section className="cta-band" style={{ '--cta-image': `url(${images.skyline})` }}>
        <div className="wrap cta-content">
          <h2>Let’s Build a Stronger Tomorrow Together</h2>
          <p className="cta-sub">Join hands with Heaven Empire Private Limited and GRIPA.</p>
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
