import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCompanyBySlug } from '@/lib/cosmic'

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const company = await getCompanyBySlug(slug)

  if (!company) {
    notFound()
  }

  const metadata = company.metadata ?? {}
  const name: string = metadata.company_name || company.title

  return (
    <main className="bg-sand-50">
      <section className="max-w-4xl mx-auto px-6 lg:px-8 pt-16 pb-24">
        <Link href="/portfolio" className="text-sm text-forest-700/70 hover:text-forest-900 transition-colors">
          &larr; Back to portfolio
        </Link>

        <div className="mt-8 flex items-center gap-6">
          {metadata.logo?.imgix_url ? (
            <img
              src={`${metadata.logo.imgix_url}?w=200&h=200&fit=clip&auto=format,compress`}
              alt={name}
              width={80}
              height={80}
              className="w-20 h-20 object-contain"
            />
          ) : null}
          <div>
            <h1 className="font-serif text-4xl md:text-5xl text-forest-900">{name}</h1>
            {metadata.one_liner ? (
              <p className="mt-2 text-lg text-forest-700/80">{metadata.one_liner}</p>
            ) : null}
          </div>
        </div>

        <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 border-y border-sand-200 py-8">
          {metadata.sector ? (
            <div>
              <dt className="text-xs uppercase tracking-wider text-forest-700/60">Sector</dt>
              <dd className="mt-1 text-forest-900 font-medium">{metadata.sector}</dd>
            </div>
          ) : null}
          {metadata.stage ? (
            <div>
              <dt className="text-xs uppercase tracking-wider text-forest-700/60">Stage</dt>
              <dd className="mt-1 text-forest-900 font-medium">{metadata.stage}</dd>
            </div>
          ) : null}
          {metadata.year_invested ? (
            <div>
              <dt className="text-xs uppercase tracking-wider text-forest-700/60">Year invested</dt>
              <dd className="mt-1 text-forest-900 font-medium">{String(metadata.year_invested)}</dd>
            </div>
          ) : null}
          {metadata.headquarters ? (
            <div>
              <dt className="text-xs uppercase tracking-wider text-forest-700/60">Headquarters</dt>
              <dd className="mt-1 text-forest-900 font-medium">{metadata.headquarters}</dd>
            </div>
          ) : null}
        </dl>

        {metadata.description ? (
          <div
            className="prose prose-lg mt-10 max-w-none text-forest-800"
            dangerouslySetInnerHTML={{ __html: metadata.description }}
          />
        ) : null}

        {metadata.website ? (
          <a
            href={metadata.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 px-6 py-3 bg-forest-800 text-sand-50 text-sm font-medium rounded-full hover:bg-forest-900 transition-colors"
          >
            Visit website
          </a>
        ) : null}
      </section>
    </main>
  )
}
