export default function PageHero({ title, highlight, subtitle, ctaText = 'Start building for free', ctaHref = '/signup', accentColor = 'linear-gradient(90deg, #36f3f6, #8f7bff 54%, #ff72d0)' }: { title: string, highlight?: string, subtitle: string, ctaText?: string, ctaHref?: string, accentColor?: string }) {
  return (
    <section aria-label="Page Hero" style={{ position: 'relative', padding: 'clamp(120px,13vw,180px) 0 clamp(60px,8vw,100px)', background: '#050818', color: '#edf3ff', overflow: 'hidden', textAlign: 'center' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, background: 'radial-gradient(circle at 50% 20%, rgba(81,63,220,.25), transparent 40%), linear-gradient(180deg, #06091d 0%, #071037 58%, #080b24 100%)' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 className="text-display" style={{ marginBottom: 24, maxWidth: 900 }}>
          {title} {highlight && <span style={{ background: accentColor, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{highlight}</span>}
        </h1>
        <p style={{ maxWidth: 600, color: '#9ba8cf', fontSize: 'clamp(17px,2vw,20px)', lineHeight: 1.65, marginBottom: 34 }}>
          {subtitle}
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
          <a href={ctaHref} className="btn btn-gradient">{ctaText} <span aria-hidden="true">→</span></a>
          <a href="/contact-sales" className="btn btn-ghost">Talk to an expert</a>
        </div>
      </div>
    </section>
  )
}
