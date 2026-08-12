# Redwood Capital

![App Preview](https://imgix.cosmicjs.com/a6f65340-96a4-11f1-b4d5-af0d12faac5e-autopilot-photo-1441974231531-c6227db76b6e-1786576934198.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A polished, modern marketing website for **Redwood Capital**, a venture capital firm — built with Next.js and powered by Cosmic CMS.

## Features

- 🌲 Institutional yet contemporary design: deep evergreen + warm sand palette, serif headings, subtle scroll animations
- 🏠 Homepage with hero, positioning statement, featured services, portfolio highlights, testimonial carousel, and CTA
- 💼 Services page sorted by `display_order` with icon + accent color
- 🏢 Filterable Portfolio grid (sector & stage) with individual company detail pages
- 📈 Case Studies index & detail pages with hero image, rich-text story, related company/partner, and JSON-driven key result metric cards
- 👥 Team directory sorted by `display_order` with photo, bio, LinkedIn, and email
- ✉️ Contact page with a working form and API route
- ⭐ Testimonials as a rotating carousel on the homepage and a grid on the Portfolio page, featured testimonials prioritized
- 📱 Fully responsive, accessible, and type-safe throughout

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=6a7cff94f4275914351989e1&clone_repository=6a7d029ef427591435198a32)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a professional services company with services offered, team members (including photos and bios), case studies, and client testimonials.
>
> User instructions: A venture capital company website with services, team members, case studies, companies, and testimonials
>
> The user is rebuilding an existing website and provided these design notes: Lush green, trees, California theme. Factor these preferences into the content structure."

### Code Generation Prompt

> "Build a Next.js application for a company website called "Redwood Capital". The content is managed in Cosmic CMS with the following object types: services, team-members, companies, case-studies, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A polished, modern marketing website for Redwood Capital, a venture capital firm. Pages: a homepage with a strong hero, firm positioning statement, featured services, highlighted portfolio companies, featured testimonials, and a call to action to get in touch; a Services page listing what the firm offers (driven by the Services content type, sorted by display_order, with icon and accent color); a Portfolio page showing all Companies in a filterable grid by sector and stage, with logo, one-liner, headquarters, year invested, and website link, plus individual company detail pages; a Case Studies index and detail pages that render the headline, hero image, summary, rich-text story, the related company and lead partner, and the key_results JSON as metric cards; a Team page listing Team Members sorted by display_order with photo, role, bio, LinkedIn and email; and a Contact page. Testimonials should appear as a rotating or grid section on the homepage and portfolio page, with featured ones prioritized. Design: institutional and trustworthy but contemporary — deep evergreen and warm neutral palette, generous white space, refined serif headings paired with a clean sans body, subtle motion on scroll, fully responsive and accessible."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- TypeScript (strict mode)
- Tailwind CSS 3 (+ `@tailwindcss/typography`)
- [Cosmic](https://www.cosmicjs.com) via `@cosmicjs/sdk`

## Getting Started

### Prerequisites
- [Bun](https://bun.sh) installed
- A Cosmic account with a bucket containing `services`, `team-members`, `companies`, `case-studies`, and `testimonials` object types

### Installation

```bash
bun install
bun run dev
```

Visit `http://localhost:3000`.

### Environment Variables

Create the following environment variables (see the Cosmic dashboard for your keys):

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

```typescript
// Fetch services sorted by display_order
const response = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch a single case study with related company & lead partner resolved
const response = await cosmic.objects
  .findOne({ type: 'case-studies', slug })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app reads live from your bucket's five object types:

- **services** — `name`, `summary`, `description`, `icon`, `accent_color`, `display_order`
- **team-members** — `name`, `role`, `bio`, `photo`, `linkedin_url`, `email`, `display_order`
- **companies** — `company_name`, `logo`, `one_liner`, `description`, `website`, `sector`, `stage`, `year_invested`, `headquarters`
- **case-studies** — `headline`, `hero_image`, `summary`, `story`, `company`, `lead_partner`, `key_results`, `published_date`
- **testimonials** — `quote`, `person_name`, `person_title`, `person_photo`, `company`, `featured`

Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel
1. Push this repo to GitHub
2. Import into [Vercel](https://vercel.com)
3. Add the environment variables above
4. Deploy

### Netlify
1. Push this repo to GitHub
2. Import into [Netlify](https://netlify.com), set build command `bun run build` and publish directory `.next`
3. Add the environment variables above
4. Deploy

<!-- README_END -->