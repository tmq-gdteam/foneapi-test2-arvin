export default function CodeSnippet({ language, code }: { language: string, code: string }) {
  return (
    <div style={{ background: '#081036', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,.1)', boxShadow: '0 24px 60px rgba(0,0,0,.4)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px', background: 'rgba(0,0,0,.2)', borderBottom: '1px solid rgba(255,255,255,.05)' }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: '#9ba8cf', textTransform: 'uppercase', letterSpacing: '.05em' }}>{language}</span>
        <button style={{ background: 'none', border: 'none', color: '#9ba8cf', cursor: 'pointer', fontSize: 12 }} onClick={() => navigator.clipboard.writeText(code)}>Copy</button>
      </div>
      <pre style={{ margin: 0, padding: 24, overflowX: 'auto', color: '#edf3ff', fontSize: 14, fontFamily: 'monospace', lineHeight: 1.5 }}>
        <code>{code}</code>
      </pre>
    </div>
  )
}
