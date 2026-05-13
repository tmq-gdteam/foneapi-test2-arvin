import { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import FeatureGrid from '../../components/FeatureGrid'
import CTABand from '../../components/CTABand'

export default function WebRTC() {
  useEffect(() => {
    document.title = 'WebRTC Gateway | foneAPI'
  }, [])

  return (
    <>
      <PageHero
        title="WebRTC"
        highlight="Gateway."
        subtitle="Bridge the gap between modern browsers and legacy SIP networks effortlessly."
      />
      <section style={{ padding: '80px 0', background: '#f7fbff', color: '#071127' }}>
        <div className="container">
          <FeatureGrid features={[
            { icon: '🌐', title: 'Browser to PSTN', desc: 'Enable users to make outbound phone calls directly from their browser.' },
            { icon: '📱', title: 'SDKs for Everything', desc: 'Native SDKs for iOS, Android, and JavaScript for seamless integration.' },
            { icon: '🔒', title: 'Secure Signaling', desc: 'All signaling and media streams are encrypted by default.' },
          ]} />
        </div>
      </section>
      <CTABand />
    </>
  )
}
