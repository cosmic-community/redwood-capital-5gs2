import Link from 'next/link'
import type { Company } from '@/types'
import { getMetafieldValue } from '@/lib/utils'

export default function CompanyCard({ company }: { company: Company }) {
  const name = getMetafieldValue(company.metadata?.company_name) || company.title
  const oneLiner = getMetafieldValue(company.metadata?.one_liner)
  const sector = getMetafieldValue(company.metadata?.sector)
  const stage = getMetafieldValue(company.metadata?.stage)
  const hq = getMetafieldValue(company.metadata?.headquarters)
  const year = getMetafieldValue(company.metadata?.year_invested)
  const logo = company.metadata?.logo

  return (
    <Link
      href={`/portfolio/${company.slug}`}
      className="group block bg-white rounded-2xl border border-sand-200 p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
    >
      <div className="flex items-center gap-4 mb-5">
        <div className="w-14 h-14 rounded-xl bg-sand-100 flex items-center justify-center overflow-hidden flex-shrink-0">
          {logo?.imgix_url ? (
            <img
              src={`${logo.imgix_url}?w=112&h=112&fit=crop&auto=format,compress`}
              alt={name}
              width={56}
              height={56}
              className="w-full h-full object-contain p-2"
            />
          ) : (
            <span className="text-2xl">🌱</span>
          )}
        </div>
        <div>
          <h3 className="font-serif text-xl text-forest-900 group-hover:text-forest-700 transition-colors">
            {name}
          </h3>
          {hq && <p className="text-xs text-forest-700/60">{hq}</p>}
        </div>
      </div>
      {oneLiner && <p className="text-forest-700/80 text-sm leading-relaxed mb-5">{oneLiner}</p>}
      <div className="flex flex-wrap gap-2">
        {sector && (
          <span className="text-xs px-3 py-1 rounded-full bg-forest-50 text-forest-700 font-medium">
            {sector}
          </span>
        )}
        {stage && (
          <span className="text-xs px-3 py-1 rounded-full bg-sand-100 text-forest-700 font-medium">
            {stage}
          </span>
        )}
        {year && (
          <span className="text-xs px-3 py-1 rounded-full bg-sand-100 text-forest-700 font-medium">
            Invested {year}
          </span>
        )}
      </div>
    </Link>
  )
}