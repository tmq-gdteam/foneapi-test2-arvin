export default function SectionHeading({ eyebrow, title, highlight, subtitle, eyebrowColor = '#4577ff', highlightColor = '#8b5cf6', dark = false }: { eyebrow?: string, title: string, highlight?: string, subtitle?: string, eyebrowColor?: string, highlightColor?: string, dark?: boolean }) {
  return (
    <div style={{ marginBottom: 44 }}>
      {eyebrow && <p className="text-eyebrow" style={{ color: eyebrowColor, marginBottom: 12 }}>{eyebrow}</p>}
      <h2 className="text-heading-xl" style={{ margin: 0, maxWidth: 800, color: dark ? '#fff' : undefined }}>
        {title} {highlight && <span style={{ color: highlightColor }}>{highlight}</span>}
      </h2>
      {subtitle && (
        <p style={{ marginTop: 16, color: dark ? 'rgba(255,255,255,0.8)' : '#4b5a7a', fontSize: 18, lineHeight: 1.6, maxWidth: 600 }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
