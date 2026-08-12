import type { Metadata } from 'next'
import { getCaseStudies } from '@/lib/cosmic'
import SectionHeading from '@/components/SectionHeading'
import CaseStudyCard from '@/components/CaseStudyCard'
import AnimatedSection from '@/components/AnimatedSection'
import type { CaseStudy } from '@/types'

export const metadata: Metadata = {
  title: 'Case Studies | Redwood Capital',
  description: 'Detailed looks at how we have helped our partners grow.',
}

export default async function CaseStudiesPage() {
  const caseStudies: CaseStudy[] = await getCaseStudies()

  return (
    <main className="bg-sand-50">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <SectionHeading
          eyebrow="Case studies"
          title="Results, in detail"
          subtitle="How our partnerships play out over years, not quarters."
        />
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        {caseStudies.length === 0 ? (
          <p className="text-forest-700/70">Case studies are coming soon.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((caseStudy, index) => (
              <AnimatedSection key={caseStudy.id} delay={index * 0.05}>
                <CaseStudyCard caseStudy={caseStudy} />
              </AnimatedSection>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
