import { useEffect } from 'react'

export default function SMSPricing() {
  useEffect(() => {
    document.title = 'SMS Pricing | foneAPI'
  }, [])

  return (
    <div style={{ color: '#edf3ff', maxWidth: 800 }}>
      <h1 className="text-display" style={{ marginBottom: 24 }}>SMS Pricing Details</h1>
      <p style={{ color: '#9ba8cf', fontSize: 18, lineHeight: 1.6, marginBottom: 40 }}>
        Comprehensive breakdown of SMS rates by destination country and carrier.
      </p>
      
      <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 16 }}>North America</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', marginBottom: 40 }}>
        <thead>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,.1)' }}>
            <th style={{ padding: '12px 0', color: '#9ba8cf' }}>Country</th>
            <th style={{ padding: '12px 0', color: '#9ba8cf' }}>Outbound (per msg)</th>
            <th style={{ padding: '12px 0', color: '#9ba8cf' }}>Inbound (per msg)</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,.05)' }}>
            <td style={{ padding: '16px 0', fontWeight: 700 }}>United States</td>
            <td style={{ padding: '16px 0', color: '#9ba8cf' }}>$0.0075</td>
            <td style={{ padding: '16px 0', color: '#9ba8cf' }}>$0.0075</td>
          </tr>
          <tr>
            <td style={{ padding: '16px 0', fontWeight: 700 }}>Canada</td>
            <td style={{ padding: '16px 0', color: '#9ba8cf' }}>$0.0075</td>
            <td style={{ padding: '16px 0', color: '#9ba8cf' }}>$0.0075</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
