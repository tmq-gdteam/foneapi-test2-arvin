export default function Footer() {
  const cols = [
    {
      title: 'Product',
      links: [
        { label: 'Voice API', href: '/products/voice' },
        { label: 'Video API', href: '/products/video' },
        { label: 'Messaging API', href: '/products/messaging' },
        { label: 'Email API', href: '/products/email' },
        { label: 'Fax API', href: '/products/fax' },
        { label: 'Security', href: '/products/security' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'By Industry', href: '/solutions/industry' },
        { label: 'Customer Stories', href: '/testimonials' },
        { label: 'Integrations', href: '/solutions/integrations' },
        { label: 'Pricing', href: '/pricing' },
      ],
    },
    {
      title: 'Developers',
      links: [
        { label: 'Voice Docs', href: '/products/voice/voice-api' },
        { label: 'SMS Docs', href: '/products/messaging/sms-api' },
        { label: 'SMS Pricing', href: '/products/messaging/sms-pricing' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/why-us' },
        { label: 'Contact', href: '/contact' },
        { label: 'Blog', href: '/blog' },
        { label: 'Testimonials', href: '/testimonials' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Support Center', href: '/support' },
        { label: 'FAQs', href: '/faqs' },
      ],
    },
  ]

  return (
    <footer
      aria-label="Site footer"
      style={{ padding: '10px 0 36px', background: '#050818', color: '#edf3ff' }}
    >
      <div className="container">
        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(5,1fr)', gap: 54, paddingTop: 42 }}>
          {/* Brand col */}
          <div>
            <a href="/" aria-label="foneAPI home" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontWeight: 800, fontSize: 22, letterSpacing: '-.04em' }}>
              <BrandMark />
              <span style={{ color: '#fff' }}>foneAPI</span>
            </a>
            <p style={{ maxWidth: 290, color: '#97a3cd', margin: '18px 0 28px', fontSize: 14, lineHeight: 1.65 }}>
              The Communications API platform trusted by modern teams to build meaningful connections.
            </p>
            <div style={{ display: 'flex', gap: 14 }} aria-label="Social links">
              {[['GitHub','⌁','/github'],['LinkedIn','in','/linkedin'],['X','𝕏','/x'],['YouTube','▶','/youtube']].map(([label, icon, href]) => (
                <a key={label} href={href} aria-label={label}
                  style={{ width: 36, height: 36, display: 'grid', placeItems: 'center', color: '#c6ceec', borderRadius: '50%', background: 'rgba(255,255,255,.06)', fontSize: 14, transition: 'background .2s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,.14)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,.06)')}
                >{icon}</a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.title} style={{ display: 'grid', alignContent: 'start', gap: 12 }}>
              <h2 style={{ margin: '0 0 8px', fontSize: 15, color: '#fff', fontWeight: 700 }}>{col.title}</h2>
              {col.links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{ color: '#9fa9d0', fontSize: 14, transition: 'color .2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9fa9d0')}
                >{link.label}</a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, marginTop: 56, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.08)', color: '#7984ad', fontSize: 13, flexWrap: 'wrap' }}>
          <p style={{ margin: 0 }}>© 2026 foneAPI. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[['Privacy Policy','/privacy-policy'],['Terms of Service','/terms-of-service'],['Cookie Policy','/cookies']].map(([label, href]) => (
              <a key={href} href={href} style={{ color: '#7984ad', transition: 'color .2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#7984ad')}
              >{label}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          footer > div > div:first-child { grid-template-columns: repeat(3,1fr) !important; }
          footer > div > div:first-child > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 640px) {
          footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </footer>
  )
}

function BrandMark() {
  return (
    <span aria-hidden="true" style={{ width: 26, height: 30, position: 'relative', display: 'inline-grid', gridTemplateColumns: '1fr 1fr', gap: 3, transform: 'rotate(-24deg)' }}>
      <span style={{ borderRadius: 7, background: 'linear-gradient(135deg,#ff8d5d,#ff61b8 48%,#8b5cf6)', gridColumn: 1, gridRow: 1, opacity: .82 }} />
      <span style={{ borderRadius: 7, background: 'linear-gradient(135deg,#ff8d5d,#ff61b8 48%,#8b5cf6)', gridColumn: 2, gridRow: 1, transform: 'translateY(6px)' }} />
      <span style={{ borderRadius: 7, background: 'linear-gradient(135deg,#31f1f4,#8b5cf6)', gridColumn: 1, gridRow: 2, transform: 'translateY(-1px)' }} />
    </span>
  )
}
