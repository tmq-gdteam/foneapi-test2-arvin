import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import CTABand from '../components/CTABand'

export default function Blog() {
  useEffect(() => {
    document.title = 'Blog & Resources | foneAPI'
  }, [])

  return (
    <>
      <PageHero
        title="Engineering"
        highlight="Blog."
        subtitle="Tutorials, company news, and technical deep-dives from the foneAPI team."
        accentColor="linear-gradient(90deg, #ff8d5d, #ff5fc6)"
      />
      <section style={{ padding: '80px 0', background: '#f7fbff', color: '#071127' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
            {[
              { title: 'Building a Serverless Call Center with Node.js', tag: 'Tutorial', readTime: '8 min read' },
              { title: 'Announcing our new Cognitive Automation suite', tag: 'Product News', readTime: '4 min read' },
              { title: 'Best Practices for High-Volume SMS Delivery', tag: 'Engineering', readTime: '12 min read' },
              { title: 'How we scaled our WebRTC Gateway to handle 1M concurrent users', tag: 'Engineering', readTime: '15 min read' },
              { title: 'Using foneAPI with Next.js 14 App Router', tag: 'Tutorial', readTime: '6 min read' },
              { title: 'The Future of Business Messaging', tag: 'Industry', readTime: '5 min read' },
            ].map(post => (
              <a key={post.title} href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} style={{ display: 'block', padding: 32, background: '#fff', borderRadius: 24, border: '1px solid rgba(7,17,39,.1)', boxShadow: '0 14px 44px rgba(22,34,69,.06)', transition: 'transform .2s' }} className="post-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: '#4577ff', textTransform: 'uppercase', letterSpacing: '.05em' }}>{post.tag}</span>
                  <span style={{ fontSize: 13, color: '#9ba8cf' }}>{post.readTime}</span>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: '#071127', marginBottom: 16, lineHeight: 1.4 }}>{post.title}</h3>
                <span style={{ color: '#071127', fontWeight: 700 }}>Read article →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
      <style>{`
        .post-card:hover { transform: translateY(-4px); border-color: rgba(69,119,255,.4); }
      `}</style>
    </>
  )
}
