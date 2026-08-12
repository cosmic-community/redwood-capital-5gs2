import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-forest-950 text-sand-100 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="font-serif text-2xl mb-3">🌲 Redwood Capital</div>
          <p className="text-sand-300 text-sm leading-relaxed">
            Partnering with visionary founders to grow enduring companies from seed to scale.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-4 text-sand-200">Explore</h4>
          <ul className="space-y-2 text-sm text-sand-300">
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
            <li><Link href="/team" className="hover:text-white transition-colors">Team</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-4 text-sand-200">Firm</h4>
          <ul className="space-y-2 text-sm text-sand-300">
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="/" className="hover:text-white transition-colors">About</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-4 text-sand-200">Contact</h4>
          <p className="text-sm text-sand-300 mb-1">hello@redwoodcapital.vc</p>
          <p className="text-sm text-sand-300">San Francisco, CA</p>
        </div>
      </div>
      <div className="border-t border-forest-800 py-6 text-center text-xs text-sand-400">
        © {year} Redwood Capital. All rights reserved.
      </div>
    </footer>
  )
}