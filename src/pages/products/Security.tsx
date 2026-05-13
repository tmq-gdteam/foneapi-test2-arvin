import { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import FeatureGrid from '../../components/FeatureGrid'
import CodeSnippet from '../../components/CodeSnippet'
import CTABand from '../../components/CTABand'

export default function Security() {
  useEffect(() => {
    document.title = 'Security API | foneAPI'
  }, [])

  return (
    <>
      <PageHero
        title="Enterprise"
        highlight="Security API."
        subtitle="Protect your users and prevent fraud with global intelligence and identity verification."
        accentColor="#1b9dff"
        ctaText="Start building with Security"
      />
      <section style={{ padding: '80px 0', background: '#f7fbff', color: '#071127' }}>
        <div className="container">
          <FeatureGrid features={[
            { icon: '🛡️', title: 'Fraud Prevention', desc: 'Detect high-risk numbers, VOIP, and suspicious carrier patterns.', tone: '#1b9dff' },
            { icon: '🔑', title: '2FA & OTP', desc: 'Turnkey 2-factor authentication via SMS, voice, and email.', tone: '#1b9dff' },
            { icon: '🕵️', title: 'Number Lookup', desc: 'Get real-time carrier, line type, and geographic data for any number.', tone: '#1b9dff' },
            { icon: '👁️', title: 'SIM Swap Detection', desc: 'Prevent account takeovers by checking if a SIM was recently ported.', tone: '#1b9dff' },
            { icon: '🔒', title: 'Compliance Built-in', desc: 'GDPR, CCPA, and SOC2 compliant infrastructure.', tone: '#1b9dff' },
            { icon: '🤖', title: 'Bot Mitigation', desc: 'Block automated attacks before they reach your communication endpoints.', tone: '#1b9dff' },
          ]} />
        </div>
      </section>
      <section style={{ padding: '80px 0', background: '#050818', color: '#edf3ff' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 60, alignItems: 'center' }}>
          <div>
            <h2 className="text-heading-lg" style={{ marginBottom: 24 }}>Trust your traffic.</h2>
            <p style={{ color: '#9ba8cf', fontSize: 18, lineHeight: 1.6, marginBottom: 32 }}>Build identity verification into your app without dealing with the complexity of global carrier databases.</p>
            <div style={{ padding: 24, background: 'rgba(255,255,255,.05)', borderRadius: 16, border: '1px solid rgba(255,255,255,.1)' }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: '#1b9dff', marginBottom: 8 }}>$0.01</div>
              <div style={{ color: '#9ba8cf' }}>per successful verification</div>
              <a href="/pricing" style={{ color: '#4577ff', fontWeight: 700, display: 'inline-block', marginTop: 16 }}>View full pricing →</a>
            </div>
          </div>
          <CodeSnippet 
            language="PHP" 
            code={`<?php\nrequire __DIR__ . '/vendor/autoload.php';\nuse FoneAPI\\Client;\n\n$client = new Client($sid, $token);\n\n$verification = $client->verify->v2->services("VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")\n                                   ->verifications\n                                   ->create("+15017122661", "sms");\n\nprint($verification->status);`}
          />
        </div>
      </section>
      <CTABand />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "foneAPI Security API"
        })}
      </script>
    </>
  )
}
