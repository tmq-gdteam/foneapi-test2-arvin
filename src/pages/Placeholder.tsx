export default function Placeholder({ title }: { title: string }) {
  return (
    <div style={{ padding: '120px 20px', textAlign: 'center', minHeight: '60vh', color: '#edf3ff' }}>
      <h1>{title}</h1>
      <p style={{ color: '#9ba8cf' }}>This page is currently being built.</p>
    </div>
  )
}
