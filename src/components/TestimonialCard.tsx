export default function TestimonialCard({ quote, author, role, company, avatarUrl }: { quote: string, author: string, role: string, company: string, avatarUrl?: string }) {
  return (
    <article style={{ padding: 32, borderRadius: 24, border: '1px solid rgba(7,17,39,.1)', background: '#fff', boxShadow: '0 14px 44px rgba(22,34,69,.06)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ color: '#ffb36c', fontSize: 24, marginBottom: 16 }}>★★★★★</div>
      <blockquote style={{ margin: 0, fontSize: 18, color: '#071127', lineHeight: 1.6, flex: 1, marginBottom: 24 }}>
        "{quote}"
      </blockquote>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ width: 48, height: 48, borderRadius: '50%', background: avatarUrl ? `url(${avatarUrl}) center/cover` : 'linear-gradient(135deg, #e2e8f0, #cbd5e1)', border: '1px solid rgba(0,0,0,.1)' }} />
        <div>
          <div style={{ fontWeight: 800, color: '#071127', fontSize: 15 }}>{author}</div>
          <div style={{ color: '#4b5a7a', fontSize: 14 }}>{role}, {company}</div>
        </div>
      </div>
    </article>
  )
}
