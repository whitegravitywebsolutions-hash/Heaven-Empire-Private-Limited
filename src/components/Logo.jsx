import { Link } from 'react-router-dom'

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`brand ${className}`.trim()} aria-label="Heaven Empire Private Limited">
      <img className="brand-emblem-img" src="/brand/he-emblem.png" alt="Heaven Empire Crest" />
      <span className="brand-text">
        <strong className="brand-title">HEAVEN EMPIRE</strong>
        <small className="brand-sub">PRIVATE LIMITED</small>
      </span>
    </Link>
  )
}
