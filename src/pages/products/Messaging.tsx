import { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import FeatureGrid from '../../components/FeatureGrid'
import CodeSnippet from '../../components/CodeSnippet'
import CTABand from '../../components/CTABand'

export default function Messaging() {
  useEffect(() => {
    document.title = 'Messaging API | foneAPI'
  }, [])

  return (
    <>
      <PageHero
        title="Reliable"
        highlight="Messaging API."
        subtitle="Send SMS, MMS, and WhatsApp messages globally with high deliverability rates."
        accentColor="#48b956"
        ctaText="Start building with Messaging"
      />
      <section style={{ padding: '80px 0', background: '#f7fbff', color: '#071127' }}>
        <div className="container">
          <FeatureGrid features={[
            { icon: '📱', title: 'SMS & MMS', desc: 'Send text and rich media messages to virtually any mobile phone.', tone: '#48b956' },
            { icon: '🌍', title: 'Global Deliverability', desc: 'Smart routing ensures your messages arrive on time, everywhere.', tone: '#48b956' },
            { icon: '💬', title: 'Conversational', desc: 'Maintain session state for seamless two-way chat experiences.', tone: '#48b956' },
            { icon: '📋', title: 'Alphanumeric Sender ID', desc: 'Send messages using your brand name instead of a phone number.', tone: '#48b956' },
            { icon: '📈', title: 'Delivery Insights', desc: 'Real-time webhooks and analytics for message status.', tone: '#48b956' },
            { icon: '🛡️', title: 'Opt-out Management', desc: 'Automatic handling of STOP requests for compliance.', tone: '#48b956' },
          ]} />
        </div>
      </section>
      <section style={{ padding: '80px 0', background: '#050818', color: '#edf3ff' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 60, alignItems: 'center' }}>
          <div>
            <h2 className="text-heading-lg" style={{ marginBottom: 24 }}>Reach your users instantly.</h2>
            <p style={{ color: '#9ba8cf', fontSize: 18, lineHeight: 1.6, marginBottom: 32 }}>From simple alerts to complex two-way conversations, our Messaging API is built for scale.</p>
            <div style={{ padding: 24, background: 'rgba(255,255,255,.05)', borderRadius: 16, border: '1px solid rgba(255,255,255,.1)' }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: '#48b956', marginBottom: 8 }}>$0.0075</div>
              <div style={{ color: '#9ba8cf' }}>per message to send</div>
              <a href="/pricing" style={{ color: '#4577ff', fontWeight: 700, display: 'inline-block', marginTop: 16 }}>View full pricing →</a>
            </div>
          </div>
          <CodeSnippet 
            language="Python" 
            code={`import os\nfrom foneapi.rest import Client\n\naccount_sid = os.environ['FONEAPI_ACCOUNT_SID']\nauth_token = os.environ['FONEAPI_AUTH_TOKEN']\nclient = Client(account_sid, auth_token)\n\nmessage = client.messages.create(\n    body="Your package has shipped!",\n    from_='+15017122661',\n    to='+15558675310'\n)\n\nprint(message.sid)`}
          />
        </div>
      </section>
      <CTABand />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "foneAPI Messaging API"
        })}
      </script>
    </>
  )
}
