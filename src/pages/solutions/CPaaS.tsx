import { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import FeatureGrid from '../../components/FeatureGrid'
import CTABand from '../../components/CTABand'

export default function CPaaS() {
  useEffect(() => {
    document.title = 'CPaaS Powered API | foneAPI'
  }, [])

  return (
    <>
      <PageHero
        title="CPaaS Powered"
        highlight="API."
        subtitle="Communications Platform as a Service built for enterprise scale, security, and reliability."
      />
      <section style={{ padding: '80px 0', background: '#f7fbff', color: '#071127' }}>
        <div className="container">
          <FeatureGrid features={[
            { icon: '🌐', title: 'Global Carrier Network', desc: 'Direct interconnects with tier-1 carriers worldwide to bypass aggregators.' },
            { icon: '🛡️', title: 'Enterprise Security', desc: 'End-to-end encryption, SOC 2 Type II compliance, and robust access controls.' },
            { icon: '⚡', title: 'High Throughput', desc: 'Sustained throughput of thousands of messages and calls per second.' },
            { icon: '📊', title: 'Advanced Analytics', desc: 'Real-time observability into delivery rates, latency, and carrier performance.' },
          ]} columns={2} />
        </div>
      </section>
      <CTABand />
    </>
  )
}
