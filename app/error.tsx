'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center py-24">
      <p className="text-5xl mb-4">🌲</p>
      <h2 className="font-serif text-2xl text-forest-900 mb-3">Something went wrong</h2>
      <p className="text-forest-700/70 mb-6 max-w-md">
        We hit a snag loading this page. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-forest-800 text-sand-50 rounded-full font-medium hover:bg-forest-900 transition-colors"
      >
        Try again
      </button>
    </div>
  )
}