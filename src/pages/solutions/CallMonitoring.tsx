import { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import FeatureGrid from '../../components/FeatureGrid'
import CodeSnippet from '../../components/CodeSnippet'
import CTABand from '../../components/CTABand'

export default function CallMonitoring() {
  useEffect(() => {
    document.title = 'Call Monitoring | foneAPI'
  }, [])

  return (
    <>
      <PageHero
        title="Call Monitoring."
        subtitle="Track, record, and review calls to improve agent performance and ensure quality assurance."
      />
      <section style={{ padding: '80px 0', background: '#f7fbff', color: '#071127' }}>
        <div className="container">
          <FeatureGrid features={[
            { icon: '🎧', title: 'Live Listening', desc: 'Managers can listen to live calls without the customer knowing.' },
            { icon: '🔴', title: 'Call Recording', desc: 'Securely record calls for compliance and training purposes.' },
            { icon: '🗣️', title: 'Whisper Mode', desc: 'Coach agents live during a call without the customer hearing.' },
          ]} />
        </div>
      </section>
      <section style={{ padding: '80px 0', background: '#050818', color: '#edf3ff' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 60, alignItems: 'center' }}>
          <div>
             <h2 className="text-heading-lg" style={{ marginBottom: 24 }}>How it works</h2>
             <ol style={{ paddingLeft: 20, color: '#9ba8cf', fontSize: 18, lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: 16 }}>
               <li>An active call is established via foneAPI.</li>
               <li>A supervisor uses your dashboard to monitor the call.</li>
               <li>foneAPI connects the supervisor to the existing conference via API.</li>
               <li>The supervisor can listen, whisper, or barge in.</li>
             </ol>
          </div>
          <CodeSnippet 
            language="TwiML" 
            code={`<Response>\n  <Dial>\n    <Conference beep="false">\n      SupportQueue123\n    </Conference>\n  </Dial>\n</Response>`}
          />
        </div>
      </section>
      <CTABand />
    </>
  )
}
