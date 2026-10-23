import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'
import { IsoBadge } from './ProductBags'

const links = [
  { to: '/', label: 'HOME' },
  { to: '/about', label: 'ABOUT US' },
  { to: '/products', label: 'PRODUCTS' },
  { to: '/why-us', label: 'WHY US' },
  { to: '/partner', label: 'PARTNER' },
  { to: '/contact', label: 'CONTACT' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="wrap header-inner">
        <Logo />
        <nav className="nav" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <div className="header-iso">
            <IsoBadge />
          </div>
          <Link className="btn btn-enquire" to="/partner">
            ENQUIRE NOW
          </Link>
          <button
            className="menu-btn"
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </div>
      {open ? (
        <nav className="mobile-nav" aria-label="Mobile">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          <Link className="btn btn-enquire mobile-enquire" to="/partner" onClick={() => setOpen(false)}>
            ENQUIRE NOW
          </Link>
          <div className="mobile-iso-wrap">
            <IsoBadge />
          </div>
        </nav>
      ) : null}
    </header>
  )
}
