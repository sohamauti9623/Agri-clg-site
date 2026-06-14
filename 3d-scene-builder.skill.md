---
name: 3D Scene Builder
summary: Build performant, premium React Three Fiber scenes for hero sections, product showcases, and interactive experiences.
description: |
  Use React Three Fiber for high-end landing page visuals when the design calls for 3D hero sections, interactive showcases, or immersive motion.

  Favor lightweight 3D experiences with strong performance, mobile optimization, and lazy loading. Keep scenes simple, elegant, and consistent with the site’s premium aesthetic.

instructions: |
  - Prefer React Three Fiber and Drei for hero sections, product showcases, or interactive experiences.
  - Use floating cubes, particles, animated grids, glass spheres, gradient lighting, depth of field, environment lighting, and camera movement to create premium depth.
  - Keep performance at 60fps by limiting geometry, materials, and effects.
  - Optimize for mobile: use smaller scenes, low-poly objects, and lazy load 3D assets.
  - Lazy load 3D content with suspense and dynamic imports when scenes are not immediately visible.
  - Integrate motion with Framer Motion for page transitions and UI overlays, while keeping the 3D canvas itself efficient.
  - Use depth and perspective to support the landing page hierarchy, not to distract from key content.
  - Avoid heavy compute, dense particle systems, or large textures that hurt load times.
  - Review changes for accessibility and visual clarity, especially on small screens.
  - If adding new dependencies, note that `@react-three/fiber`, `@react-three/drei`, and `framer-motion` should be installed.

applyTo:
  - "**/*.{ts,tsx,js,jsx,css}"
  - "app/**"
  - "components/**"

tools:
  - name: file_search
    use: find existing hero and showcase sections and identify where 3D scenes fit.
  - name: read_file
    use: inspect page and component code before adding or refining 3D scenes.
  - name: grep_search
    use: locate repeated section patterns and areas suitable for 3D enhancement.
  - name: replace_string_in_file
    use: update component markup, imports, and layout with 3D scene wrappers.
  - name: create_file
    use: scaffold reusable 3D scene components or lazy-loaded wrappers.
  - name: create_directory
    use: create component folders when adding reusable 3D scene modules.

examplePrompts:
  - "Create a React Three Fiber hero scene with floating cubes, gradient lighting, and camera motion."
  - "Add a performant 3D product showcase section using @react-three/drei and lazy loading."
  - "Build a floating glass sphere scene that works well on mobile and supports scroll reveal." 
---