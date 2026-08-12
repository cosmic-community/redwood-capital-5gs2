import type { Service } from '@/types'
import { getMetafieldValue } from '@/lib/utils'

export default function ServiceCard({ service }: { service: Service }) {
  const name = getMetafieldValue(service.metadata?.name) || service.title
  const summary = getMetafieldValue(service.metadata?.summary)
  const icon = getMetafieldValue(service.metadata?.icon) || '🌲'
  const accent = getMetafieldValue(service.metadata?.accent_color) || '#345940'

  return (
    <div className="group bg-white rounded-2xl p-8 border border-sand-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6"
        style={{ backgroundColor: `${accent}1a`, color: accent }}
      >
        <span aria-hidden="true">{icon}</span>
      </div>
      <h3 className="font-serif text-2xl text-forest-900 mb-3">{name}</h3>
      {summary && <p className="text-forest-700/80 leading-relaxed">{summary}</p>}
    </div>
  )
}