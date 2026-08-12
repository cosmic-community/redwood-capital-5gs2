'use client'

import { useState } from 'react'

interface FormState {
  name: string
  email: string
  company: string
  message: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm({ name: '', email: '', company: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl border border-sand-200 p-10 text-center">
        <p className="text-3xl mb-4">🌲</p>
        <h3 className="font-serif text-2xl text-forest-900 mb-2">Message received</h3>
        <p className="text-forest-700/80">
          Thank you for reaching out. A member of our team will be in touch shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-sand-200 p-8 space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-forest-800 mb-1.5">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-sand-200 focus:outline-none focus:ring-2 focus:ring-forest-400 text-forest-900"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-forest-800 mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-sand-200 focus:outline-none focus:ring-2 focus:ring-forest-400 text-forest-900"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-forest-800 mb-1.5">
          Company
        </label>
        <input
          id="company"
          name="company"
          value={form.company}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-sand-200 focus:outline-none focus:ring-2 focus:ring-forest-400 text-forest-900"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-forest-800 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-sand-200 focus:outline-none focus:ring-2 focus:ring-forest-400 text-forest-900"
        />
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-600">Something went wrong. Please try again or email us directly.</p>
      )}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-3.5 bg-forest-800 text-sand-50 font-medium rounded-lg hover:bg-forest-900 transition-colors disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}