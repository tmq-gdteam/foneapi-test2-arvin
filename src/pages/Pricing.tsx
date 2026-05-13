import { useEffect, useState } from 'react'
import PageHero from '../components/PageHero'
import PricingCard from '../components/PricingCard'

export default function Pricing() {
  useEffect(() => {
    document.title = 'Pricing | foneAPI'
  }, [])
  const [activeTab, setActiveTab] = useState('Voice')
  const tabs = ['Voice', 'Messaging', 'Email', 'Fax', 'Video', 'Security']

  return (
    <>
      <PageHero
        title="Simple, transparent"
        highlight="pricing."
        subtitle="Pay as you go. No hidden fees. Start with free credits."
        accentColor="linear-gradient(90deg, #31f1f4, #8b5cf6)"
      />
      <section style={{ padding: '80px 0', background: '#f7fbff', color: '#071127' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 12, overflowX: 'auto', marginBottom: 60, paddingBottom: 16 }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setActiveTab(t)} style={{ padding: '12px 24px', borderRadius: 999, border: 'none', background: activeTab === t ? '#050818' : 'rgba(7,17,39,.05)', color: activeTab === t ? '#fff' : '#4b5a7a', fontWeight: 700, cursor: 'pointer', transition: 'background .2s', whiteSpace: 'nowrap' }}>
                {t}
              </button>
            ))}
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
            <PricingCard title="Pay as you go" price="$0.008" unit={`/ ${activeTab.toLowerCase()} API call`} features={['No monthly commitments', 'Volume discounts available', '24/7 Support via email']} />
            <PricingCard title="Volume Tier 1" price="$0.006" unit={`/ ${activeTab.toLowerCase()} API call`} features={['Requires $1000 minimum monthly spend', 'Priority Support', 'Dedicated account manager']} isPopular />
            <PricingCard title="Enterprise" price="Custom" unit="" features={['Custom volume discounts', 'SLA guarantees', 'Premium 24/7 phone support', 'Custom onboarding']} />
          </div>
        </div>
      </section>
      <section style={{ padding: '80px 0', background: '#050818', color: '#edf3ff' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 className="text-heading-lg" style={{ textAlign: 'center', marginBottom: 40 }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              { q: 'Do you charge for inbound calls or messages?', a: 'Pricing for inbound communication varies by region. Check our full rate deck for details.' },
              { q: 'Are there any setup fees?', a: 'No, there are zero setup fees or hidden costs.' },
              { q: 'Can I get volume discounts?', a: 'Yes! Our pricing automatically tiers down as your volume increases.' }
            ].map((faq, i) => (
              <div key={i} style={{ padding: 24, background: 'rgba(255,255,255,.05)', borderRadius: 16, border: '1px solid rgba(255,255,255,.1)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>{faq.q}</h3>
                <p style={{ color: '#9ba8cf', margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "price": "0.008"
        })}
      </script>
    </>
  )
}
