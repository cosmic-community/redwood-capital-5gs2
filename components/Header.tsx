'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-sand-50/95 backdrop-blur-sm border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center gap-2 font-serif text-2xl text-forest-900"
            onClick={() => setIsOpen(false)}
          >
            <span aria-hidden="true">🌲</span>
            Redwood Capital
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    active ? 'text-forest-900' : 'text-forest-700/70 hover:text-forest-900'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className="ml-2 px-5 py-2.5 bg-forest-800 text-sand-50 text-sm font-medium rounded-full hover:bg-forest-900 transition-colors"
            >
              Get in Touch
            </Link>
          </nav>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-forest-900 transition-transform ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span className={`block w-6 h-0.5 bg-forest-900 transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
            <span
              className={`block w-6 h-0.5 bg-forest-900 transition-transform ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden border-t border-sand-200 bg-sand-50">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-forest-800 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}