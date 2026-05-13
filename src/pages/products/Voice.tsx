import { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import FeatureGrid from '../../components/FeatureGrid'
import CodeSnippet from '../../components/CodeSnippet'
import CTABand from '../../components/CTABand'

export default function Voice() {
  useEffect(() => {
    document.title = 'Voice API | foneAPI'
  }, [])

  return (
    <>
      <PageHero
        title="Crystal clear"
        highlight="Voice API."
        subtitle="Make, receive, and control calls worldwide using a few lines of code. Built on a globally distributed carrier network."
        accentColor="#ff4f61"
        ctaText="Start building with Voice"
      />
      <section style={{ padding: '80px 0', background: '#f7fbff', color: '#071127' }}>
        <div className="container">
          <FeatureGrid features={[
            { icon: '☎', title: 'Global Connectivity', desc: 'Reach any phone number in over 100 countries instantly.', tone: '#ff4f61' },
            { icon: '🎤', title: 'High-Quality Audio', desc: 'Opus codec support and intelligent routing for crystal clear audio.', tone: '#ff4f61' },
            { icon: '🤖', title: 'Interactive Voice Response', desc: 'Build dynamic IVR menus with our intuitive TwiML-compatible API.', tone: '#ff4f61' },
            { icon: '🔴', title: 'Call Recording', desc: 'Securely record, store, and transcribe calls for quality assurance.', tone: '#ff4f61' },
            { icon: '⚡', title: 'WebRTC Ready', desc: 'Embed voice calls directly into your web and mobile applications.', tone: '#ff4f61' },
            { icon: '🛡️', title: 'Call Masking', desc: 'Protect user privacy by anonymizing phone numbers on both ends.', tone: '#ff4f61' },
          ]} />
        </div>
      </section>
      <section style={{ padding: '80px 0', background: '#050818', color: '#edf3ff' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 60, alignItems: 'center' }}>
          <div>
            <h2 className="text-heading-lg" style={{ marginBottom: 24 }}>Incredibly simple to integrate.</h2>
            <p style={{ color: '#9ba8cf', fontSize: 18, lineHeight: 1.6, marginBottom: 32 }}>Our Voice API is designed by developers, for developers. Get your first call running in under 5 minutes with our comprehensive SDKs.</p>
            <div style={{ padding: 24, background: 'rgba(255,255,255,.05)', borderRadius: 16, border: '1px solid rgba(255,255,255,.1)' }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: '#ff4f61', marginBottom: 8 }}>$0.008</div>
              <div style={{ color: '#9ba8cf' }}>per minute to make calls</div>
              <a href="/pricing" style={{ color: '#4577ff', fontWeight: 700, display: 'inline-block', marginTop: 16 }}>View full pricing →</a>
            </div>
          </div>
          <CodeSnippet 
            language="Node.js" 
            code={`import { FoneAPI } from 'foneapi';\n\nconst client = new FoneAPI('YOUR_API_KEY');\n\nclient.voice.calls.create({\n  to: '+15558675310',\n  from: '+15017122661',\n  twiml: '<Response><Say>Hello from foneAPI!</Say></Response>'\n})\n.then(call => console.log(call.sid));`}
          />
        </div>
      </section>
      <CTABand />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "foneAPI Voice API"
        })}
      </script>
    </>
  )
}
