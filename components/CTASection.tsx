import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-24 bg-sand-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-forest-900 mb-6">
          Building something worth planting roots in?
        </h2>
        <p className="text-forest-700/80 text-lg mb-10 max-w-xl mx-auto">
          We&apos;d love to hear from you — whether you&apos;re raising a round or just want to talk shop.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-forest-800 text-sand-50 font-medium rounded-full hover:bg-forest-900 transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  )
}