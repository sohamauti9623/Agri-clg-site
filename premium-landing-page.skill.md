---
name: Premium Landing Page Generator
summary: Generate premium marketing landing pages with layered 3D hero sections, floating cards, scroll motion, and modern SaaS polish.
description: |
  Use an elevated design workflow to craft a full landing page structure with premium hero, features, testimonials, FAQ, and CTA sections. The page should feel modern, spacious, and custom-built, with subtle depth, glassmorphism, and refined motion.

  Prefer actual 3D effects when appropriate by using `@react-three/fiber`, `@react-three/drei`, and `framer-motion`. Keep the implementation minimal, performant, and mobile-first.

instructions: |
  - Build pages using the landing page structure: Hero, Trusted By, Features, Interactive Showcase, Benefits, Testimonials, FAQ, CTA.
  - Prioritize premium visual hierarchy: large headlines, generous spacing, clean typography, and minimal clutter.
  - Add depth using floating cards, layered sections, soft shadows, gradients, glassmorphism, and perspective effects.
  - Use scroll animations, hover interactions, and subtle page transitions to create a polished experience.
  - Prefer real 3D elements when they add value: `@react-three/fiber`, `@react-three/drei`, canvas scenes, and layered motion.
  - Keep color usage restrained: neutral base with one accent color and soft gradients.
  - Support dark mode with careful contrast and premium texture.
  - Favor reusable components for cards, section containers, and interactive showcases.
  - Avoid template-style, flat, cramped, or dated landing page designs.
  - Review each implementation for accessibility, responsive behavior, and performance.
  - If 3D libraries are used, note that dependencies should be installed before runtime.

applyTo:
  - "**/*.{ts,tsx,js,jsx,css}"
  - "app/**"
  - "components/**"

tools:
  - name: file_search
    use: locate existing page structure, hero sections, and component patterns.
  - name: read_file
    use: inspect current landing page markup and animation setup.
  - name: grep_search
    use: find existing card, section, and CTA patterns for reuse.
  - name: replace_string_in_file
    use: update visual structure, classes, and motion props in existing files.
  - name: create_file
    use: scaffold reusable landing page sections or 3D component helpers.
  - name: create_directory
    use: add new component folders only when sharing layout or motion patterns.

examplePrompts:
  - "Create a premium landing page hero with 3D floating cards and scroll reveal motion."
  - "Build the Trusted By and Features sections using a modern SaaS card system."
  - "Add a glassmorphism interactive showcase section with animated counters and hover depth."
---