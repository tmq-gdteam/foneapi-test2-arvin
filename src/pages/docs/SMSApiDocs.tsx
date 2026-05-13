import { useEffect } from 'react'

export default function SMSApiDocs() {
  useEffect(() => {
    document.title = 'SMS API Documentation | foneAPI'
  }, [])

  return (
    <div style={{ color: '#edf3ff', maxWidth: 800 }}>
      <h1 className="text-display" style={{ marginBottom: 24 }}>SMS API Reference</h1>
      <p style={{ color: '#9ba8cf', fontSize: 18, lineHeight: 1.6, marginBottom: 40 }}>
        The SMS API allows you to send and receive text messages globally.
      </p>
      
      <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 16 }}>Sending a Message</h2>
      <p style={{ color: '#9ba8cf', lineHeight: 1.6, marginBottom: 24 }}>
        To send an outbound message, make an HTTP POST request to the Messages resource.
      </p>
      
      <div style={{ background: '#081036', padding: 24, borderRadius: 16, border: '1px solid rgba(255,255,255,.1)', fontFamily: 'monospace', marginBottom: 40, whiteSpace: 'pre-wrap', color: '#48b956' }}>
        POST https://api.foneapi.com/v1/Accounts/AC.../Messages
      </div>

      <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16 }}>Required Parameters</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', marginBottom: 40 }}>
        <thead>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,.1)' }}>
            <th style={{ padding: '12px 0', color: '#9ba8cf' }}>Parameter</th>
            <th style={{ padding: '12px 0', color: '#9ba8cf' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,.05)' }}>
            <td style={{ padding: '16px 0', fontWeight: 700 }}>To</td>
            <td style={{ padding: '16px 0', color: '#9ba8cf' }}>The destination phone number.</td>
          </tr>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,.05)' }}>
            <td style={{ padding: '16px 0', fontWeight: 700 }}>From</td>
            <td style={{ padding: '16px 0', color: '#9ba8cf' }}>Your foneAPI number or alphanumeric Sender ID.</td>
          </tr>
          <tr>
            <td style={{ padding: '16px 0', fontWeight: 700 }}>Body</td>
            <td style={{ padding: '16px 0', color: '#9ba8cf' }}>The text of the message you want to send.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
