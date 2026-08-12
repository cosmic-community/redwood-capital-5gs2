import type { Metadata } from 'next'
import { getServices } from '@/lib/cosmic'
import SectionHeading from '@/components/SectionHeading'
import ServiceCard from '@/components/ServiceCard'
import AnimatedSection from '@/components/AnimatedSection'
import type { Service } from '@/types'

export const metadata: Metadata = {
  title: 'Services | Redwood Capital',
  description: 'How Redwood Capital partners with founders across capital, operations, and growth.',
}

export default async function ServicesPage() {
  const services: Service[] = await getServices()

  return (
    <main className="bg-sand-50">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <SectionHeading
          eyebrow="What we do"
          title="Services built around the long term"
          subtitle="We bring capital, operating experience, and a network of specialists to every partnership."
        />
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        {services.length === 0 ? (
          <p className="text-forest-700/70">Services are coming soon.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.05}>
                <ServiceCard service={service} />
              </AnimatedSection>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
