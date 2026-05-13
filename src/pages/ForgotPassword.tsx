import { useEffect } from 'react'

export default function ForgotPassword() {
  useEffect(() => {
    document.title = 'Forgot Password | foneAPI'
  }, [])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f7fbff' }}>
      <div style={{ background: '#fff', padding: 40, borderRadius: 24, border: '1px solid rgba(7,17,39,.1)', boxShadow: '0 24px 80px rgba(22,34,69,.08)', width: '100%', maxWidth: 400 }}>
        <h1 style={{ fontSize: 28, fontWeight: 900, marginBottom: 8, color: '#071127', textAlign: 'center' }}>Reset password</h1>
        <p style={{ color: '#4b5a7a', marginBottom: 32, textAlign: 'center', lineHeight: 1.6 }}>Enter your email address and we'll send you a link to reset your password.</p>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <input type="email" placeholder="Email address" style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid rgba(7,17,39,.2)' }} />
          <button type="button" className="btn btn-gradient" style={{ width: '100%' }}>Send Reset Link</button>
        </form>
        
        <p style={{ textAlign: 'center', marginTop: 24, fontSize: 14, color: '#4b5a7a' }}>
          Remembered it? <a href="/login" style={{ color: '#4577ff', fontWeight: 700 }}>Log in</a>
        </p>
      </div>
    </div>
  )
}
