import { GripaLogo } from '../components/ProductBags'
import { company, images } from '../data/site'
import { IconEye, IconTarget, IconBuilding } from '../components/Icons'

export default function About() {
  return (
    <>
      <section className="hero about-hero" style={{ '--hero-image': `url(${images.stone})` }}>
        <span className="corner-tl" />
        <span className="corner-tr" />
        <span className="corner-bl" />
        <span className="corner-br" />
        <div className="wrap hero-grid">
          <div className="hero-content">
            <p className="eyebrow">HEAVEN EMPIRE PRIVATE LIMITED</p>
            <h1 className="hero-title">About Us</h1>
            <h2 className="hero-subtitle">A Trusted Vision for Modern Construction</h2>
            <p className="hero-desc">
              Our goal is to build lasting relationships with customers, contractors, builders, dealers,
              and distributors through quality-focused products and professional service.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-who-section">
        <div className="wrap split-about">
          <div className="about-left">
            <h2 className="about-title">Who We Are</h2>
            <p className="about-desc">
              At Heaven Empire Private Limited, we believe every beautiful structure begins with quality
              materials and the right foundation. With a focus on construction materials and evolving
              industry needs, we aim to provide practical solutions for modern building and interior
              finishing.
            </p>
            <p className="about-desc" style={{ marginTop: 14 }}>
              Introducing GRIPA — Tile &amp; Stone Adhesive, our dedicated brand for tile and stone
              installation solutions, focused on product quality, dependable bonding, and the needs of
              construction professionals.
            </p>
          </div>
          <div className="about-right">
            <GripaLogo className="gripa-logo-about" />
          </div>
        </div>
      </section>

      <section className="section vision-section">
        <div className="wrap">
          <h2 className="section-title-line">
            <span>Our Principles &amp; Locations</span>
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

          <div className="vision-grid" style={{ marginTop: 32 }}>
            <article className="vision-card">
              <div className="vision-icon-circle">
                <IconBuilding size={30} />
              </div>
              <div className="vision-text">
                <h3>{company.jaipur.title}</h3>
                <p>{company.jaipur.lines.join(', ')}</p>
              </div>
            </article>

            <article className="vision-card">
              <div className="vision-icon-circle">
                <IconBuilding size={30} />
              </div>
              <div className="vision-text">
                <h3>{company.hindaun.title}</h3>
                <p>{company.hindaun.lines.join(', ')}</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
