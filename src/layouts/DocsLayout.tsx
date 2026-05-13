import { Outlet, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function DocsLayout() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <div style={{ display: 'flex', minHeight: '100vh', paddingTop: 80, background: '#050818', color: '#edf3ff' }}>
        <aside style={{ width: 280, padding: 24, borderRight: '1px solid rgba(255,255,255,.1)' }}>
          <h3 style={{ fontSize: 14, color: '#9ba8cf', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 16 }}>Documentation</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <li><Link to="/products/voice/voice-api" style={{ color: '#edf3ff' }}>Voice API</Link></li>
            <li><Link to="/products/messaging/sms-api" style={{ color: '#edf3ff' }}>SMS API</Link></li>
            <li><Link to="/products/messaging/sms-pricing" style={{ color: '#edf3ff' }}>SMS Pricing</Link></li>
            <li><Link to="/products/voice/voice-programs" style={{ color: '#edf3ff' }}>Voice Programs</Link></li>
          </ul>
        </aside>
        <main id="main" style={{ flex: 1, padding: '40px 60px' }}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  )
}
