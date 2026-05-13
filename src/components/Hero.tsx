import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      const visual = hero.querySelector('.hero-visual') as HTMLElement
      if (visual) {
        visual.style.transform = `perspective(1000px) rotateY(${x * 4}deg) rotateX(${-y * 3}deg)`
      }
    }
    hero.addEventListener('mousemove', onMove)
    return () => hero.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      ref={heroRef}
      aria-label="Hero"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(120px,13vw,180px) 0 clamp(40px,5vw,60px)',
        isolation: 'isolate',
        color: '#edf3ff',
      }}
    >
      {/* Background gradient */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: -3,
        background: `
          radial-gradient(circle at 16% 18%, rgba(81,63,220,.38), transparent 32%),
          radial-gradient(circle at 82% 12%, rgba(43,221,255,.2), transparent 28%),
          linear-gradient(180deg, #06091d 0%, #071037 58%, #080b24 100%)
        `,
      }} />

      {/* Fade-out bottom */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 'auto 0 0', height: 200, background: 'linear-gradient(180deg, transparent, rgba(6,9,29,.94))', zIndex: -2 }} />

      {/* Dot mesh */}
      <div aria-hidden="true" style={{
        position: 'absolute', right: -120, top: 150, width: 440, height: 620, opacity: .55, zIndex: -1,
        backgroundImage: 'radial-gradient(circle, rgba(69,119,255,.85) 1.4px, transparent 1.4px)',
        backgroundSize: '15px 15px',
        maskImage: 'radial-gradient(ellipse at center, #000, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, #000, transparent 70%)',
      }} />

      {/* Glow orbs */}
      <div aria-hidden="true" style={{ position: 'absolute', width: 9, height: 9, right: '13%', top: '17%', borderRadius: '50%', background: '#ffb36c', boxShadow: '0 0 30px 8px rgba(255,151,91,.55)', animation: 'pulse-glow 3s ease-in-out infinite' }} />
      <div aria-hidden="true" style={{ position: 'absolute', width: 6, height: 6, left: '53%', top: '29%', borderRadius: '50%', background: '#ff72d0', boxShadow: '0 0 28px 8px rgba(255,97,184,.5)', animation: 'pulse-glow 4s ease-in-out infinite 1s' }} />

      <div className="container">
        {/* Hero grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,.92fr) minmax(440px,1.08fr)', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }} className="hero-grid">

          {/* Copy */}
          <div style={{ animation: 'fade-up .7s ease both' }}>
            <p className="text-eyebrow" style={{ color: '#bcc7ff', marginBottom: 16 }}>Communications API Platform</p>
            <h1 className="text-display" style={{ color: '#edf3ff', marginBottom: 24 }}>
              Power every{' '}
              <span className="gradient-text-hero">conversation.</span>
              <br />Build what's next.
            </h1>
            <p style={{ maxWidth: 560, color: '#9ba8cf', fontSize: 'clamp(17px,2vw,20px)', lineHeight: 1.65, marginBottom: 0 }}>
              The all-in-one Communications API platform for voice, video, messaging, email, social channels, security, and verification.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 34 }}>
              <a href="/signup" className="btn btn-gradient">
                Start building for free <span aria-hidden="true">→</span>
              </a>
              <a href="/contact-sales" className="btn btn-ghost">
                Talk to an expert
              </a>
            </div>

            {/* Trust badges */}
            <ul aria-label="Platform benefits" style={{ display: 'flex', flexWrap: 'wrap', gap: 20, padding: 0, margin: '28px 0 0', listStyle: 'none', color: '#aeb9e3', fontSize: 13, fontWeight: 700 }}>
              {['Free credits to start', 'No credit card', 'Enterprise ready'].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 18, height: 18, display: 'inline-grid', placeItems: 'center', border: '1px solid rgba(255,255,255,.2)', borderRadius: '50%', color: '#a98cff', fontSize: 11 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div
            className="hero-visual"
            aria-label="Abstract product interface showing voice, video, messaging, email, and verification"
            style={{ position: 'relative', minHeight: 560, transition: 'transform .1s ease-out' }}
          >
            {/* Halo */}
            <div aria-hidden="true" style={{
              position: 'absolute', left: '50%', top: '50%',
              width: 620, height: 300,
              transform: 'translate(-50%,-50%) rotate(-16deg)',
              border: '1px solid rgba(130,108,255,.45)',
              borderRadius: '50%',
              boxShadow: 'inset 0 0 40px rgba(59,252,255,.08), 0 0 50px rgba(103,88,255,.2)',
              animation: 'halo-spin 24s linear infinite',
            }}>
              <div style={{ position: 'absolute', inset: 28, border: '1px dashed rgba(255,255,255,.2)', borderRadius: '50%' }} />
              <div style={{ position: 'absolute', inset: 76, border: '1px dashed rgba(49,241,244,.22)', borderRadius: '50%' }} />
            </div>

            {/* 3D Cube */}
            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 260, height: 260, display: 'grid', placeItems: 'center' }}>
              <div style={{ position: 'absolute', width: 230, height: 230, borderRadius: 38, background: 'radial-gradient(circle, rgba(185,97,255,.7), rgba(49,241,244,.08) 58%, transparent 70%)', filter: 'blur(26px)' }} aria-hidden="true" />
              <div style={{
                position: 'relative', width: 170, height: 170, borderRadius: 38,
                transform: 'rotateX(58deg) rotateZ(-45deg)',
                background: 'linear-gradient(145deg, rgba(255,255,255,.96), rgba(120,91,255,.28) 46%, rgba(65,248,255,.18))',
                border: '1px solid rgba(255,255,255,.6)',
                boxShadow: '0 0 80px rgba(125,80,255,.34), inset 0 0 38px rgba(255,255,255,.28)',
                animation: 'float-slow 6s ease-in-out infinite',
              }}>
                {/* Cube sides */}
                <div style={{ position: 'absolute', width: '100%', height: 54, left: 0, top: '100%', transformOrigin: 'top', transform: 'skewX(45deg)', background: 'linear-gradient(180deg, rgba(113,78,255,.42), rgba(40,17,94,.82))', borderRadius: '0 0 34px 34px', filter: 'saturate(1.2)' }} aria-hidden="true" />
                <div style={{ position: 'absolute', width: 54, height: '100%', left: '100%', top: 0, transformOrigin: 'left', transform: 'skewY(45deg)', background: 'linear-gradient(180deg, rgba(113,78,255,.42), rgba(40,17,94,.82))', borderRadius: '0 30px 30px 0' }} aria-hidden="true" />
                {/* F logo */}
                <div style={{ position: 'absolute', inset: 42, transform: 'rotateZ(45deg) rotateX(-58deg)', borderRadius: 18, background: 'linear-gradient(135deg,#fff,#b8fcff)', clipPath: 'polygon(0 0, 45% 0, 45% 28%, 100% 28%, 100% 72%, 55% 72%, 55% 100%, 0 100%)' }} aria-hidden="true" />
              </div>
            </div>

            {/* Float cards */}
            <FloatCard type="voice" />
            <FloatCard type="video" />
            <FloatCard type="message" />
            <FloatCard type="email" />
            <FloatCard type="verify" />
          </div>
        </div>

        {/* Stats panel */}
        <div style={{ marginTop: 'clamp(28px,4vw,48px)' }}>
          <section
            aria-label="Customer communication preference statistics"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.15fr 1.6fr .9fr',
              border: '1px solid rgba(180,170,255,.44)',
              borderRadius: 20,
              overflow: 'hidden',
              background: 'linear-gradient(135deg, rgba(255,255,255,.1), rgba(79,52,178,.2))',
              boxShadow: '0 24px 100px rgba(41,32,96,.4)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
            }}
            className="stat-panel"
          >
            {/* Lead */}
            <div style={{ padding: '28px 32px' }}>
              <span style={{ color: '#cbd3ff', fontWeight: 800, fontSize: 14 }}>The reality is</span>
              <strong className="gradient-stat-num" style={{ display: 'block', fontSize: 80, lineHeight: .9, letterSpacing: '-.08em', margin: '10px 0' }}>94%</strong>
              <p style={{ color: '#c2c9e8', marginBottom: 0, fontSize: 14, lineHeight: 1.6 }}>of respondents prefer business communication tools over in-person meetings.</p>
            </div>
            {/* Breakdown */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
              {[
                { pct: '48%', label: 'Gen Z',        bg: 'linear-gradient(135deg,#ff90b4,#6d5cff)' },
                { pct: '20%', label: 'Millennials',   bg: 'linear-gradient(135deg,#76e5ff,#5849bd)' },
                { pct: '10%', label: 'Executives',    bg: 'linear-gradient(135deg,#ffd191,#473795)' },
                { pct: '8%',  label: 'Baby Boomers',  bg: 'linear-gradient(135deg,#9cf1ff,#6b64ff)' },
              ].map(({ pct, label, bg }) => (
                <div key={label} style={{ minHeight: 170, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 22, borderLeft: '1px solid rgba(255,255,255,.13)', background: 'rgba(255,255,255,.04)' }}>
                  <span style={{ width: 48, height: 48, borderRadius: '50%', marginBottom: 20, border: '1px solid rgba(255,255,255,.18)', background: bg, display: 'block' }} aria-hidden="true" />
                  <strong style={{ fontSize: 44, letterSpacing: '-.06em', color: '#fff' }}>{pct}</strong>
                  <p style={{ color: '#c0c9ef', fontSize: 13, marginBottom: 0 }}>{label}</p>
                </div>
              ))}
            </div>
            {/* Note */}
            <div style={{ padding: '28px 32px', borderLeft: '1px solid rgba(255,255,255,.13)' }}>
              <p style={{ color: '#c2c9e8', marginBottom: 0, fontSize: 14, lineHeight: 1.6 }}>Modern customers expect fast, digital and frictionless interactions.</p>
              <strong style={{ display: 'block', marginTop: 18, color: '#31f1f4', fontSize: 20 }}>We make it possible.</strong>
            </div>
          </section>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { min-height: 480px !important; }
          .stat-panel { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .hero-grid { gap: 24px !important; }
          .hero-visual { transform: scale(.88) !important; transform-origin: center top; margin-bottom: -60px !important; }
          .stat-panel { display: none !important; }
        }
      `}</style>
    </section>
  )
}

function FloatCard({ type }: { type: string }) {
  const styles: Record<string, React.CSSProperties> = {
    voice:   { left: '10%',  top: '8%',   width: 190, animationDelay: '0s',    animationDuration: '5s' },
    video:   { right: '4%',  top: '10%',  width: 220, animationDelay: '1s',    animationDuration: '6s' },
    message: { left: '2%',   top: '45%',  width: 180, animationDelay: '0.5s',  animationDuration: '5.5s' },
    email:   { right: '1%',  top: '43%',  width: 178, animationDelay: '1.5s',  animationDuration: '7s' },
    verify:  { left: '47%',  bottom: '7%',width: 205, animationDelay: '2s',    animationDuration: '6s' },
  }

  const base: React.CSSProperties = {
    position: 'absolute',
    padding: 15,
    border: '1px solid rgba(255,255,255,.16)',
    borderRadius: 18,
    color: '#f6f8ff',
    background: 'linear-gradient(145deg, rgba(255,255,255,.14), rgba(255,255,255,.06))',
    boxShadow: '0 24px 80px rgba(0,0,0,.38), inset 0 1px 0 rgba(255,255,255,.16)',
    backdropFilter: 'blur(18px)',
    WebkitBackdropFilter: 'blur(18px)',
    animation: `float ${styles[type].animationDuration} ease-in-out infinite`,
    animationDelay: styles[type].animationDelay,
    ...styles[type],
  }

  if (type === 'voice') return (
    <article style={base}>
      <span style={{ display: 'block', color: '#b9c4ef', fontSize: 13, fontWeight: 800, marginBottom: 9 }}>Voice Call</span>
      <strong style={{ display: 'block', fontSize: 14, color: '#fff' }}>04:28</strong>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 36, marginTop: 8 }}>
        {[18,28,14,34,22,30,16].map((h, i) => (
          <span key={i} style={{ width: 7, height: h, borderRadius: 999, background: 'linear-gradient(180deg,#fff,#7c74ff)', animation: `waveform ${1.2 + i*0.15}s ease-in-out infinite`, animationDelay: `${i*0.1}s` }} />
        ))}
      </div>
    </article>
  )

  if (type === 'video') return (
    <article style={base}>
      <div style={{ height: 116, borderRadius: 14, background: 'radial-gradient(circle at 50% 28%, #ffe4d7 0 14%, transparent 15%), radial-gradient(circle at 50% 60%, #2a245e 0 26%, transparent 27%), linear-gradient(135deg,#efe7ff,#7ce9ff)', marginBottom: 10 }} aria-hidden="true" />
      <span style={{ display: 'block', color: '#b9c4ef', fontSize: 13, fontWeight: 800 }}>Video Call</span>
      <div style={{ position: 'absolute', left: '50%', bottom: 14, transform: 'translateX(-50%)', display: 'flex', gap: 8 }}>
        {[0,1,2].map(i => <span key={i} style={{ width: 22, height: 22, borderRadius: '50%', background: i === 2 ? '#ff5f73' : 'rgba(255,255,255,.9)' }} />)}
      </div>
    </article>
  )

  if (type === 'message') return (
    <article style={base}>
      <span style={{ display: 'block', color: '#b9c4ef', fontSize: 13, fontWeight: 800, marginBottom: 9 }}>Message</span>
      <strong style={{ display: 'block', fontSize: 14, color: '#fff' }}>Your code is 482196</strong>
    </article>
  )

  if (type === 'email') return (
    <article style={base}>
      <span style={{ display: 'block', color: '#b9c4ef', fontSize: 13, fontWeight: 800, marginBottom: 9 }}>Email</span>
      <strong style={{ display: 'block', fontSize: 14, color: '#fff' }}>Receipt.pdf</strong>
    </article>
  )

  return (
    <article style={base}>
      <span style={{ display: 'block', color: '#b9c4ef', fontSize: 13, fontWeight: 800, marginBottom: 9 }}>Verify</span>
      <strong style={{ display: 'block', fontSize: 14, color: '#fff' }}>Your OTP is 482196</strong>
    </article>
  )
}
