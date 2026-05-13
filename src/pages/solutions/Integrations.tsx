import { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import CTABand from '../../components/CTABand'

export default function Integrations() {
  useEffect(() => {
    document.title = 'Integrations | foneAPI'
  }, [])

  return (
    <>
      <PageHero
        title="Seamless"
        highlight="Integrations."
        subtitle="Connect foneAPI with the tools your team already uses. No code required."
      />
      <section style={{ padding: '80px 0', background: '#f7fbff', color: '#071127' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            {['Salesforce', 'HubSpot', 'Zendesk', 'Shopify', 'Slack', 'Microsoft Teams', 'Segment', 'Zapier'].map(integration => (
              <div key={integration} style={{ padding: 32, background: '#fff', borderRadius: 16, border: '1px solid rgba(7,17,39,.1)', textAlign: 'center', boxShadow: '0 8px 24px rgba(22,34,69,.04)' }}>
                <div style={{ width: 64, height: 64, background: 'linear-gradient(135deg, #e2e8f0, #cbd5e1)', borderRadius: 16, margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: 18, fontWeight: 800 }}>{integration}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  )
}
