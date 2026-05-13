import { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import FeatureGrid from '../../components/FeatureGrid'
import CodeSnippet from '../../components/CodeSnippet'
import CTABand from '../../components/CTABand'

export default function LeadAlerts() {
  useEffect(() => {
    document.title = 'Lead Alerts | foneAPI'
  }, [])

  return (
    <>
      <PageHero
        title="Lead Alerts."
        subtitle="Never miss an opportunity. Instantly notify your sales team via SMS or Voice when a new lead arrives."
      />
      <section style={{ padding: '80px 0', background: '#f7fbff', color: '#071127' }}>
        <div className="container">
          <FeatureGrid features={[
            { icon: '⚡', title: 'Instant Notification', desc: 'Alert sales reps the second a form is submitted.' },
            { icon: '🔄', title: 'Smart Routing', desc: 'Route alerts based on territory, availability, or skill.' },
            { icon: '📊', title: 'Response Tracking', desc: 'Measure how quickly your team responds to new leads.' },
          ]} />
        </div>
      </section>
      <section style={{ padding: '80px 0', background: '#050818', color: '#edf3ff' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 60, alignItems: 'center' }}>
          <div>
             <h2 className="text-heading-lg" style={{ marginBottom: 24 }}>How it works</h2>
             <ol style={{ paddingLeft: 20, color: '#9ba8cf', fontSize: 18, lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: 16 }}>
               <li>A prospect submits a web form.</li>
               <li>Your server processes the lead and triggers foneAPI.</li>
               <li>foneAPI sends an SMS alert to the assigned rep.</li>
               <li>The rep can tap the number to call the lead immediately.</li>
             </ol>
          </div>
          <CodeSnippet 
            language="Python" 
            code={`message = client.messages.create(\n    body="New Lead: John Doe. Call now: +15551234567",\n    from_='+15017122661',\n    to=sales_rep_number\n)`}
          />
        </div>
      </section>
      <CTABand />
    </>
  )
}
