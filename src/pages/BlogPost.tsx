import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CTABand from '../components/CTABand'

export default function BlogPost() {
  const { slug } = useParams()
  const title = slug ? slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Blog Post'

  useEffect(() => {
    document.title = `${title} | foneAPI Blog`
  }, [title])

  return (
    <>
      <article style={{ background: '#050818', color: '#edf3ff', minHeight: '100vh' }}>
        <header style={{ padding: '160px 0 80px', textAlign: 'center', background: 'radial-gradient(circle at 50% 0%, rgba(69,119,255,.15), transparent 60%)' }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <span style={{ display: 'inline-block', padding: '6px 12px', background: 'rgba(69,119,255,.1)', color: '#4577ff', borderRadius: 999, fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 24 }}>Tutorial</span>
            <h1 className="text-display" style={{ marginBottom: 24, fontSize: 'clamp(40px, 5vw, 56px)' }}>{title}</h1>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, #e2e8f0, #cbd5e1)' }} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 800, fontSize: 15 }}>Alex Developer</div>
                <div style={{ color: '#9ba8cf', fontSize: 13 }}>May 13, 2026 • 8 min read</div>
              </div>
            </div>
          </div>
        </header>
        
        <div style={{ padding: '0 0 120px', background: '#fff', color: '#071127' }}>
          <div className="container" style={{ maxWidth: 720, paddingTop: 80, fontSize: 18, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 24 }}>
              This is a placeholder for the blog post content. In a production environment, this content would be fetched from a headless CMS or rendered from MDX files.
            </p>
            <h2 style={{ fontSize: 28, fontWeight: 800, marginTop: 48, marginBottom: 24 }}>Implementation Details</h2>
            <p style={{ marginBottom: 24 }}>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
            </p>
            <div style={{ background: '#050818', color: '#edf3ff', padding: 24, borderRadius: 16, fontFamily: 'monospace', fontSize: 14, marginBottom: 24, overflowX: 'auto' }}>
              {'const client = new FoneAPI(apiKey);\nawait client.messages.create({ to, from, body });'}
            </div>
          </div>
        </div>
      </article>
      <CTABand />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "author": { "@type": "Person", "name": "Alex Developer" }
        })}
      </script>
    </>
  )
}
