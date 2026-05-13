const SOLUTIONS = [
  { icon: '↗', label: 'Click-to-Call', desc: 'Turn website visitors into connected conversations.', href: '/solutions/click-to-call' },
  { icon: '☏', label: 'Call Monitoring', desc: 'Track and review calls to improve performance.', href: '/solutions/call-monitoring' },
  { icon: '●', label: 'Lead Alerts', desc: 'Instant alerts so your team never misses an opportunity.', href: '/solutions/lead-alerts' },
  { icon: '▣', label: 'Appointment Reminders', desc: 'Reduce no-shows with automated reminders.', href: '/solutions/appointment-reminders' },
  { icon: '⌘', label: 'Protect Phone Numbers', desc: 'Mask numbers and safeguard user identity.', href: '/solutions/protect-numbers' },
  { icon: '✓', label: '1-2 Verification', desc: 'Verify users with OTP, 2FA, and secure flows.', href: '/solutions/verification' },
]

export default function Solutions() {
  return (
    <section aria-label="Solutions" style={{ position: 'relative', padding: 'clamp(60px,8vw,100px) 0', overflow: 'hidden', color: '#edf3ff' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 11% 45%, rgba(255,100,164,.26), transparent 26%), linear-gradient(180deg,#080b24,#06102e 64%,#050818)', pointerEvents: 'none' }} />
      {/* Planet orb */}
      <div aria-hidden="true" style={{ position: 'absolute', left: -165, top: 60, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle at 72% 40%, rgba(255,113,158,.45), rgba(70,44,136,.12) 38%, transparent 66%)', border: '1px solid rgba(255,255,255,.12)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 42, alignItems: 'center' }} className="sol-grid">
          <div>
            <p className="text-eyebrow" style={{ color: '#d89dff', marginBottom: 12 }}>Solutions</p>
            <h2 className="text-heading-xl" style={{ color: '#fff', margin: 0 }}>
              Built for real-world business <span style={{ color: '#c294ff' }}>outcomes</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, minmax(148px,1fr))', gap: 14 }} className="sol-rail">
            {SOLUTIONS.map(sol => <SolutionCard key={sol.label} {...sol} />)}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1100px) { .sol-grid { grid-template-columns: 1fr !important; } .sol-rail { grid-template-columns: repeat(3,minmax(0,1fr)) !important; } }
        @media (max-width: 640px) { .sol-rail { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  )
}

function SolutionCard({ icon, label, desc, href }: { icon: string; label: string; desc: string; href: string }) {
  return (
    <article
      style={{ minHeight: 250, padding: '24px 18px', borderRadius: 22, border: '1px solid rgba(255,255,255,.16)', background: 'linear-gradient(180deg,rgba(255,255,255,.12),rgba(255,255,255,.045))', boxShadow: '0 26px 70px rgba(0,0,0,.28), inset 0 1px 0 rgba(255,255,255,.12)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', transition: 'transform .22s ease, border-color .22s ease' }}
      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-8px)'; el.style.borderColor = 'rgba(49,241,244,.45)' }}
      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ''; el.style.borderColor = 'rgba(255,255,255,.16)' }}
    >
      <div style={{ width: 64, height: 64, display: 'grid', placeItems: 'center', borderRadius: 20, marginBottom: 22, color: '#fff', fontSize: 28, background: 'linear-gradient(135deg,rgba(49,241,244,.7),rgba(255,97,184,.65))', boxShadow: '0 0 46px rgba(114,92,255,.32)' }} aria-hidden="true">{icon}</div>
      <h3 style={{ marginBottom: 9, fontSize: 18, color: '#fff', lineHeight: 1.1, fontWeight: 800 }}>{label}</h3>
      <p style={{ color: '#aeb8dd', fontSize: 13, minHeight: 58, lineHeight: 1.6 }}>{desc}</p>
      <a href={href} aria-label={`Explore ${label}`} style={{ width: 38, height: 38, display: 'grid', placeItems: 'center', border: '1px solid rgba(255,255,255,.25)', borderRadius: '50%', color: '#fff', fontSize: 18, transition: 'background .2s' }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,.15)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
      >→</a>
    </article>
  )
}
