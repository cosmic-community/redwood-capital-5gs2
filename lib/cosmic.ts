import { createBucketClient } from '@cosmicjs/sdk'
import type { Service, TeamMember, Company, CaseStudy, Testimonial } from '@/types'
import { getDisplayOrder, parseDateValue } from './utils'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging',
})

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

export async function getServices(): Promise<Service[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    const services = response.objects as Service[]
    return services.sort(
      (a, b) => getDisplayOrder(a.metadata?.display_order) - getDisplayOrder(b.metadata?.display_order)
    )
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch services')
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    const members = response.objects as TeamMember[]
    return members.sort(
      (a, b) => getDisplayOrder(a.metadata?.display_order) - getDisplayOrder(b.metadata?.display_order)
    )
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch team members')
  }
}

export async function getCompanies(): Promise<Company[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'companies' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    const companies = response.objects as Company[]
    return companies.sort((a, b) => {
      const nameA = a.metadata?.company_name || a.title || ''
      const nameB = b.metadata?.company_name || b.title || ''
      return String(nameA).localeCompare(String(nameB))
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch companies')
  }
}

export async function getCompanyBySlug(slug: string): Promise<Company | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'companies', slug })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    return response.object as Company
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch company')
  }
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'case-studies' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    const caseStudies = response.objects as CaseStudy[]
    return caseStudies.sort(
      (a, b) => parseDateValue(b.metadata?.published_date) - parseDateValue(a.metadata?.published_date)
    )
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch case studies')
  }
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'case-studies', slug })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    return response.object as CaseStudy
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch case study')
  }
}

export async function getCaseStudiesForCompany(companyId: string): Promise<CaseStudy[]> {
  const caseStudies = await getCaseStudies()
  return caseStudies.filter((cs) => cs.metadata?.company?.id === companyId)
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    return response.objects as Testimonial[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch testimonials')
  }
}

export async function getFeaturedTestimonials(limit = 6): Promise<Testimonial[]> {
  const testimonials = await getTestimonials()
  const featured = testimonials.filter((t) => Boolean(t.metadata?.featured))
  const pool = featured.length > 0 ? featured : testimonials
  return pool.slice(0, limit)
}