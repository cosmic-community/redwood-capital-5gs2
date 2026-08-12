import type { TeamMember } from '@/types'
import { getMetafieldValue } from '@/lib/utils'

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  const name = getMetafieldValue(member.metadata?.name) || member.title
  const role = getMetafieldValue(member.metadata?.role)
  const bio = getMetafieldValue(member.metadata?.bio)
  const photo = member.metadata?.photo
  const linkedin = getMetafieldValue(member.metadata?.linkedin_url)
  const email = getMetafieldValue(member.metadata?.email)

  return (
    <div className="bg-white rounded-2xl border border-sand-200 overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="aspect-[4/5] bg-sand-100 overflow-hidden">
        {photo?.imgix_url ? (
          <img
            src={`${photo.imgix_url}?w=600&h=750&fit=crop&auto=format,compress`}
            alt={name}
            width={300}
            height={375}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">🌲</div>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-serif text-xl text-forest-900 mb-1">{name}</h3>
        {role && <p className="text-sm text-forest-600 font-medium mb-3">{role}</p>}
        {bio && <p className="text-sm text-forest-700/80 leading-relaxed mb-4 flex-1">{bio}</p>}
        <div className="flex items-center gap-3 pt-2 border-t border-sand-100">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest-600 hover:text-forest-900 text-sm font-medium"
            >
              LinkedIn
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`} className="text-forest-600 hover:text-forest-900 text-sm font-medium">
              Email
            </a>
          )}
        </div>
      </div>
    </div>
  )
}