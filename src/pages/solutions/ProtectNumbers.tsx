import { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import FeatureGrid from '../../components/FeatureGrid'
import CodeSnippet from '../../components/CodeSnippet'
import CTABand from '../../components/CTABand'

export default function ProtectNumbers() {
  useEffect(() => {
    document.title = 'Protect Phone Numbers | foneAPI'
  }, [])

  return (
    <>
      <PageHero
        title="Protect Phone Numbers."
        subtitle="Safeguard user identity by masking phone numbers during transactions, deliveries, and ride-shares."
      />
      <section style={{ padding: '80px 0', background: '#f7fbff', color: '#071127' }}>
        <div className="container">
          <FeatureGrid features={[
            { icon: '🎭', title: 'Number Masking', desc: 'Connect two parties using a proxy foneAPI number.' },
            { icon: '⏱️', title: 'Time-Limited Sessions', desc: 'Proxy numbers expire automatically after the transaction is complete.' },
            { icon: '📊', title: 'Centralized Logging', desc: 'Track all communication securely on your own servers.' },
          ]} />
        </div>
      </section>
      <section style={{ padding: '80px 0', background: '#050818', color: '#edf3ff' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 60, alignItems: 'center' }}>
          <div>
             <h2 className="text-heading-lg" style={{ marginBottom: 24 }}>How it works</h2>
             <ol style={{ paddingLeft: 20, color: '#9ba8cf', fontSize: 18, lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: 16 }}>
               <li>Driver needs to call the passenger.</li>
               <li>Driver calls a proxy foneAPI number.</li>
               <li>foneAPI looks up the active ride and finds the passenger\'s real number.</li>
               <li>foneAPI dials the passenger and connects the call. Neither party sees the real number.</li>
             </ol>
          </div>
          <CodeSnippet 
            language="Node.js" 
            code={`// Webhook handler for incoming proxy call\napp.post('/proxy', (req, res) => {\n  const twiml = new VoiceResponse();\n  const passengerNumber = lookupActiveRide(req.body.From);\n  \n  twiml.dial(passengerNumber);\n  res.type('text/xml').send(twiml.toString());\n});`}
          />
        </div>
      </section>
      <CTABand />
    </>
  )
}
