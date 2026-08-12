import type { Metadata } from 'next'
import { getCompanies } from '@/lib/cosmic'
import SectionHeading from '@/components/SectionHeading'
import CompanyCard from '@/components/CompanyCard'
import AnimatedSection from '@/components/AnimatedSection'
import type { Company } from '@/types'

export const metadata: Metadata = {
  title: 'Portfolio | Redwood Capital',
  description: 'The companies we are proud to partner with.',
}

export default async function PortfolioPage() {
  const companies: Company[] = await getCompanies()

  return (
    <main className="bg-sand-50">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <SectionHeading
          eyebrow="Portfolio"
          title="Companies we back"
          subtitle="Durable businesses across software, healthcare, and climate infrastructure."
        />
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        {companies.length === 0 ? (
          <p className="text-forest-700/70">Portfolio companies are coming soon.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {companies.map((company, index) => (
              <AnimatedSection key={company.id} delay={index * 0.05}>
                <CompanyCard company={company} />
              </AnimatedSection>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
