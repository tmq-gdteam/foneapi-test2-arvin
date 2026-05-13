import { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import FeatureGrid from '../../components/FeatureGrid'
import CodeSnippet from '../../components/CodeSnippet'
import CTABand from '../../components/CTABand'

export default function Video() {
  useEffect(() => {
    document.title = 'Video API | foneAPI'
  }, [])

  return (
    <>
      <PageHero
        title="Immersive"
        highlight="Video API."
        subtitle="Build reliable HD video calling, screensharing, and recording into any application in minutes."
        accentColor="#7f5cff"
        ctaText="Start building with Video"
      />
      <section style={{ padding: '80px 0', background: '#f7fbff', color: '#071127' }}>
        <div className="container">
          <FeatureGrid features={[
            { icon: '📹', title: 'HD Video Quality', desc: 'Adaptive bitrate streaming ensures the best possible quality on any network.', tone: '#7f5cff' },
            { icon: '🖥️', title: 'Screensharing', desc: 'Share screens, tabs, or individual windows natively in browser.', tone: '#7f5cff' },
            { icon: '👥', title: 'Multi-party Rooms', desc: 'Host secure video rooms for up to 50 participants simultaneously.', tone: '#7f5cff' },
            { icon: '🔴', title: 'Cloud Recording', desc: 'Record video calls in the cloud and download them in MP4 format.', tone: '#7f5cff' },
            { icon: '🎨', title: 'Custom Layouts', desc: 'Control exactly how video tracks are displayed in your application.', tone: '#7f5cff' },
            { icon: '🔒', title: 'End-to-End Encryption', desc: 'Enterprise-grade WebRTC encryption for maximum privacy.', tone: '#7f5cff' },
          ]} />
        </div>
      </section>
      <section style={{ padding: '80px 0', background: '#050818', color: '#edf3ff' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 60, alignItems: 'center' }}>
          <div>
            <h2 className="text-heading-lg" style={{ marginBottom: 24 }}>Connect face to face.</h2>
            <p style={{ color: '#9ba8cf', fontSize: 18, lineHeight: 1.6, marginBottom: 32 }}>Our Video SDKs handle the complex WebRTC signaling so you can focus on building great UI.</p>
            <div style={{ padding: 24, background: 'rgba(255,255,255,.05)', borderRadius: 16, border: '1px solid rgba(255,255,255,.1)' }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: '#7f5cff', marginBottom: 8 }}>$0.004</div>
              <div style={{ color: '#9ba8cf' }}>per participant minute</div>
              <a href="/pricing" style={{ color: '#4577ff', fontWeight: 700, display: 'inline-block', marginTop: 16 }}>View full pricing →</a>
            </div>
          </div>
          <CodeSnippet 
            language="JavaScript (Browser)" 
            code={`import { connect } from 'foneapi-video';\n\nconnect('YOUR_ACCESS_TOKEN', { name: 'my-room' })\n  .then(room => {\n    console.log(\`Connected to \${room.name}\`);\n    \n    // Attach local video\n    const localVideo = document.getElementById('local-video');\n    room.localParticipant.tracks.forEach(publication => {\n      localVideo.appendChild(publication.track.attach());\n    });\n  });`}
          />
        </div>
      </section>
      <CTABand />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "foneAPI Video API"
        })}
      </script>
    </>
  )
}
