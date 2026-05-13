export default function CTABand() {
  return (
    <section aria-label="Start building call to action" style={{ padding: '0 0 clamp(60px,8vw,100px)', background: '#050818' }}>
      <div className="container">
        <div style={{
          minHeight: 240,
          display: 'grid',
          gridTemplateColumns: '300px 1fr 260px',
          gap: 38,
          alignItems: 'center',
          padding: 'clamp(28px,4vw,56px)',
          borderRadius: 28,
          background: 'radial-gradient(circle at 15% 20%, rgba(255,255,255,.34), transparent 16%), linear-gradient(120deg,#ff4fb9 0%,#7b5cff 43%,#25d4f5 70%,#21d8b5 100%)',
          boxShadow: '0 30px 100px rgba(42,226,240,.18), 0 30px 100px rgba(255,79,185,.14)',
          overflow: 'hidden',
          position: 'relative',
        }} className="cta-card">
          {/* Shimmer overlay */}
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(120deg,rgba(255,255,255,.18),transparent 30%,rgba(255,255,255,.08))', pointerEvents: 'none' }} />

          {/* 3D cube art */}
          <div style={{ minHeight: 150, position: 'relative', zIndex: 1 }} aria-hidden="true" className="cta-art">
            <div style={{ position: 'absolute', width: 130, height: 130, left: 88, top: 12, borderRadius: 18, transform: 'rotateX(58deg) rotateZ(-45deg)', background: 'linear-gradient(135deg,rgba(255,255,255,.88),rgba(255,255,255,.18))', border: '1px solid rgba(255,255,255,.5)', boxShadow: '0 0 36px rgba(255,255,255,.34)', animation: 'float-slow 5s ease-in-out infinite' }} />
            <div style={{ position: 'absolute', width: 58, height: 58, left: 25, top: 34, borderRadius: 18, transform: 'rotateX(58deg) rotateZ(-45deg)', background: 'linear-gradient(135deg,rgba(255,255,255,.88),rgba(255,255,255,.18))', border: '1px solid rgba(255,255,255,.5)', boxShadow: '0 0 36px rgba(255,255,255,.34)', animation: 'float-slow 7s ease-in-out infinite 1s' }} />
            <div style={{ position: 'absolute', width: 42, height: 42, right: 36, top: 2, borderRadius: 18, transform: 'rotateX(58deg) rotateZ(-45deg)', background: 'linear-gradient(135deg,rgba(255,255,255,.88),rgba(255,255,255,.18))', border: '1px solid rgba(255,255,255,.5)', boxShadow: '0 0 36px rgba(255,255,255,.34)', animation: 'float 6s ease-in-out infinite 0.5s' }} />
          </div>

          {/* Copy */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p className="text-eyebrow" style={{ color: 'rgba(255,255,255,.8)', marginBottom: 14 }}>Ready to build?</p>
            <h2 className="text-heading-lg" style={{ color: '#fff', marginBottom: 26 }}>Start building the future of communication today.</h2>
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 22, padding: 0, margin: 0, listStyle: 'none', fontWeight: 800, fontSize: 13, color: '#fff' }}>
              {[['Fast setup','Sandbox & docs'],['Global reach','100+ countries'],['Developer first','APIs you\'ll love']].map(([title, sub]) => (
                <li key={title} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 20, height: 20, display: 'inline-grid', placeItems: 'center', borderRadius: '50%', background: 'rgba(255,255,255,.25)', fontSize: 12 }}>✓</span>
                  <span>{title} <span style={{ fontWeight: 400, opacity: .75 }}>— {sub}</span></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div style={{ display: 'grid', gap: 14, position: 'relative', zIndex: 1 }}>
            <a href="/signup" className="btn btn-light" style={{ justifyContent: 'center' }}>Get started for free →</a>
            <a href="/contact-sales" className="btn btn-outline-light" style={{ justifyContent: 'center' }}>Contact sales</a>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1000px) { .cta-card { grid-template-columns: 1fr !important; } .cta-art { display: none !important; } }
        @media (max-width: 640px) { .cta-card { padding: 28px !important; } }
      `}</style>
    </section>
  )
}
