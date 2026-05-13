import { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import FeatureGrid from '../../components/FeatureGrid'
import CodeSnippet from '../../components/CodeSnippet'
import CTABand from '../../components/CTABand'

export default function ClickToCall() {
  useEffect(() => {
    document.title = 'Click-to-Call | foneAPI'
  }, [])

  return (
    <>
      <PageHero
        title="Click-to-Call."
        subtitle="Turn website visitors into connected conversations instantly by adding a simple call button to your site."
      />
      <section style={{ padding: '80px 0', background: '#f7fbff', color: '#071127' }}>
        <div className="container">
          <FeatureGrid features={[
            { icon: '📞', title: 'Instant Connection', desc: 'Connect customers to agents without them dialing a number.' },
            { icon: '🌍', title: 'Global Coverage', desc: 'Route calls to agents anywhere in the world.' },
            { icon: '🔒', title: 'Privacy Protection', desc: 'Keep agent and customer phone numbers completely private.' },
          ]} />
        </div>
      </section>
      <section style={{ padding: '80px 0', background: '#050818', color: '#edf3ff' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 60, alignItems: 'center' }}>
          <div>
             <h2 className="text-heading-lg" style={{ marginBottom: 24 }}>How it works</h2>
             <ol style={{ paddingLeft: 20, color: '#9ba8cf', fontSize: 18, lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: 16 }}>
               <li>Customer clicks a button on your website.</li>
               <li>Your server makes an API request to foneAPI.</li>
               <li>foneAPI calls your agent's phone.</li>
               <li>Once the agent answers, foneAPI connects the call to the customer.</li>
             </ol>
          </div>
          <CodeSnippet 
            language="Node.js" 
            code={`client.voice.calls.create({\n  to: agentNumber,\n  from: foneapiNumber,\n  twiml: \`<Response><Dial>\${customerNumber}</Dial></Response>\`\n});`}
          />
        </div>
      </section>
      <CTABand />
    </>
  )
}
