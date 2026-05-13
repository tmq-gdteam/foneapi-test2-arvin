
import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

export default function Product() {
  useEffect(() => {
    document.title = 'Product Overview | foneAPI'
  }, [])

  return (
    <>
      <PageHero
        title="One platform."
        highlight="Every channel."
        subtitle="APIs that plug in easily and scale reliably, so you can build the experiences your customers love."
      />
      <section style={{ padding: '80px 0', background: '#f7fbff', color: '#071127' }}>
        <div className="container">
          <SectionHeading eyebrow="Capabilities" title="Explore our communication APIs" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {['Voice', 'Video', 'Messaging', 'Email', 'Security', 'Social', 'Fax', 'Cognitive'].map(cap => (
              <div key={cap} style={{ padding: 32, background: '#fff', borderRadius: 16, border: '1px solid rgba(7,17,39,.1)', boxShadow: '0 14px 44px rgba(22,34,69,.08)' }}>
                <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>{cap} API</h3>
                <p style={{ color: '#4b5a7a', lineHeight: 1.6, marginBottom: 24 }}>Integrate scalable {cap.toLowerCase()} capabilities directly into your applications with just a few lines of code.</p>
                <a href={`/products/${cap.toLowerCase()}`} style={{ color: '#4577ff', fontWeight: 700 }}>Explore {cap} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: '80px 0', background: '#050818', color: '#edf3ff' }}>
        <div className="container">
           <SectionHeading eyebrow="How it works" title="Build faster with our robust platform" eyebrowColor="#ffb36c" />
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, textAlign: 'center' }} className="step-grid">
              {[
                { step: '01', title: 'Connect', desc: 'Use our REST APIs or SDKs to connect your app.' },
                { step: '02', title: 'Build', desc: 'Design workflows and logic with complete flexibility.' },
                { step: '03', title: 'Scale', desc: 'Deploy globally on our enterprise-grade network.' },
              ].map(s => (
                <div key={s.step} style={{ padding: 24 }}>
                  <div style={{ fontSize: 48, fontWeight: 900, color: 'rgba(255,255,255,.1)', marginBottom: 16 }}>{s.step}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ color: '#9ba8cf' }}>{s.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 768px) {
          .step-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "foneAPI Platform",
          "applicationCategory": "CommunicationsApplication"
        })}
      </script>
    </>
  )
}
