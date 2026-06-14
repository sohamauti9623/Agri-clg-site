# AGENTS.md

## Purpose
This file helps coding agents understand the current site structure, conventions, and project goals so work is aligned with the repository’s frontend architecture and business priorities.

## Project overview
- Stack: Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion.
- Current site: static marketing pages for an agricultural college with strong SEO, accessibility, and conversion-focused content.
- Root layout: `app/layout.tsx` provides global metadata, fonts, site shell, and shared components.
- Pages: `app/page.tsx` (home) and `app/about/page.tsx` (about). Both use page-level metadata exports.
- Shared UI: `components/Header.tsx`, `components/Footer.tsx`, `components/FloatingActions.tsx`, `components/Motion.tsx`.
- Public assets live in `public/`.

## Build / test commands
- `npm install`
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run typecheck`

## Key conventions
- Use mobile-first responsive layout classes.
- Favor reusable components and data-driven arrays over repeating markup.
- Keep page metadata in `export const metadata` for each route.
- Use semantic HTML and accessible patterns (`<section>`, `<article>`, `aria-label`, visible focus states, forms with labels).
- Preserve the site’s conversion path: prominent CTA buttons, contact links, admissions phone/email, and anchor navigation to sections like `#contact`.
- Avoid introducing duplicate UI or design styles; prefer shared patterns such as glass cards, section headers, and CTA button styles.

## Agent workflow guidance
When modifying or adding code:
1. Analyze existing patterns in `app/layout.tsx`, `app/page.tsx`, `app/about/page.tsx`, and shared components.
2. Plan implementation around reusable sections, metadata, and responsive layout.
3. Explain tradeoffs briefly when choosing between new components, content changes, or performance optimizations.
4. Implement with attention to SEO, accessibility, Lighthouse performance, and conversion.

After changes:
- Verify code compiles cleanly with `npm run build` and `npm run typecheck`.
- Check responsive behavior for mobile-first breakpoints.
- Check performance and accessibility impact in page markup.
- Suggest improvements to strengthen reuse, conversion, or SEO.

## Site-specific details
- Primary domain metadata base: `https://shrivitthalagri.edu.in`.
- CTAs: admissions contact phone, email, WhatsApp, and `Apply Now` buttons.
- Existing SEO helper: see `seo.agent.md` for metadata and content optimization tasks.

## Notes for Supabase / backend work
- The current repository does not yet contain Supabase/PostgreSQL integration code.
- If backend data or lead capture is added, keep API logic separate from presentation and use Next.js server actions or route handlers where appropriate.

## Related files
- `README.md` — project summary and preview workflow notes
- `seo.agent.md` — SEO specialist agent instructions
- `tailwind.config.ts` — Tailwind setup and theme tokens
- `next.config.ts` — Next.js configuration
- `app/robots.ts`, `app/sitemap.ts` — search indexing and sitemap behavior
