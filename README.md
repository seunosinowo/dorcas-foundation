# Dorcas Igbokwe Foundation — Empowering African Youth

A modern Next.js website honoring Dorcas Igbokwe’s legacy and mission to empower African youth through trade skills training and business startup support.

## Features

- Responsive layout with fixed `Header` and `Footer`
- Pages: `Home`, `About`, `Gallery`, `Give`, `Contact`
- Optimized images via `next/image` with accessible markup
- Design system with Tailwind CSS and custom animations
- UI primitives from shadcn/ui (Radix) built with TypeScript
- Toast notifications via Sonner in the contact form

## What We Do

- Trade Skills Scholarships: Sponsor training in fashion, tech, catering, beauty, carpentry, welding, and more
- Business Start‑Up Support: Provide equipment, starter kits, or seed funding to launch small businesses
- Mentorship & Guidance: Connect youths with mentors for planning, starting, and growth

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS + `tailwindcss-animate`
- shadcn/ui (Radix UI)
- TanStack Query
- Sonner (toast notifications)
- Lucide React (icons)

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with Header, Footer, Providers
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About the foundation
│   ├── gallery/page.tsx    # Photo gallery
│   ├── give/page.tsx       # Donation details
│   └── contact/page.tsx    # Contact information and form
├── src/
│   ├── components/
│   │   ├── layout/Header.tsx
│   │   ├── layout/Footer.tsx
│   │   └── ui/SectionHeading.tsx
│   ├── hooks/
│   ├── lib/utils.ts
│   └── index.css           # CSS variables, base styles, animations
├── public/                 # Images and static assets
└── tailwind.config.ts      # Tailwind setup and theme extensions
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

- `npm run dev` — start the Next.js dev server
- `npm run build` — production build
- `npm run start` — run the production server
- `npm run lint` — lint the project
- `npm run typecheck` — TypeScript type checking

## Acknowledgment

In loving memory of Dorcas Igbokwe - continuing her legacy of love, service, and empowerment.
