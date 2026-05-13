import type { ReactNode } from 'react'

export default function FeatureGrid({ features, columns = 3 }: { features: { icon: ReactNode, title: string, desc: string, tone?: string }[], columns?: number }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(${columns === 3 ? '300px' : '400px'}, 1fr))`, gap: 24 }}>
      {features.map((feat, i) => (
        <div key={i} style={{ padding: 24, borderRadius: 16, border: '1px solid rgba(7,17,39,.1)', background: '#fff', boxShadow: '0 8px 24px rgba(22,34,69,.04)' }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, display: 'grid', placeItems: 'center', fontSize: 24, color: feat.tone || '#4577ff', background: 'rgba(69,119,255,.1)', marginBottom: 16 }}>
            {feat.icon}
          </div>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, color: '#071127' }}>{feat.title}</h3>
          <p style={{ color: '#4b5a7a', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{feat.desc}</p>
        </div>
      ))}
    </div>
  )
}
