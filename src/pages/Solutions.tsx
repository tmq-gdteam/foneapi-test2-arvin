import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

export default function Solutions() {
  useEffect(() => {
    document.title = 'Solutions Hub | foneAPI'
  }, [])

  return (
    <>
      <PageHero
        title="Built for real-world business"
        highlight="outcomes"
        subtitle="Discover how foneAPI powers the communication workflows that matter most to your industry."
        accentColor="linear-gradient(90deg, #ff8d5d, #b45cff)"
      />
      <section style={{ padding: '80px 0', background: '#050818', color: '#edf3ff' }}>
        <div className="container">
          <SectionHeading eyebrow="By Use Case" title="Solve your hardest challenges" eyebrowColor="#31f1f4" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {[
              { title: 'Click-to-Call', desc: 'Turn website visitors into connected conversations.', href: '/solutions/click-to-call' },
              { title: 'Call Monitoring', desc: 'Track and review calls to improve performance.', href: '/solutions/call-monitoring' },
              { title: 'Lead Alerts', desc: 'Instant alerts so your team never misses an opportunity.', href: '/solutions/lead-alerts' },
              { title: 'Appointment Reminders', desc: 'Reduce no-shows with automated reminders.', href: '/solutions/appointment-reminders' },
              { title: 'Protect Phone Numbers', desc: 'Mask numbers and safeguard user identity.', href: '/solutions/protect-numbers' },
              { title: '1-2 Verification', desc: 'Verify users with OTP, 2FA, and secure flows.', href: '/solutions/verification' },
            ].map(sol => (
              <a key={sol.title} href={sol.href} style={{ padding: 32, borderRadius: 16, background: 'linear-gradient(180deg, rgba(255,255,255,.12), rgba(255,255,255,.04))', border: '1px solid rgba(255,255,255,.1)', transition: 'transform .2s' }} className="sol-card">
                <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>{sol.title}</h3>
                <p style={{ color: '#9ba8cf', margin: 0 }}>{sol.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: '80px 0', background: '#f7fbff', color: '#071127' }}>
        <div className="container">
          <SectionHeading eyebrow="By Industry" title="Tailored for your vertical" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
            {['Healthcare', 'Finance', 'E-commerce', 'Logistics'].map(ind => (
              <div key={ind} style={{ padding: 40, borderRadius: 16, background: '#fff', border: '1px solid rgba(7,17,39,.1)', textAlign: 'center', boxShadow: '0 14px 44px rgba(22,34,69,.08)' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(69,119,255,.1)', margin: '0 auto 20px', display: 'grid', placeItems: 'center', fontSize: 24 }}>🏢</div>
                <h3 style={{ fontSize: 18, fontWeight: 800 }}>{ind}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        .sol-card:hover { transform: translateY(-4px); border-color: rgba(49,241,244,.4); }
      `}</style>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "foneAPI Solutions"
        })}
      </script>
    </>
  )
}
