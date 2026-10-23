import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { IsoBadge } from './ProductBags'

const footerLinks = [
  { to: '/', label: 'HOME' },
  { to: '/about', label: 'ABOUT US' },
  { to: '/products', label: 'PRODUCTS' },
  { to: '/why-us', label: 'WHY US' },
  { to: '/partner', label: 'PARTNER' },
  { to: '/contact', label: 'CONTACT' },
]

export default function Footer() {
  const location = useLocation()
  const isTerms = location.pathname === '/terms'

  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <Logo className="footer-logo" />
        <nav className="footer-nav" aria-label="Footer">
          {footerLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="footer-right">
          <div className="footer-iso">
            <IsoBadge />
          </div>
          {isTerms ? (
            <div className="footer-thankyou">
              <span className="thankyou-script">Thank You</span>
              <span className="thankyou-sub">for being a part of our journey. Together, we build stronger.</span>
            </div>
          ) : (
            <span className="footer-slogan">Build Stronger. Bond Forever.</span>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="wrap footer-bottom-row">
          <div className="footer-bottom-left">
            <span className="footer-copy">
              © {new Date().getFullYear()} Heaven Empire Private Limited.
            </span>
            <span className="footer-sep">|</span>
            <Link to="/terms" className="footer-bottom-link">
              Terms &amp; Conditions
            </Link>
          </div>
          <div className="footer-bottom-right">
            <span className="footer-dev-credit">
              Design &amp; Developed by{' '}
              <a
                href="https://whitegravity.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="credit-company"
              >
                White gravity Web Solution
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
