'use client'

import { useMemo, useState } from 'react'
import type { Company } from '@/types'
import CompanyCard from '@/components/CompanyCard'
import { getMetafieldValue } from '@/lib/utils'

interface FilterGroupProps {
  label: string
  options: string[]
  value: string
  onChange: (value: string) => void
}

function FilterGroup({ label, options, value, onChange }: FilterGroupProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs uppercase tracking-wide text-forest-700/60 font-medium mr-1">
        {label}:
      </span>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
            value === option
              ? 'bg-forest-800 text-sand-50 border-forest-800'
              : 'bg-white text-forest-700 border-sand-200 hover:border-forest-400'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

export default function PortfolioGrid({ companies }: { companies: Company[] }) {
  const [sector, setSector] = useState('All')
  const [stage, setStage] = useState('All')

  const sectors = useMemo(() => {
    const set = new Set<string>()
    companies.forEach((c) => {
      const s = getMetafieldValue(c.metadata?.sector)
      if (s) set.add(s)
    })
    return ['All', ...Array.from(set).sort()]
  }, [companies])

  const stages = useMemo(() => {
    const set = new Set<string>()
    companies.forEach((c) => {
      const s = getMetafieldValue(c.metadata?.stage)
      if (s) set.add(s)
    })
    return ['All', ...Array.from(set).sort()]
  }, [companies])

  const filtered = companies.filter((c) => {
    const cSector = getMetafieldValue(c.metadata?.sector)
    const cStage = getMetafieldValue(c.metadata?.stage)
    const sectorMatch = sector === 'All' || cSector === sector
    const stageMatch = stage === 'All' || cStage === stage
    return sectorMatch && stageMatch
  })

  if (companies.length === 0) {
    return <p className="text-center text-forest-700/70 py-12">Portfolio companies coming soon.</p>
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-4 mb-10">
        <FilterGroup label="Sector" options={sectors} value={sector} onChange={setSector} />
        <FilterGroup label="Stage" options={stages} value={stage} onChange={setStage} />
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-forest-700/70 py-12">No companies match these filters yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      )}
    </div>
  )
}