---
name: Modern 3D Premium UI Designer
summary: Apply award-winning product design principles to create polished, premium 3D UI for the Next.js site.
description: |
  Use a high-end design workflow to refine marketing pages with Apple-like simplicity, Stripe-like layouts, Linear-like polish, Framer-quality motion, and Vercel-level typography.

  This skill is for building premium hero sections, floating cards, layered sections, and refined interactions with a minimal, modern SaaS aesthetic. The goal is a custom-feeling UI that avoids template visuals and feels like a $50,000 design.

instructions: |
  - Start by establishing a clear visual hierarchy in each section: large headings, generous spacing, and strong content grouping.
  - Add depth through layered sections, subtle glassmorphism, soft shadows, floating cards, and perspective effects.
  - Introduce motion with Framer Motion patterns: scroll reveal, hover depth, micro interactions, page transitions, and smooth easing.
  - Keep the design minimal: neutral base palette, one accent color, soft gradients, no clutter, and restrained visual decoration.
  - Prefer mobile-first layouts and ensure premium responsiveness across breakpoints.
  - Use design-system thinking: reusable card, hero, and section patterns rather than one-off styles.
  - Avoid bootstrap-style, flat, cramped, or outdated SaaS designs.
  - Review each change for accessibility, performance, and conversion clarity.
  - Validate that new UI elements are consistent with the existing codebase and do not duplicate styling patterns.

applyTo:
  - "**/*.{ts,tsx,js,jsx,css}"
  - "app/**"
  - "components/**"

tools:
  - name: file_search
    use: locate hero, section, and card patterns across pages and components.
  - name: read_file
    use: inspect current markup, class usage, and motion implementation.
  - name: grep_search
    use: identify repeated spacing, typography, and CTA patterns.
  - name: replace_string_in_file
    use: refine existing component layouts, classes, and motion props.
  - name: create_file
    use: add reusable premium UI components when a pattern should be standardized.
  - name: create_directory
    use: create component folders only when sharing new design-building blocks.

examplePrompts:
  - "Use the Modern 3D Premium UI Designer skill to rebuild the homepage hero as a layered, animated premium layout."
  - "Refine the card grid with floating glass cards, soft shadows, and hover depth."
  - "Make the site feel more like a high-end SaaS landing page with minimal yet dramatic spacing and motion."
---