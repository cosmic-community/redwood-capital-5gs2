export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
}

export interface CosmicMedia {
  url: string
  imgix_url: string
}

export interface Service extends CosmicObject {
  type: 'services'
  metadata: {
    name?: string
    summary?: string
    description?: string
    icon?: string
    accent_color?: string
    display_order?: number
  }
}

export interface TeamMember extends CosmicObject {
  type: 'team-members'
  metadata: {
    name?: string
    role?: string
    bio?: string
    photo?: CosmicMedia
    linkedin_url?: string
    email?: string
    display_order?: number
  }
}

export interface Company extends CosmicObject {
  type: 'companies'
  metadata: {
    company_name?: string
    logo?: CosmicMedia
    one_liner?: string
    description?: string
    website?: string
    sector?: string
    stage?: string
    year_invested?: string | number
    headquarters?: string
  }
}

export interface CaseStudy extends CosmicObject {
  type: 'case-studies'
  metadata: {
    headline?: string
    hero_image?: CosmicMedia
    summary?: string
    story?: string
    company?: Company
    lead_partner?: TeamMember
    key_results?: unknown
    published_date?: string
  }
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials'
  metadata: {
    quote?: string
    person_name?: string
    person_title?: string
    person_photo?: CosmicMedia
    company?: Company
    featured?: boolean
  }
}

export interface KeyResult {
  label: string
  value: string
}