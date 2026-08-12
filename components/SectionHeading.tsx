interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  dark?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}`}>
      {eyebrow && (
        <p className={`uppercase tracking-[0.2em] text-xs font-medium mb-3 ${dark ? 'text-sand-300' : 'text-forest-600'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl mb-4 ${dark ? 'text-sand-50' : 'text-forest-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed ${dark ? 'text-sand-200/80' : 'text-forest-700/70'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}