import type { KeyResult } from '@/types'

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key)
  }
  return ''
}

export function getDisplayOrder(value: unknown): number {
  const num = Number(value)
  return Number.isNaN(num) ? 0 : num
}

export function parseDateValue(value: unknown): number {
  if (!value) return 0
  const date = new Date(String(value))
  const time = date.getTime()
  return Number.isNaN(time) ? 0 : time
}

export function normalizeKeyResults(raw: unknown): KeyResult[] {
  if (!raw) return []

  if (Array.isArray(raw)) {
    return raw
      .map((item) => {
        if (item && typeof item === 'object') {
          const obj = item as Record<string, unknown>
          const label = obj.label ?? obj.name ?? obj.key ?? obj.metric
          const value = obj.value ?? obj.result ?? obj.amount
          return {
            label: label ? String(label) : '',
            value: value ? String(value) : '',
          }
        }
        return { label: '', value: String(item) }
      })
      .filter((result) => result.label || result.value)
  }

  if (typeof raw === 'object') {
    return Object.entries(raw as Record<string, unknown>).map(([key, value]) => ({
      label: key,
      value: String(value),
    }))
  }

  return []
}