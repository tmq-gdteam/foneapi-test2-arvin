import { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import FeatureGrid from '../../components/FeatureGrid'
import CodeSnippet from '../../components/CodeSnippet'
import CTABand from '../../components/CTABand'

export default function CognitiveAutomation() {
  useEffect(() => {
    document.title = 'Cognitive Automation | foneAPI'
  }, [])

  return (
    <>
      <PageHero
        title="AI-Powered"
        highlight="Automation."
        subtitle="Build intelligent conversational agents and automate complex communication workflows with our cognitive tools."
        accentColor="#ff5fc6"
        ctaText="Start building with AI"
      />
      <section style={{ padding: '80px 0', background: '#f7fbff', color: '#071127' }}>
        <div className="container">
          <FeatureGrid features={[
            { icon: '🧠', title: 'Natural Language', desc: 'Understand intent and entities in voice and text messages instantly.', tone: '#ff5fc6' },
            { icon: '🤖', title: 'Bot Builder', desc: 'Visual drag-and-drop studio to build complex conversational flows.', tone: '#ff5fc6' },
            { icon: '🗣️', title: 'Advanced TTS', desc: 'Neural text-to-speech with customizable lifelike voices and emotion.', tone: '#ff5fc6' },
            { icon: '🎧', title: 'Speech Recognition', desc: 'Real-time transcription with high accuracy across 120 languages.', tone: '#ff5fc6' },
            { icon: '🔍', title: 'Sentiment Analysis', desc: 'Automatically flag negative interactions for human intervention.', tone: '#ff5fc6' },
            { icon: '🔄', title: 'Human Handoff', desc: 'Seamlessly transfer context from bot to agent when needed.', tone: '#ff5fc6' },
          ]} />
        </div>
      </section>
      <section style={{ padding: '80px 0', background: '#050818', color: '#edf3ff' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 60, alignItems: 'center' }}>
          <div>
            <h2 className="text-heading-lg" style={{ marginBottom: 24 }}>Make your communications smarter.</h2>
            <p style={{ color: '#9ba8cf', fontSize: 18, lineHeight: 1.6, marginBottom: 32 }}>Deflect simple queries, qualify leads, and route calls intelligently without writing complex ML models.</p>
            <div style={{ padding: 24, background: 'rgba(255,255,255,.05)', borderRadius: 16, border: '1px solid rgba(255,255,255,.1)' }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: '#ff5fc6', marginBottom: 8 }}>$0.02</div>
              <div style={{ color: '#9ba8cf' }}>per cognitive request</div>
              <a href="/pricing" style={{ color: '#4577ff', fontWeight: 700, display: 'inline-block', marginTop: 16 }}>View full pricing →</a>
            </div>
          </div>
          <CodeSnippet 
            language="JSON (TwiML)" 
            code={`<Response>\n  <Gather input="speech" action="/completed">\n    <Say voice="Polly.Joanna-Neural">\n      How can I help you today?\n    </Say>\n  </Gather>\n</Response>`}
          />
        </div>
      </section>
      <CTABand />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "foneAPI Cognitive Automation"
        })}
      </script>
    </>
  )
}
