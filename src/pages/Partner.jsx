import { useState } from 'react'
import ProductBags, { GripaLogo } from '../components/ProductBags'
import {
  IconGrowth,
  IconHandshake,
  IconPeople,
  IconCheck,
  IconWhatsApp,
} from '../components/Icons'
import { company, images } from '../data/site'

const emptyForm = {
  fullName: '',
  businessName: '',
  mobile: '',
  email: '',
  cityState: '',
  businessType: 'Dealer',
  address: '',
  message: '',
}

export default function Partner() {
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('')
  const [waLink, setWaLink] = useState('')

  function update(event) {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  function submit(event) {
    event.preventDefault()

    const details = [
      '👋 *New Business / Dealership Enquiry - GRIPA*',
      '━━━━━━━━━━━━━━━━━━━━━',
      `👤 *Name:* ${form.fullName}`,
      `🏢 *Firm / Company:* ${form.businessName}`,
      `📱 *Mobile:* ${form.mobile}`,
      form.email ? `✉️ *Email:* ${form.email}` : null,
      `📍 *City & State:* ${form.cityState}`,
      `💼 *Business Type:* ${form.businessType}`,
      form.address ? `📫 *Address:* ${form.address}` : null,
      form.message ? `💬 *Message:* ${form.message}` : null,
      '━━━━━━━━━━━━━━━━━━━━━',
      '_Sent via Heaven Empire Website (GRIPA)_',
    ]
      .filter(Boolean)
      .join('\n')

    const cleanPhone = company.phone.replace(/\D/g, '')
    const targetPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`
    const targetUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(details)}`

    setWaLink(targetUrl)
    setStatus('sent')

    // Open WhatsApp directly in new window/tab
    if (typeof window !== 'undefined') {
      window.open(targetUrl, '_blank', 'noopener,noreferrer')
    }
  }

  function resetForm() {
    setForm(emptyForm)
    setStatus('')
    setWaLink('')
  }

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="hero partner-hero" style={{ '--hero-image': `url(${images.handshake})` }}>
        <span className="corner-tl" />
        <span className="corner-tr" />
        <span className="corner-bl" />
        <span className="corner-br" />
        <div className="wrap partner-hero-grid">
          <div className="partner-hero-copy">
            <p className="eyebrow">LET’S GROW TOGETHER</p>
            <h1 className="partner-hero-title">Become a GRIPA Business Partner</h1>
            <h2 className="partner-hero-sub">Your Business. Our Brand. A Stronger Future.</h2>
            <p className="partner-hero-desc">
              Heaven Empire Private Limited welcomes dealers, distributors, builders, contractors, and
              construction material suppliers to join our growing network and explore business
              opportunities with GRIPA — Tile &amp; Stone Adhesive.
            </p>
          </div>
          <div className="partner-hero-visual">
            <div className="partner-handshake-overlay">
              <GripaLogo className="gripa-logo-partner" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY PARTNER WITH US */}
      <section className="section why-partner-section">
        <div className="wrap">
          <h2 className="section-title-line">
            <span>Why Partner With Us?</span>
          </h2>
          <div className="why-partner-row">
            <div className="partner-value-card">
              <div className="partner-icon-circle">
                <IconGrowth size={32} />
              </div>
              <p>Growth opportunities with our adhesive brand</p>
            </div>

            <div className="partner-value-card">
              <div className="partner-icon-circle">
                <IconHandshake size={32} />
              </div>
              <p>Long-term dealer and distributor partnerships</p>
            </div>

            <div className="partner-value-card">
              <div className="partner-icon-circle">
                <IconPeople size={32} />
              </div>
              <p>Professional product and business support</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ENQUIRY FORM & COMPANY INFORMATION */}
      <section id="enquiry-section" className="section partner-form-section">
        <div className="wrap partner-layout-grid">
          {/* LEFT: ENQUIRY CARD */}
          <div className="enquiry-card">
            <h2 className="enquiry-title">Become a Partner — Enquire Now</h2>
            <p className="enquiry-subtitle">Please share your details to connect with us instantly on WhatsApp:</p>

            <ul className="enquiry-bullets">
              <li>
                <span className="bullet-icon"><IconCheck size={14} /></span>
                <span>Growth opportunities</span>
              </li>
              <li>
                <span className="bullet-icon"><IconCheck size={14} /></span>
                <span>Direct manufacturer pricing</span>
              </li>
              <li>
                <span className="bullet-icon"><IconCheck size={14} /></span>
                <span>Authorized dealership network</span>
              </li>
              <li>
                <span className="bullet-icon"><IconCheck size={14} /></span>
                <span>Dedicated sales &amp; technical support</span>
              </li>
            </ul>

            {status === 'sent' ? (
              <div className="form-whatsapp-success">
                <div className="whatsapp-success-header">
                  <div className="whatsapp-success-icon">
                    <IconWhatsApp size={28} />
                  </div>
                  <div>
                    <h3 className="whatsapp-success-title">Enquiry Ready to Send!</h3>
                    <p className="whatsapp-success-subtitle">
                      Your details have been pre-filled for WhatsApp chat.
                    </p>
                  </div>
                </div>

                <p className="whatsapp-success-instructions">
                  If WhatsApp did not open automatically on your device, click the button below to send your enquiry directly to <strong>+91 {company.phone}</strong>:
                </p>

                <div className="whatsapp-success-actions">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp-direct"
                  >
                    <IconWhatsApp size={20} />
                    <span>OPEN IN WHATSAPP NOW</span>
                  </a>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="btn btn-pill-outline btn-reset-form"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form className="partner-form" onSubmit={submit}>
                <div className="form-grid-2col">
                  <div className="form-row">
                    <input
                      name="fullName"
                      value={form.fullName}
                      onChange={update}
                      required
                      placeholder="Full Name *"
                    />
                  </div>
                  <div className="form-row">
                    <input
                      name="businessName"
                      value={form.businessName}
                      onChange={update}
                      required
                      placeholder="Business / Firm Name *"
                    />
                  </div>
                </div>

                <div className="form-grid-2col">
                  <div className="form-row">
                    <input
                      name="mobile"
                      type="tel"
                      value={form.mobile}
                      onChange={update}
                      required
                      placeholder="Mobile Number *"
                    />
                  </div>
                  <div className="form-row">
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={update}
                      placeholder="Email Address (optional)"
                    />
                  </div>
                </div>

                <div className="form-grid-2col">
                  <div className="form-row">
                    <input
                      name="cityState"
                      value={form.cityState}
                      onChange={update}
                      required
                      placeholder="City & State *"
                    />
                  </div>
                  <div className="form-row">
                    <select
                      name="businessType"
                      value={form.businessType}
                      onChange={update}
                      aria-label="Business Type"
                    >
                      <option value="Dealer">Dealer</option>
                      <option value="Distributor">Distributor</option>
                      <option value="Builder">Builder</option>
                      <option value="Contractor">Contractor</option>
                      <option value="Architect / Engineer">Architect / Engineer</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <input
                    name="address"
                    value={form.address}
                    onChange={update}
                    placeholder="Business Address (optional)"
                  />
                </div>

                <div className="form-row">
                  <textarea
                    name="message"
                    rows="3"
                    value={form.message}
                    onChange={update}
                    placeholder="Message / Requirement (optional)"
                  />
                </div>

                <button className="btn btn-whatsapp-submit" type="submit">
                  <IconWhatsApp size={20} />
                  <span>SUBMIT ENQUIRY VIA WHATSAPP</span>
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: BAGS + COMPANY INFO */}
          <div className="partner-side-col">
            <div className="partner-side-bags">
              <ProductBags className="bags-photo-side" />
            </div>

            <div className="company-info-card">
              <h3 className="company-info-title">Company Information</h3>
              <p className="company-info-brand">
                <strong>Heaven Empire Private Limited</strong>
              </p>
              <p className="company-info-line">Brand: <span>GRIPA</span></p>
              <p className="company-info-line">CIN: <span>{company.cin}</span></p>
              <p className="company-info-line">GSTIN: <span>{company.gstin}</span></p>
              <p className="company-info-line">
                Email: <a href={`mailto:${company.email}`}>{company.email}</a>
              </p>

              <div className="office-loc-block">
                <h4>{company.jaipur.title}:</h4>
                <p>{company.jaipur.lines.join(', ')}</p>
              </div>

              <div className="office-loc-block">
                <h4>{company.hindaun.title}:</h4>
                <p>{company.hindaun.lines.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
