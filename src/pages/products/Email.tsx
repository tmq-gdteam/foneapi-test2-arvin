import { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import FeatureGrid from '../../components/FeatureGrid'
import CodeSnippet from '../../components/CodeSnippet'
import CTABand from '../../components/CTABand'

export default function Email() {
  useEffect(() => {
    document.title = 'Email API | foneAPI'
  }, [])

  return (
    <>
      <PageHero
        title="Scalable"
        highlight="Email API."
        subtitle="Deliver transactional and marketing emails reliably with advanced routing and analytics."
        accentColor="#28bdaa"
        ctaText="Start building with Email"
      />
      <section style={{ padding: '80px 0', background: '#f7fbff', color: '#071127' }}>
        <div className="container">
          <FeatureGrid features={[
            { icon: '✉️', title: 'High Deliverability', desc: 'Dedicated IPs and intelligent routing to hit the inbox, not spam.', tone: '#28bdaa' },
            { icon: '📊', title: 'Deep Analytics', desc: 'Track opens, clicks, bounces, and spam reports in real time.', tone: '#28bdaa' },
            { icon: '🎨', title: 'Template Engine', desc: 'Build and manage dynamic HTML email templates with variables.', tone: '#28bdaa' },
            { icon: '🔒', title: 'Authentication', desc: 'Built-in SPF, DKIM, and DMARC support for sender reputation.', tone: '#28bdaa' },
            { icon: '⚡', title: 'Fast Infrastructure', desc: 'Process millions of emails per hour with negligible latency.', tone: '#28bdaa' },
            { icon: '📥', title: 'Inbound Parsing', desc: 'Receive and parse incoming emails via webhooks.', tone: '#28bdaa' },
          ]} />
        </div>
      </section>
      <section style={{ padding: '80px 0', background: '#050818', color: '#edf3ff' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 60, alignItems: 'center' }}>
          <div>
            <h2 className="text-heading-lg" style={{ marginBottom: 24 }}>Email that just works.</h2>
            <p style={{ color: '#9ba8cf', fontSize: 18, lineHeight: 1.6, marginBottom: 32 }}>Stop worrying about SMTP servers and IP reputation. Let our API handle the complexity of modern email delivery.</p>
            <div style={{ padding: 24, background: 'rgba(255,255,255,.05)', borderRadius: 16, border: '1px solid rgba(255,255,255,.1)' }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: '#28bdaa', marginBottom: 8 }}>Free</div>
              <div style={{ color: '#9ba8cf' }}>for the first 10,000 emails/month</div>
              <a href="/pricing" style={{ color: '#4577ff', fontWeight: 700, display: 'inline-block', marginTop: 16 }}>View full pricing →</a>
            </div>
          </div>
          <CodeSnippet 
            language="cURL" 
            code={`curl -X POST https://api.foneapi.com/v1/email/send \\\n  -H "Authorization: Bearer YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d '{\n    "to": "user@example.com",\n    "from": "hello@yourdomain.com",\n    "subject": "Welcome to our app!",\n    "html": "<strong>Hello World</strong>"\n  }'`}
          />
        </div>
      </section>
      <CTABand />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "foneAPI Email API"
        })}
      </script>
    </>
  )
}
