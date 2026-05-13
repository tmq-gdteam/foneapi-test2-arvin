import { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import FeatureGrid from '../../components/FeatureGrid'
import CodeSnippet from '../../components/CodeSnippet'
import CTABand from '../../components/CTABand'

export default function Verification() {
  useEffect(() => {
    document.title = '1-2 Verification | foneAPI'
  }, [])

  return (
    <>
      <PageHero
        title="1-2 Verification."
        subtitle="Verify users instantly with One-Time Passwords (OTP) and 2-Factor Authentication (2FA) via SMS, Voice, or Email."
      />
      <section style={{ padding: '80px 0', background: '#f7fbff', color: '#071127' }}>
        <div className="container">
          <FeatureGrid features={[
            { icon: '🔑', title: 'Turnkey API', desc: 'Generate and validate codes with a single API. No database required.' },
            { icon: '🌍', title: 'Global Delivery', desc: 'Ensure your verification codes reach users anywhere in the world quickly.' },
            { icon: '🛡️', title: 'Fraud Protection', desc: 'Built-in safeguards against toll fraud and SMS pumping.' },
          ]} />
        </div>
      </section>
      <section style={{ padding: '80px 0', background: '#050818', color: '#edf3ff' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 60, alignItems: 'center' }}>
          <div>
             <h2 className="text-heading-lg" style={{ marginBottom: 24 }}>How it works</h2>
             <ol style={{ paddingLeft: 20, color: '#9ba8cf', fontSize: 18, lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: 16 }}>
               <li>User attempts to log in or register.</li>
               <li>Your app requests a verification code from foneAPI.</li>
               <li>foneAPI generates the code and sends it via SMS.</li>
               <li>User enters the code, and your app validates it with foneAPI.</li>
             </ol>
          </div>
          <CodeSnippet 
            language="Python" 
            code={`# Step 1: Send the code\nverification = client.verify.services('VAXXX').verifications.create(\n    to='+15558675310',\n    channel='sms'\n)\n\n# Step 2: Check the code\ncheck = client.verify.services('VAXXX').verification_checks.create(\n    to='+15558675310',\n    code='123456'\n)\nprint(check.status) # 'approved'`}
          />
        </div>
      </section>
      <CTABand />
    </>
  )
}
