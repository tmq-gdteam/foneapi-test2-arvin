import { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import FeatureGrid from '../../components/FeatureGrid'
import CodeSnippet from '../../components/CodeSnippet'
import CTABand from '../../components/CTABand'

export default function Fax() {
  useEffect(() => {
    document.title = 'Fax API | foneAPI'
  }, [])

  return (
    <>
      <PageHero
        title="Modern"
        highlight="Fax API."
        subtitle="Send and receive faxes securely over the cloud. No legacy machines, no phone lines needed."
        accentColor="#ff7d3e"
        ctaText="Start building with Fax"
      />
      <section style={{ padding: '80px 0', background: '#f7fbff', color: '#071127' }}>
        <div className="container">
          <FeatureGrid features={[
            { icon: '📠', title: 'Cloud Native', desc: 'Manage fax infrastructure entirely via REST API without physical hardware.', tone: '#ff7d3e' },
            { icon: '📄', title: 'Format Support', desc: 'Automatically convert PDF, DOCX, TIFF, and images to fax formats.', tone: '#ff7d3e' },
            { icon: '🔒', title: 'HIPAA Compliant', desc: 'Secure transmission and storage built for healthcare and finance.', tone: '#ff7d3e' },
            { icon: '📥', title: 'Inbound Webhooks', desc: 'Receive faxes instantly in your app as PDF attachments.', tone: '#ff7d3e' },
            { icon: '🔄', title: 'Auto-Retry', desc: 'Intelligent queuing and retry logic for busy signals.', tone: '#ff7d3e' },
            { icon: '📊', title: 'Status Tracking', desc: 'Granular status updates from queued to delivered or failed.', tone: '#ff7d3e' },
          ]} />
        </div>
      </section>
      <section style={{ padding: '80px 0', background: '#050818', color: '#edf3ff' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 60, alignItems: 'center' }}>
          <div>
            <h2 className="text-heading-lg" style={{ marginBottom: 24 }}>Fax for the 21st century.</h2>
            <p style={{ color: '#9ba8cf', fontSize: 18, lineHeight: 1.6, marginBottom: 32 }}>Integrate secure document transmission into your digital workflows in minutes.</p>
            <div style={{ padding: 24, background: 'rgba(255,255,255,.05)', borderRadius: 16, border: '1px solid rgba(255,255,255,.1)' }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: '#ff7d3e', marginBottom: 8 }}>$0.015</div>
              <div style={{ color: '#9ba8cf' }}>per page transmitted</div>
              <a href="/pricing" style={{ color: '#4577ff', fontWeight: 700, display: 'inline-block', marginTop: 16 }}>View full pricing →</a>
            </div>
          </div>
          <CodeSnippet 
            language="Node.js" 
            code={`import { FoneAPI } from 'foneapi';\n\nconst client = new FoneAPI('YOUR_API_KEY');\n\nclient.fax.faxes.create({\n  to: '+15558675310',\n  from: '+15017122661',\n  mediaUrl: 'https://example.com/document.pdf'\n})\n.then(fax => console.log(fax.sid));`}
          />
        </div>
      </section>
      <CTABand />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "foneAPI Fax API"
        })}
      </script>
    </>
  )
}
