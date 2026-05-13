import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Product', href: '/product' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Pricing', href: '/pricing' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      aria-label="Primary navigation"
      style={{
        position: 'fixed',
        inset: '0 0 auto',
        zIndex: 50,
        padding: '20px 0',
        transition: 'background .3s ease, box-shadow .3s ease',
        background: scrolled ? 'rgba(5,8,24,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,.08)' : 'none',
      }}
    >
      <nav
        style={{
          width: 'min(1320px, calc(100% - 48px))',
          marginInline: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 28,
        }}
      >
        {/* Brand */}
        <a
          href="/"
          aria-label="foneAPI home"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontWeight: 800, letterSpacing: '-.04em', fontSize: 24, textDecoration: 'none' }}
        >
          <BrandMark />
          <span style={{ color: '#fff' }}>foneAPI</span>
        </a>

        {/* Desktop nav links */}
        <div
          aria-label="Main menu"
          style={{ display: 'flex', alignItems: 'center', gap: 28, color: 'rgba(255,255,255,.84)', fontSize: 14, fontWeight: 700 }}
          className="desktop-nav"
        >
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              style={{ opacity: 0.92, transition: 'color .2s, opacity .2s', color: 'rgba(255,255,255,.84)' }}
              onMouseEnter={e => { (e.target as HTMLAnchorElement).style.color = '#fff'; (e.target as HTMLAnchorElement).style.opacity = '1' }}
              onMouseLeave={e => { (e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,.84)'; (e.target as HTMLAnchorElement).style.opacity = '0.92' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Nav actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 14, fontWeight: 700 }}>
          <a href="/login" style={{ color: 'rgba(255,255,255,.84)', transition: 'color .2s' }} className="nav-text-link">Log in</a>
          <a href="/signup" className="btn btn-gradient btn-sm">Get started</a>
        </div>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-btn"
          className="hamburger"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: 28,
            height: 20,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <span style={{ height: 2, background: '#fff', borderRadius: 2, transition: 'transform .3s, opacity .3s', transform: menuOpen ? 'rotate(45deg) translate(6px,6px)' : 'none' }} />
          <span style={{ height: 2, background: '#fff', borderRadius: 2, transition: 'opacity .3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ height: 2, background: '#fff', borderRadius: 2, transition: 'transform .3s', transform: menuOpen ? 'rotate(-45deg) translate(6px,-6px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      <div
        id="mobile-menu"
        role="menu"
        aria-hidden={!menuOpen}
        style={{
          display: menuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          gap: 4,
          padding: '16px 24px 24px',
          background: 'rgba(5,8,24,0.97)',
          backdropFilter: 'blur(16px)',
        }}
      >
        {NAV_LINKS.map(link => (
          <a
            key={link.href}
            href={link.href}
            role="menuitem"
            style={{ color: 'rgba(255,255,255,.84)', fontSize: 18, fontWeight: 700, padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,.08)' }}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
          <a href="/login" className="btn btn-ghost btn-sm" style={{ flex: 1, justifyContent: 'center' }}>Log in</a>
          <a href="/signup" className="btn btn-gradient btn-sm" style={{ flex: 1, justifyContent: 'center' }}>Get started</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .nav-text-link { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  )
}

function BrandMark() {
  return (
    <span
      aria-hidden="true"
      style={{
        width: 28,
        height: 34,
        position: 'relative',
        display: 'inline-grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 4,
        transform: 'rotate(-24deg)',
      }}
    >
      <span style={{ borderRadius: 9, background: 'linear-gradient(135deg,#ff8d5d,#ff61b8 48%,#8b5cf6)', boxShadow: '0 0 20px rgba(255,97,184,.35)', gridColumn: 1, gridRow: 1, opacity: .82 }} />
      <span style={{ borderRadius: 9, background: 'linear-gradient(135deg,#ff8d5d,#ff61b8 48%,#8b5cf6)', boxShadow: '0 0 20px rgba(255,97,184,.35)', gridColumn: 2, gridRow: 1, transform: 'translateY(7px)' }} />
      <span style={{ borderRadius: 9, background: 'linear-gradient(135deg,#31f1f4,#8b5cf6)', gridColumn: 1, gridRow: 2, transform: 'translateY(-1px)' }} />
    </span>
  )
}
