export default function ProductBags({ className = '' }) {
  return (
    <img
      className={`bags-photo ${className}`.trim()}
      src="/brand/product-bags-transparent.png"
      alt="GRIPA Premium Tile & Stone Adhesive bags"
    />
  )
}

export function GripaLogo({ className = '', variant = 'light' }) {
  return (
    <img
      className={`gripa-logo-img gripa-${variant} ${className}`.trim()}
      src="/brand/gripa-logo-gold-3d.png"
      alt="GRIPA — Advanced adhesive for a stronger tomorrow"
    />
  )
}

export function IsoBadge({ className = '' }) {
  return (
    <img
      className={`iso-badge-img ${className}`.trim()}
      src="/brand/heaven-empire-iso-logo.png"
      alt="ISO 9001:2015 Verified — Heaven Empire Private Limited"
    />
  )
}

export function IsoSeal({ className = '' }) {
  return (
    <div className={`iso-seal-circle ${className}`.trim()}>
      <img
        src="/brand/iso-badge-tight.png"
        alt="ISO 9001:2015 Verified"
      />
    </div>
  )
}
