import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCaseStudyBySlug } from '@/lib/cosmic'
import KeyResultsGrid from '@/components/KeyResultsGrid'
import type { KeyResult } from '@/types'

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudyBySlug(slug)

  if (!caseStudy) {
    notFound()
  }

  const metadata = caseStudy.metadata ?? {}
  const rawResults = metadata.key_results
  const keyResults: KeyResult[] = Array.isArray(rawResults) ? (rawResults as KeyResult[]) : []
  const company = metadata.company
  const leadPartner = metadata.lead_partner

  return (
    <main className="bg-sand-50">
      <section className="max-w-4xl mx-auto px-6 lg:px-8 pt-16">
        <Link href="/case-studies" className="text-sm text-forest-700/70 hover:text-forest-900 transition-colors">
          &larr; Back to case studies
        </Link>

        <h1 className="mt-8 font-serif text-4xl md:text-5xl text-forest-900">
          {metadata.headline || caseStudy.title}
        </h1>

        {metadata.summary ? (
          <p className="mt-4 text-lg text-forest-700/80">{metadata.summary}</p>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-forest-700/70">
          {company ? (
            <span>
              Company:{' '}
              <Link href={`/portfolio/${company.slug}`} className="text-forest-900 hover:underline">
                {company.metadata?.company_name || company.title}
              </Link>
            </span>
          ) : null}
          {leadPartner ? (
            <span>Lead partner: {leadPartner.metadata?.name || leadPartner.title}</span>
          ) : null}
        </div>
      </section>

      {metadata.hero_image?.imgix_url ? (
        <section className="max-w-5xl mx-auto px-6 lg:px-8 mt-12">
          <img
            src={`${metadata.hero_image.imgix_url}?w=2000&h=1000&fit=crop&auto=format,compress`}
            alt={metadata.headline || caseStudy.title}
            width={1000}
            height={500}
            className="w-full rounded-2xl object-cover"
          />
        </section>
      ) : null}

      {keyResults.length > 0 ? (
        <section className="max-w-4xl mx-auto px-6 lg:px-8 mt-16">
          <KeyResultsGrid results={keyResults} />
        </section>
      ) : null}

      {metadata.story ? (
        <section className="max-w-3xl mx-auto px-6 lg:px-8 mt-16 pb-24">
          <div
            className="prose prose-lg max-w-none text-forest-800"
            dangerouslySetInnerHTML={{ __html: metadata.story }}
          />
        </section>
      ) : (
        <div className="pb-24" />
      )}
    </main>
  )
}
