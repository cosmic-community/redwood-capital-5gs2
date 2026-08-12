import type { KeyResult } from '@/types'

export default function KeyResultsGrid({ results }: { results: KeyResult[] }) {
  if (!results || results.length === 0) return null

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {results.map((result, i) => (
        <div key={`${result.label}-${i}`} className="bg-forest-50 rounded-xl p-5 text-center">
          <p className="font-serif text-2xl md:text-3xl text-forest-800 mb-1">{result.value}</p>
          <p className="text-xs uppercase tracking-wide text-forest-700/60 font-medium">
            {result.label}
          </p>
        </div>
      ))}
    </div>
  )
}