const CAPABILITIES = [
  { icon: '☎', label: 'Voice', desc: 'Make and receive calls worldwide with crystal clear reliability.', href: '/products/voice', tone: '#ff4f61', toneSoft: 'rgba(255,79,97,.13)' },
  { icon: '▣', label: 'Video', desc: 'HD video calls, screensharing, and recording for immersive experiences.', href: '/products/video', tone: '#7f5cff', toneSoft: 'rgba(127,92,255,.14)' },
  { icon: '▤', label: 'Messaging', desc: 'Engage across SMS, MMS and chat apps on one powerful API.', href: '/products/messaging', tone: '#48b956', toneSoft: 'rgba(72,185,86,.13)' },
  { icon: '⌘', label: 'Social Network', desc: 'Connect with users on their favorite social platforms through our APIs.', href: '/products/social-network', tone: '#2474ff', toneSoft: 'rgba(36,116,255,.13)' },
  { icon: '▦', label: 'Fax', desc: 'Send and receive faxes securely over the cloud, no machines required.', href: '/products/fax', tone: '#ff7d3e', toneSoft: 'rgba(255,125,62,.13)' },
  { icon: '✉', label: 'Email', desc: 'Transactional and marketing emails delivered reliably worldwide.', href: '/products/email', tone: '#28bdaa', toneSoft: 'rgba(40,189,170,.13)' },
  { icon: '◆', label: 'Security', desc: 'Enterprise-grade security, compliance, and privacy built in.', href: '/products/security', tone: '#1b9dff', toneSoft: 'rgba(27,157,255,.13)' },
  { icon: '✣', label: 'Cognitive Automation', desc: 'AI-powered workflows that automate and optimize communications.', href: '/products/cognitive-automation', tone: '#ff5fc6', toneSoft: 'rgba(255,95,198,.14)' },
]

export default function Capabilities() {
  return (
    <section aria-label="Capabilities" style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(60px,8vw,100px) 0', color: '#071127', background: '#f7fbff' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 100% 0%, rgba(120,92,246,.1), transparent 30%), linear-gradient(180deg,#fff,#f3f9ff 70%,#f7fbff)', pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr minmax(260px,440px)', alignItems: 'end', gap: 40, marginBottom: 44 }} className="cap-split">
          <div>
            <p className="text-eyebrow" style={{ color: '#4577ff', marginBottom: 12 }}>Capabilities</p>
            <h2 className="text-heading-xl" style={{ margin: 0 }}>
              Everything you need to communicate <span style={{ color: '#8b5cf6' }}>at scale</span>
            </h2>
          </div>
          <p style={{ marginBottom: 8, color: '#4b5a7a', fontSize: 18, lineHeight: 1.6 }}>
            APIs that plug in easily and scale reliably, so you can build the experiences your customers love.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 18 }} className="cap-grid">
          {CAPABILITIES.map(cap => <CapCard key={cap.label} {...cap} />)}
        </div>
      </div>
      <style>{`
        @media (max-width: 1100px) { .cap-split { grid-template-columns: 1fr !important; } .cap-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 640px) { .cap-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

function CapCard({ icon, label, desc, href, tone, toneSoft }: { icon: string; label: string; desc: string; href: string; tone: string; toneSoft: string }) {
  return (
    <article
      style={{ position: 'relative', minHeight: 230, padding: 28, border: '1px solid rgba(7,17,39,.1)', borderRadius: 18, background: 'rgba(255,255,255,.72)', boxShadow: '0 14px 44px rgba(22,34,69,.08)', overflow: 'hidden', transition: 'transform .22s ease, box-shadow .22s ease, border-color .22s ease', cursor: 'pointer' }}
      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-6px)'; el.style.boxShadow = '0 28px 80px rgba(22,34,69,.16)'; el.style.borderColor = 'rgba(139,92,246,.22)' }}
      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ''; el.style.boxShadow = '0 14px 44px rgba(22,34,69,.08)'; el.style.borderColor = 'rgba(7,17,39,.1)' }}
    >
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 0 0, ${toneSoft}, transparent 48%)`, opacity: .75, pointerEvents: 'none' }} />
      <div style={{ position: 'relative' }}>
        <div style={{ width: 54, height: 54, borderRadius: 16, display: 'grid', placeItems: 'center', color: tone, background: '#fff', boxShadow: '0 16px 34px rgba(22,34,69,.08)', fontSize: 28 }} aria-hidden="true">{icon}</div>
        <h3 style={{ margin: '18px 0 10px', fontSize: 18, fontWeight: 800, color: '#071127' }}>{label}</h3>
        <p style={{ marginBottom: 28, color: '#4b5a7a', fontSize: 14, lineHeight: 1.6 }}>{desc}</p>
        <a href={href} style={{ fontSize: 14, fontWeight: 800, color: tone }}>Explore {label} <span style={{ marginLeft: 8 }}>→</span></a>
      </div>
    </article>
  )
}
