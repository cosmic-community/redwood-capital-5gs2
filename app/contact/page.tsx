import type { Metadata } from 'next'
import SectionHeading from '@/components/SectionHeading'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Redwood Capital',
  description: 'Get in touch with the Redwood Capital team.',
}

export default function ContactPage() {
  return (
    <main className="bg-sand-50">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <SectionHeading
          eyebrow="Contact"
          title="Let's start a conversation"
          subtitle="Whether you are raising, exploring a partnership, or just want to compare notes, we would like to hear from you."
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 lg:px-8 pb-24">
        <ContactForm />
      </section>
    </main>
  )
}
