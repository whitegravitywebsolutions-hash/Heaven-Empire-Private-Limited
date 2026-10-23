import { useState } from 'react'
import { company, images } from '../data/site'
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
  IconWhatsApp,
  IconBuilding,
  IconHandshake,
} from '../components/Icons'

const initialForm = {
  fullName: '',
  phone: '',
  email: '',
  subject: 'General Inquiry',
  cityState: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [waUrl, setWaUrl] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const details = [
      '👋 *New Contact Message - GRIPA (Heaven Empire)*',
      '━━━━━━━━━━━━━━━━━━━━━',
      `👤 *Name:* ${form.fullName}`,
      `📱 *Phone / Mobile:* ${form.phone}`,
      form.email ? `✉️ *Email:* ${form.email}` : null,
      `🏷️ *Subject:* ${form.subject}`,
      form.cityState ? `📍 *City & State:* ${form.cityState}` : null,
      `💬 *Message:* ${form.message}`,
      '━━━━━━━━━━━━━━━━━━━━━',
      '_Sent via heavenempire.in/contact_',
    ]
      .filter(Boolean)
      .join('\n')

    const cleanPhone = company.phone.replace(/\D/g, '')
    const targetPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`
    const targetUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(details)}`

    setWaUrl(targetUrl)
    setSubmitted(true)

    if (typeof window !== 'undefined') {
      window.open(targetUrl, '_blank', 'noopener,noreferrer')
    }
  }

  function resetForm() {
    setForm(initialForm)
    setSubmitted(false)
    setWaUrl('')
  }

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="hero contact-hero" style={{ '--hero-image': `url(${images.skyline})` }}>
        <span className="corner-tl" />
        <span className="corner-tr" />
        <span className="corner-bl" />
        <span className="corner-br" />
        <div className="wrap hero-grid">
          <div className="hero-content">
            <p className="eyebrow">HEAVEN EMPIRE PRIVATE LIMITED</p>
            <h1 className="hero-title">Contact Us</h1>
            <h2 className="hero-subtitle">Get in Touch with Our Team</h2>
            <p className="hero-desc">
              Have questions about GRIPA tile adhesives, bulk procurement, or dealership opportunities?
              Our team is here to assist you through phone, WhatsApp, email, or direct enquiry.
            </p>
          </div>
        </div>
      </section>

      {/* 2. QUICK CONTACT STRIP (4 HIGHLIGHT CARDS) */}
      <section className="contact-quick-strip">
        <div className="wrap">
          <div className="contact-quick-grid">
            {/* Phone */}
            <a href={`tel:+91${company.phone}`} className="contact-quick-card">
              <div className="quick-icon-box">
                <IconPhone size={24} />
              </div>
              <div className="quick-info">
                <span className="quick-label">Call Us Directly</span>
                <strong className="quick-value">+91 {company.phone}</strong>
                <span className="quick-sub">Mon – Sat, 9 AM – 7 PM</span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/91${company.phone}?text=${encodeURIComponent(
                'Hello Heaven Empire / GRIPA team, I would like to enquire about your tile adhesive products.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-quick-card whatsapp-card"
            >
              <div className="quick-icon-box whatsapp-icon-box">
                <IconWhatsApp size={24} />
              </div>
              <div className="quick-info">
                <span className="quick-label">WhatsApp Chat</span>
                <strong className="quick-value">+91 {company.phone}</strong>
                <span className="quick-sub">Instant chat &amp; catalog support</span>
              </div>
            </a>

            {/* Email */}
            <a href={`mailto:${company.email}`} className="contact-quick-card">
              <div className="quick-icon-box">
                <IconMail size={24} />
              </div>
              <div className="quick-info">
                <span className="quick-label">Email Support</span>
                <strong className="quick-value">{company.email}</strong>
                <span className="quick-sub">Official enquiries &amp; quotes</span>
              </div>
            </a>

            {/* Timings */}
            <div className="contact-quick-card static-card">
              <div className="quick-icon-box">
                <IconClock size={24} />
              </div>
              <div className="quick-info">
                <span className="quick-label">Business Hours</span>
                <strong className="quick-value">9:00 AM – 7:00 PM</strong>
                <span className="quick-sub">Monday through Saturday</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN SECTION: FORM + CONTACT & OFFICE DETAILS */}
      <section className="section contact-main-section">
        <div className="wrap contact-main-grid">
          {/* LEFT: INTERACTIVE CONTACT FORM */}
          <div className="contact-form-container">
            <div className="contact-form-header">
              <span className="contact-form-tag">DIRECT ENQUIRY</span>
              <h2 className="contact-form-title">Send Us a Message</h2>
              <p className="contact-form-desc">
                Fill in the details below. Your message will be formatted and routed directly to our
                authorized executive on WhatsApp for fast response.
              </p>
            </div>

            {submitted ? (
              <div className="form-whatsapp-success">
                <div className="whatsapp-success-header">
                  <div className="whatsapp-success-icon">
                    <IconWhatsApp size={28} />
                  </div>
                  <div>
                    <h3 className="whatsapp-success-title">Message Ready to Send!</h3>
                    <p className="whatsapp-success-subtitle">
                      Your enquiry has been prepared for WhatsApp chat with our team.
                    </p>
                  </div>
                </div>

                <p className="whatsapp-success-instructions">
                  If WhatsApp did not open automatically, click the button below to send your message
                  directly to <strong>+91 {company.phone}</strong>:
                </p>

                <div className="whatsapp-success-actions">
                  <a
                    href={waUrl}
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
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form className="partner-form contact-page-form" onSubmit={handleSubmit}>
                <div className="form-grid-2col">
                  <div className="form-row">
                    <label className="form-field-label">Your Name *</label>
                    <input
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Rahul Sharma"
                    />
                  </div>
                  <div className="form-row">
                    <label className="form-field-label">Mobile Number *</label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="e.g. 9876543210"
                    />
                  </div>
                </div>

                <div className="form-grid-2col">
                  <div className="form-row">
                    <label className="form-field-label">Email Address (Optional)</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@example.com"
                    />
                  </div>
                  <div className="form-row">
                    <label className="form-field-label">City &amp; State *</label>
                    <input
                      name="cityState"
                      value={form.cityState}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Jaipur, Rajasthan"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <label className="form-field-label">Subject / Purpose of Enquiry</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    aria-label="Enquiry Subject"
                  >
                    <option value="General Inquiry">General Product Inquiry</option>
                    <option value="Bulk Order / Pricing">Bulk Order &amp; Pricing</option>
                    <option value="Dealership & Partnership">Dealership &amp; Distribution</option>
                    <option value="Technical Specification">Technical Specification &amp; Guidance</option>
                    <option value="Sample Request">Product Sample Request</option>
                    <option value="Other">Other Query</option>
                  </select>
                </div>

                <div className="form-row">
                  <label className="form-field-label">Your Message *</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project requirements, tile type, or dealership query..."
                  />
                </div>

                <button className="btn btn-whatsapp-submit" type="submit">
                  <IconWhatsApp size={20} />
                  <span>SEND ENQUIRY VIA WHATSAPP</span>
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: CONTACT DETAILS & LOCATIONS */}
          <div className="contact-details-col">
            {/* Jaipur Office */}
            <div className="contact-office-card">
              <div className="office-card-header">
                <div className="office-icon-pin">
                  <IconMapPin size={22} />
                </div>
                <div>
                  <span className="office-badge">HEAD / SALES OFFICE</span>
                  <h3 className="office-title">{company.jaipur.title}</h3>
                </div>
              </div>
              <div className="office-address-body">
                {company.jaipur.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <div className="office-footer-action">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Road+Number+17+Vishwakarma+Industrial+Area+Jaipur+Rajasthan+302013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="office-link"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>

            {/* Hindaun City Location */}
            <div className="contact-office-card">
              <div className="office-card-header">
                <div className="office-icon-pin">
                  <IconMapPin size={22} />
                </div>
                <div>
                  <span className="office-badge">OPERATIONS &amp; LOGISTICS</span>
                  <h3 className="office-title">{company.hindaun.title}</h3>
                </div>
              </div>
              <div className="office-address-body">
                {company.hindaun.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <div className="office-footer-action">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kailash+Nagar+Mandawara+Road+Hindaun+City+Karauli+Rajasthan+322230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="office-link"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>

            {/* Corporate Identification Card */}
            <div className="contact-corporate-card">
              <div className="corporate-card-top">
                <div className="corporate-icon">
                  <IconBuilding size={24} />
                </div>
                <div>
                  <h4 className="corporate-name">{company.name}</h4>
                  <p className="corporate-brand">Brand: <strong>{company.brand}</strong> — {company.productLine}</p>
                </div>
              </div>
              <div className="corporate-meta-grid">
                <div className="meta-item">
                  <span className="meta-label">CIN</span>
                  <span className="meta-val">{company.cin}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">GSTIN</span>
                  <span className="meta-val">{company.gstin}</span>
                </div>
              </div>
              <div className="corporate-slogan-wrap">
                <span className="corporate-slogan">“{company.slogan}”</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEALER / PARTNER CTA STRIP */}
      <section className="section contact-dealer-strip">
        <div className="wrap">
          <div className="dealer-strip-box">
            <div className="dealer-strip-content">
              <div className="dealer-icon-wrap">
                <IconHandshake size={32} />
              </div>
              <div>
                <h3 className="dealer-strip-title">Looking for Exclusive Dealership or Distribution?</h3>
                <p className="dealer-strip-desc">
                  Join our fast-growing network of construction material distributors across India with
                  exclusive regional benefits and high margins.
                </p>
              </div>
            </div>
            <a href="/partner" className="btn btn-pill-gold">
              BECOME A PARTNER →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
