import Link from 'next/link'
import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import AnimatedSection from '@/components/AnimatedSection'
import ServiceCard from '@/components/ServiceCard'
import CompanyCard from '@/components/CompanyCard'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import { getServices, getCompanies, getFeaturedTestimonials } from '@/lib/cosmic'

export const metadata = {
  title: 'Redwood Capital | Venture Capital for Enduring Companies',
  description:
    'Redwood Capital partners with bold founders building enduring companies, providing capital and counsel from seed to scale.',
}

export default async function HomePage() {
  const [services, companies, testimonials] = await Promise.all([
    getServices(),
    getCompanies(),
    getFeaturedTestimonials(6),
  ])

  const featuredServices = services.slice(0, 3)
  const featuredCompanies = companies.slice(0, 6)

  return (
    <>
      <Hero />

      <section className="py-20 bg-sand-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="font-serif text-2xl md:text-3xl text-forest-900 leading-snug italic">
              &quot;We believe the strongest companies, like the tallest redwoods, grow from deep
              roots, patient capital, and an ecosystem built to last.&quot;
            </p>
          </AnimatedSection>
        </div>
      </section>

      {featuredServices.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <SectionHeading
                eyebrow="How We Help"
                title="Partnership beyond the term sheet"
                subtitle="From first check to category leadership, we bring resources founders actually need."
                align="center"
              />
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredServices.map((service, i) => (
                <AnimatedSection key={service.id} delay={i * 100}>
                  <ServiceCard service={service} />
                </AnimatedSection>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="text-forest-800 font-medium border-b border-forest-800/30 hover:border-forest-800 transition-colors"
              >
                View all services →
              </Link>
            </div>
          </div>
        </section>
      )}

      {featuredCompanies.length > 0 && (
        <section className="py-24 bg-sand-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <SectionHeading eyebrow="Portfolio" title="Companies we're proud to back" align="center" />
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCompanies.map((company, i) => (
                <AnimatedSection key={company.id} delay={i * 80}>
                  <CompanyCard company={company} />
                </AnimatedSection>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="text-forest-800 font-medium border-b border-forest-800/30 hover:border-forest-800 transition-colors"
              >
                Explore the full portfolio →
              </Link>
            </div>
          </div>
        </section>
      )}

      {testimonials.length > 0 && (
        <section className="py-24 bg-forest-900 text-sand-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <SectionHeading eyebrow="Founder Voices" title="What our partners say" align="center" dark />
            </AnimatedSection>
            <TestimonialsSection testimonials={testimonials} layout="carousel" />
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}