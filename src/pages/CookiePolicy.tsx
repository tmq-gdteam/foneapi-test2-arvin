import { useEffect } from 'react'

export default function CookiePolicy() {
  useEffect(() => {
    document.title = 'Cookie Policy | foneAPI'
  }, [])

  return (
    <div style={{ background: '#f7fbff', color: '#071127', minHeight: '100vh', padding: '120px 0' }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <h1 className="text-display" style={{ marginBottom: 16 }}>Cookie Policy</h1>
        <p style={{ color: '#4b5a7a', marginBottom: 40 }}>Last updated: May 13, 2026</p>
        
        <div style={{ fontSize: 18, lineHeight: 1.8 }}>
          <p style={{ marginBottom: 24 }}>
            This Cookie Policy explains how foneAPI uses cookies and similar technologies to recognize you when you visit our website.
          </p>
          <h2 style={{ fontSize: 24, fontWeight: 800, marginTop: 40, marginBottom: 16 }}>What are cookies?</h2>
          <p style={{ marginBottom: 24 }}>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
        </div>
      </div>
    </div>
  )
}
