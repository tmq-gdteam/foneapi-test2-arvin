import { useEffect } from 'react'
import CTABand from '../components/CTABand'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found | foneAPI'
  }, [])

  return (
    <>
      <div style={{ padding: '160px 20px', textAlign: 'center', background: '#050818', color: '#edf3ff', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 className="text-display" style={{ fontSize: 'clamp(64px, 10vw, 120px)', color: 'transparent', WebkitTextStroke: '2px rgba(255,255,255,.1)', marginBottom: 24 }}>404</h1>
        <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 16 }}>Route not found</h2>
        <p style={{ color: '#9ba8cf', fontSize: 18, marginBottom: 40, maxWidth: 400 }}>The page you are looking for doesn't exist or has been moved.</p>
        <a href="/" className="btn btn-gradient">Return to Homepage</a>
      </div>
      <CTABand />
    </>
  )
}
