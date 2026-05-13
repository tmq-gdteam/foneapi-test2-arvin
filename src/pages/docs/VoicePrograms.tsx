import { useEffect } from 'react'

export default function VoicePrograms() {
  useEffect(() => {
    document.title = 'Voice Programs | foneAPI'
  }, [])

  return (
    <div style={{ color: '#edf3ff', maxWidth: 800 }}>
      <h1 className="text-display" style={{ marginBottom: 24 }}>Voice Programs</h1>
      <p style={{ color: '#9ba8cf', fontSize: 18, lineHeight: 1.6, marginBottom: 40 }}>
        Build complex voice workflows using our pre-built Voice Programs and advanced routing algorithms.
      </p>
      
      <div style={{ padding: 24, background: 'rgba(255,255,255,.05)', borderRadius: 16, border: '1px solid rgba(255,255,255,.1)' }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16 }}>Available Programs</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16, color: '#9ba8cf' }}>
          <li>✓ Skills-based Routing</li>
          <li>✓ Geo-routing</li>
          <li>✓ Automatic Failover</li>
          <li>✓ Call Queuing</li>
        </ul>
      </div>
    </div>
  )
}
