import { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import FeatureGrid from '../../components/FeatureGrid'
import CTABand from '../../components/CTABand'

export default function VoiceInsight() {
  useEffect(() => {
    document.title = 'Voice Insight | foneAPI'
  }, [])

  return (
    <>
      <PageHero
        title="Voice"
        highlight="Insight."
        subtitle="Deep analytics and observability for your voice traffic. Monitor call quality and carrier performance in real time."
      />
      <section style={{ padding: '80px 0', background: '#f7fbff', color: '#071127' }}>
        <div className="container">
          <FeatureGrid features={[
            { icon: '📊', title: 'Real-time Dashboards', desc: 'Visualize call volumes, completion rates, and MOS scores instantly.' },
            { icon: '🔍', title: 'Granular Debugging', desc: 'Drill down into individual call SIP traces to identify network issues.' },
            { icon: '⚠️', title: 'Proactive Alerts', desc: 'Set thresholds for jitter or packet loss to get alerted before users complain.' },
          ]} />
        </div>
      </section>
      <CTABand />
    </>
  )
}
