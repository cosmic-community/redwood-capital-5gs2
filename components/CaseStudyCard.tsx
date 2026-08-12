import Link from 'next/link'
import type { CaseStudy } from '@/types'
import { getMetafieldValue } from '@/lib/utils'

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const headline = getMetafieldValue(caseStudy.metadata?.headline) || caseStudy.title
  const summary = getMetafieldValue(caseStudy.metadata?.summary)
  const heroImage = caseStudy.metadata?.hero_image
  const company = caseStudy.metadata?.company
  const companyName = company
    ? getMetafieldValue(company.metadata?.company_name) || company.title
    : ''
  const publishedDate = getMetafieldValue(caseStudy.metadata?.published_date)

  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-sand-200 hover:shadow-xl transition-all duration-300"
    >
      {heroImage?.imgix_url && (
        <div className="aspect-[16/9] overflow-hidden bg-sand-100">
          <img
            src={`${heroImage.imgix_url}?w=1200&h=675&fit=crop&auto=format,compress`}
            alt={headline}
            width={600}
            height={338}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-7">
        {companyName && (
          <p className="text-xs uppercase tracking-wide text-forest-600 font-medium mb-2">
            {companyName}
            {publishedDate ? ` · ${publishedDate}` : ''}
          </p>
        )}
        <h3 className="font-serif text-2xl text-forest-900 mb-3 group-hover:text-forest-700 transition-colors">
          {headline}
        </h3>
        {summary && <p className="text-forest-700/80 leading-relaxed">{summary}</p>}
      </div>
    </Link>
  )
}