import { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import FeatureGrid from '../../components/FeatureGrid'
import CodeSnippet from '../../components/CodeSnippet'
import CTABand from '../../components/CTABand'

export default function SocialNetwork() {
  useEffect(() => {
    document.title = 'Social Network API | foneAPI'
  }, [])

  return (
    <>
      <PageHero
        title="Unified"
        highlight="Social API."
        subtitle="Connect with users on their favorite social platforms—WhatsApp, Facebook Messenger, and more—through a single API."
        accentColor="#2474ff"
        ctaText="Start building with Social"
      />
      <section style={{ padding: '80px 0', background: '#f7fbff', color: '#071127' }}>
        <div className="container">
          <FeatureGrid features={[
            { icon: '📱', title: 'WhatsApp Business', desc: 'Send notifications and handle customer support natively in WhatsApp.', tone: '#2474ff' },
            { icon: '💬', title: 'FB Messenger', desc: 'Automate interactions and build rich experiences on Messenger.', tone: '#2474ff' },
            { icon: '🔄', title: 'Unified Inbox', desc: 'Handle messages from SMS, WhatsApp, and social in one session object.', tone: '#2474ff' },
            { icon: '🖼️', title: 'Rich Media', desc: 'Send images, audio, video, and location data natively.', tone: '#2474ff' },
            { icon: '📝', title: 'Quick Replies', desc: 'Build interactive flows with buttons and quick replies.', tone: '#2474ff' },
            { icon: '🔒', title: 'Compliant Routing', desc: 'Automatically handle opt-ins and platform-specific messaging rules.', tone: '#2474ff' },
          ]} />
        </div>
      </section>
      <section style={{ padding: '80px 0', background: '#050818', color: '#edf3ff' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 60, alignItems: 'center' }}>
          <div>
            <h2 className="text-heading-lg" style={{ marginBottom: 24 }}>One API. Every channel.</h2>
            <p style={{ color: '#9ba8cf', fontSize: 18, lineHeight: 1.6, marginBottom: 32 }}>Don't write custom integration code for every new messaging app. Use our Conversations API to abstract the differences.</p>
            <div style={{ padding: 24, background: 'rgba(255,255,255,.05)', borderRadius: 16, border: '1px solid rgba(255,255,255,.1)' }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: '#2474ff', marginBottom: 8 }}>$0.005</div>
              <div style={{ color: '#9ba8cf' }}>per social message sent</div>
              <a href="/pricing" style={{ color: '#4577ff', fontWeight: 700, display: 'inline-block', marginTop: 16 }}>View full pricing →</a>
            </div>
          </div>
          <CodeSnippet 
            language="Python" 
            code={`from foneapi.rest import Client\n\nclient = Client(account_sid, auth_token)\n\nmessage = client.messages.create(\n    from_='whatsapp:+14155238886',\n    body='Your appointment is confirmed.',\n    to='whatsapp:+15005550006'\n)\n\nprint(message.sid)`}
          />
        </div>
      </section>
      <CTABand />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "foneAPI Social Network API"
        })}
      </script>
    </>
  )
}
