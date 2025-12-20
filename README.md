# [Personal Website](https://jasonthompson.org)

This is the source code for my personal website, built with Next.js (App Router), TypeScript, and Tailwind CSS. The site includes a portfolio, skills, contact form, and a Markdown-powered blog, with a focus on performance, accessibility, and modern best practices.

## Features

- **Next.js App Router**: Page routing, layouts, and static rendering.
- **TypeScript**: End-to-end type safety and strict configuration.
- **Tailwind CSS**: Custom semantic color system and responsive design.
- **Blog**: Markdown posts with frontmatter (via `gray-matter`).
- **Page Transitions**: Framer Motion “curtain” transition that delays navigation until the screen is fully covered.
- **Accessibility**: ARIA roles, focus styles, keyboard navigation, and semantic HTML.
- **SEO**: Per-page metadata, OpenGraph, robots.txt, and sitemap.xml.
- **Security**: Content Security Policy, security headers, and client-side rate limiting.
- **Error Handling**: React Error Boundary and user-friendly error messages.
- **Performance**: Optimized images, responsive sizes, and minimal bundle size.
- **Mobile Friendly**: Responsive layouts, touch targets, and mobile navigation.
- **Developer Experience**: Utilities for analytics, rate limiting, and reusable style constants.

## Getting Started

- Install dependencies: `npm install`
- Run locally: `npm run dev`
- Production build: `npm run build`
- Start production server: `npm run start`

## Project Structure

- `src/app/` — Next.js app directory (pages, layouts, API, etc.)
- `src/components/` — Reusable React components
- `src/constants/` — Design tokens and style constants
- `src/data/` — Portfolio and skills data
- `src/lib/` — Shared helpers (e.g., blog parsing)
- `src/util/` — Utilities (rate limiting, analytics)
- `content/blog/` — Markdown blog posts
- `public/` — Static assets (images, robots.txt, etc.)
- `tailwind.config.ts` — Tailwind CSS configuration
- `tsconfig.json` — TypeScript configuration

## Blog Content

Blog posts live in `content/blog/*.md` and are parsed with `gray-matter`.

Frontmatter fields used by the site:

- `title`
- `date`
- `description`
- `tags` (optional)

## Transitions (How Navigation Works)

The site uses a Framer Motion curtain transition to avoid flashing the next page before the transition is fully covering the screen:

- Clicking a navbar link triggers `startNavigate(...)` via a context hook.
- The curtain animates up (cover).
- Only once fully covered, the router navigates.
- Once the new route is active, the curtain animates down (reveal).

Key files:

- `src/components/transitionProvider.tsx`
- `src/components/transitionNavigation.tsx`

## Improvements & Highlights

- Comprehensive metadata and SEO for all pages
- Strict TypeScript and improved type safety
- ARIA and accessibility enhancements
- Modern color system and design tokens
- Error boundaries and loading wrappers
- Security headers and CSP
- Mobile-first responsive layouts
- Privacy-friendly analytics utility

## License

This project is licensed under the GNU GENERAL PUBLIC LICENSE.
