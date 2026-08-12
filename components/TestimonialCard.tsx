import type { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/utils'

interface TestimonialCardProps {
  testimonial: Testimonial
  theme?: 'dark' | 'light'
}

export default function TestimonialCard({ testimonial, theme = 'dark' }: TestimonialCardProps) {
  const quote = getMetafieldValue(testimonial.metadata?.quote)
  const personName = getMetafieldValue(testimonial.metadata?.person_name)
  const personTitle = getMetafieldValue(testimonial.metadata?.person_title)
  const photo = testimonial.metadata?.person_photo
  const company = testimonial.metadata?.company
  const companyName = company
    ? getMetafieldValue(company.metadata?.company_name) || company.title
    : ''
  const isDark = theme === 'dark'

  return (
    <div
      className={`rounded-2xl p-8 h-full flex flex-col border ${
        isDark ? 'bg-white/5 border-white/10' : 'bg-white border-sand-200 shadow-sm'
      }`}
    >
      <p
        className={`font-serif text-xl leading-relaxed italic mb-6 flex-1 ${
          isDark ? 'text-sand-100' : 'text-forest-800'
        }`}
      >
        &quot;{quote}&quot;
      </p>
      <div
        className={`flex items-center gap-3 pt-4 border-t ${
          isDark ? 'border-white/10' : 'border-sand-100'
        }`}
      >
        {photo?.imgix_url ? (
          <img
            src={`${photo.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
            alt={personName}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center text-sm ${
              isDark ? 'bg-white/10' : 'bg-sand-100'
            }`}
          >
            🌱
          </div>
        )}
        <div>
          <p className={`font-medium text-sm ${isDark ? 'text-sand-50' : 'text-forest-900'}`}>
            {personName}
          </p>
          <p className={`text-xs ${isDark ? 'text-sand-200/70' : 'text-forest-600'}`}>
            {[personTitle, companyName].filter(Boolean).join(' · ')}
          </p>
        </div>
      </div>
    </div>
  )
}