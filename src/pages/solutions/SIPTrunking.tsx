import { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import FeatureGrid from '../../components/FeatureGrid'
import CTABand from '../../components/CTABand'

export default function SIPTrunking() {
  useEffect(() => {
    document.title = 'SIP Trunking | foneAPI'
  }, [])

  return (
    <>
      <PageHero
        title="Elastic"
        highlight="SIP Trunking."
        subtitle="Connect your existing IP-PBX to our global carrier network in minutes. Unlimited capacity, pay-as-you-go pricing."
      />
      <section style={{ padding: '80px 0', background: '#f7fbff', color: '#071127' }}>
        <div className="container">
          <FeatureGrid features={[
            { icon: '📈', title: 'Instant Scaling', desc: 'No more channel limits. Scale capacity up or down automatically.' },
            { icon: '🌍', title: 'Global Reach', desc: 'Local, national, toll-free, and mobile numbers in 100+ countries.' },
            { icon: '🛡️', title: 'Disaster Recovery', desc: 'Automatic failover routing if your primary PBX goes offline.' },
          ]} />
        </div>
      </section>
      <CTABand />
    </>
  )
}
