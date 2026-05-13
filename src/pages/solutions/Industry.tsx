import { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import CTABand from '../../components/CTABand'

export default function Industry() {
  useEffect(() => {
    document.title = 'Solutions by Industry | foneAPI'
  }, [])

  return (
    <>
      <PageHero
        title="Solutions by"
        highlight="Industry."
        subtitle="Discover how different sectors leverage foneAPI to transform their customer communications."
      />
      <section style={{ padding: '80px 0', background: '#f7fbff', color: '#071127' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
          {[
            { title: 'Healthcare', icon: '🏥', desc: 'Secure, HIPAA-compliant messaging and video for telehealth and patient reminders.' },
            { title: 'Finance', icon: '🏦', desc: 'Fraud prevention, 2FA, and secure transaction alerts for banking applications.' },
            { title: 'E-commerce', icon: '🛒', desc: 'Order tracking, delivery notifications, and conversational commerce via SMS and WhatsApp.' },
            { title: 'Logistics', icon: '🚚', desc: 'Driver-to-customer number masking and real-time dispatch alerts.' },
            { title: 'Education', icon: '🎓', desc: 'Virtual classrooms via WebRTC and automated attendance notifications.' },
            { title: 'Retail', icon: '🛍️', desc: 'Curbside pickup alerts and personalized marketing campaigns.' }
          ].map(ind => (
            <div key={ind.title} style={{ padding: 40, background: '#fff', borderRadius: 24, border: '1px solid rgba(7,17,39,.1)', boxShadow: '0 14px 44px rgba(22,34,69,.06)' }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>{ind.icon}</div>
              <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>{ind.title}</h3>
              <p style={{ color: '#4b5a7a', lineHeight: 1.6 }}>{ind.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  )
}
