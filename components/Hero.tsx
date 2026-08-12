import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-forest-900 via-forest-800 to-forest-900 text-sand-50 overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, white, transparent 40%)' }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 md:py-36">
        <p className="text-sand-300 uppercase tracking-[0.2em] text-sm mb-6">
          Venture Capital · Seed to Scale
        </p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl mb-8">
          Cultivating tomorrow&apos;s category leaders.
        </h1>
        <p className="text-lg md:text-xl text-sand-200 max-w-2xl mb-10 leading-relaxed">
          Redwood Capital partners with bold founders building enduring companies — providing
          capital, counsel, and the deep roots of a firm built for the long term.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/portfolio"
            className="px-7 py-3.5 bg-sand-100 text-forest-900 font-medium rounded-full hover:bg-white transition-colors"
          >
            View Portfolio
          </Link>
          <Link
            href="/contact"
            className="px-7 py-3.5 border border-sand-300/40 text-sand-50 font-medium rounded-full hover:bg-white/10 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}