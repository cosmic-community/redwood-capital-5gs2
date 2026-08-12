import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center py-24">
      <p className="text-5xl mb-4">🌲</p>
      <h1 className="font-serif text-3xl text-forest-900 mb-3">Page not found</h1>
      <p className="text-forest-700/70 mb-8 max-w-md">
        The page you&apos;re looking for may have been moved or doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-forest-800 text-sand-50 rounded-full font-medium hover:bg-forest-900 transition-colors"
      >
        Return Home
      </Link>
    </div>
  )
}