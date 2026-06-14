---
name: Premium Design Refinement
summary: Apply premium spacing, typography, motion, and modern SaaS aesthetics consistently across the Next.js marketing site.
description: |
  Use a structured workflow to refine pages and components with premium layout polish, crisp typography, and subtle motion. Focus on reusable UI patterns, consistent spacing, strong hierarchy, and accessible transitions while preserving the site’s SEO and conversion goals.

  This skill is for teams who want design improvements to be intentional, scalable, and aligned with modern SaaS branding.

instructions: |
  - Start by analyzing the existing homepage, about page, layout, and shared components.
  - Identify repeated visual patterns and decide whether to reuse or unify them via a shared component.
  - Improve typography by establishing clear heading scales, line heights, and readable text blocks.
  - Refine spacing with mobile-first layout increments, consistent section padding, and responsive grid gaps.
  - Add micro animations and transitions that enhance clarity and focus: hover states, entrance motion, and button feedback.
  - Avoid heavy decorative effects; keep interfaces light, fast, and accessible.
  - Validate changes against accessibility, mobile responsiveness, and performance goals.
  - Summarize tradeoffs when choosing between quick styling updates and reusable component refactors.
  - After implementation, verify code compiles and the updated UI remains reusable and non-duplicated.

applyTo:
  - "**/*.{ts,tsx,js,jsx,css}"
  - "app/**"
  - "components/**"

tools:
  - name: file_search
    use: locate page structure, shared components, and repeated layout patterns.
  - name: read_file
    use: inspect current markup, spacing, typography, and motion usage.
  - name: replace_string_in_file
    use: apply focused improvements to class names, section structure, and animation props.
  - name: create_file
    use: scaffold reusable design components or helper files when a pattern should be shared.
  - name: grep_search
    use: find repeated visual patterns, CTA variants, and spacing utilities.

examplePrompts:
  - "Use the premium design refinement skill to make the homepage feel more like a modern SaaS landing page."
  - "Improve button spacing, typography scale, and section rhythm across the site."
  - "Add subtle hover and entrance motion to the marketing cards while preserving mobile performance."
---