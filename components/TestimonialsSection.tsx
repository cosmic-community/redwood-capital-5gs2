'use client'

import { useEffect, useState } from 'react'
import type { Testimonial } from '@/types'
import TestimonialCard from '@/components/TestimonialCard'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
  layout?: 'carousel' | 'grid'
}

export default function TestimonialsSection({ testimonials, layout = 'grid' }: TestimonialsSectionProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (layout !== 'carousel' || testimonials.length <= 1) return
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [layout, testimonials.length])

  if (testimonials.length === 0) return null

  if (layout === 'grid') {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} theme="light" />
        ))}
      </div>
    )
  }

  const current = testimonials[index]
  if (!current) return null

  return (
    <div>
      <div className="max-w-3xl mx-auto">
        <TestimonialCard testimonial={current} theme="dark" />
      </div>
      {testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === index ? 'bg-sand-100' : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}