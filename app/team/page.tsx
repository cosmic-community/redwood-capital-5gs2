import type { Metadata } from 'next'
import { getTeamMembers } from '@/lib/cosmic'
import SectionHeading from '@/components/SectionHeading'
import TeamMemberCard from '@/components/TeamMemberCard'
import AnimatedSection from '@/components/AnimatedSection'
import type { TeamMember } from '@/types'

export const metadata: Metadata = {
  title: 'Team | Redwood Capital',
  description: 'The partners and operators behind Redwood Capital.',
}

export default async function TeamPage() {
  const team: TeamMember[] = await getTeamMembers()

  return (
    <main className="bg-sand-50">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <SectionHeading
          eyebrow="Our team"
          title="Operators first, investors second"
          subtitle="A small team with decades of experience building and scaling companies."
        />
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        {team.length === 0 ? (
          <p className="text-forest-700/70">Team profiles are coming soon.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <AnimatedSection key={member.id} delay={index * 0.05}>
                <TeamMemberCard member={member} />
              </AnimatedSection>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
