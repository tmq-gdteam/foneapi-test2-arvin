import { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import FeatureGrid from '../../components/FeatureGrid'
import CTABand from '../../components/CTABand'

export default function FoneInterconnect() {
  useEffect(() => {
    document.title = 'Fone Interconnect | foneAPI'
  }, [])

  return (
    <>
      <PageHero
        title="Fone"
        highlight="Interconnect."
        subtitle="Establish private, dedicated network connections to foneAPI for ultimate security and reliability."
      />
      <section style={{ padding: '80px 0', background: '#f7fbff', color: '#071127' }}>
        <div className="container">
          <FeatureGrid features={[
            { icon: '🔒', title: 'Private Connectivity', desc: 'Bypass the public internet entirely for your voice and messaging traffic.' },
            { icon: '⚡', title: 'Consistent Latency', desc: 'Guarantee network performance with dedicated bandwidth and QoS.' },
            { icon: '🏢', title: 'Cross-Connects', desc: 'Physical and virtual cross-connects available at major data centers globally.' },
          ]} />
        </div>
      </section>
      <CTABand />
    </>
  )
}
