export default function PricingCard({ title, price, unit, features, isPopular, ctaHref = '/signup' }: { title: string, price: string, unit: string, features: string[], isPopular?: boolean, ctaHref?: string }) {
  return (
    <div style={{ position: 'relative', padding: 32, borderRadius: 24, border: `1px solid ${isPopular ? 'rgba(139,92,246,.5)' : 'rgba(7,17,39,.1)'}`, background: '#fff', boxShadow: isPopular ? '0 24px 80px rgba(139,92,246,.15)' : '0 14px 44px rgba(22,34,69,.06)', transform: isPopular ? 'scale(1.02)' : 'none', zIndex: isPopular ? 1 : 0 }}>
      {isPopular && (
        <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #ff8d5d, #b45cff)', color: '#fff', padding: '4px 16px', borderRadius: 999, fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.05em' }}>Most Popular</div>
      )}
      <h3 style={{ fontSize: 20, fontWeight: 800, color: '#071127', marginBottom: 12 }}>{title}</h3>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 24 }}>
        <span style={{ fontSize: 48, fontWeight: 900, color: '#071127', letterSpacing: '-.05em' }}>{price}</span>
        <span style={{ color: '#4b5a7a', fontSize: 15 }}>{unit}</span>
      </div>
      <a href={ctaHref} className={`btn ${isPopular ? 'btn-gradient' : 'btn-light'}`} style={{ width: '100%', marginBottom: 32, border: isPopular ? 'none' : '1px solid rgba(7,17,39,.1)' }}>Get Started</a>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {features.map((feat, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, color: '#4b5a7a', fontSize: 15 }}>
            <span style={{ color: '#48b956', fontWeight: 800 }}>✓</span>
            {feat}
          </li>
        ))}
      </ul>
    </div>
  )
}
