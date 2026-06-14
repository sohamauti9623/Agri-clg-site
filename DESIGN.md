---
name: Agricultural Excellence Framework
colors:
  surface: '#f7fbf1'
  surface-dim: '#d8dbd2'
  surface-bright: '#f7fbf1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f5ec'
  surface-container: '#ecefe6'
  surface-container-high: '#e6e9e0'
  surface-container-highest: '#e0e4db'
  on-surface: '#191d17'
  on-surface-variant: '#41493e'
  inverse-surface: '#2d322c'
  inverse-on-surface: '#eff2e9'
  outline: '#717a6d'
  outline-variant: '#c0c9bb'
  surface-tint: '#2a6b2c'
  primary: '#00450d'
  on-primary: '#ffffff'
  primary-container: '#1b5e20'
  on-primary-container: '#90d689'
  inverse-primary: '#91d78a'
  secondary: '#1b6d24'
  on-secondary: '#ffffff'
  secondary-container: '#a0f399'
  on-secondary-container: '#217128'
  tertiary: '#6b1d3d'
  on-tertiary: '#ffffff'
  tertiary-container: '#883454'
  on-tertiary-container: '#ffaec6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#acf4a4'
  primary-fixed-dim: '#91d78a'
  on-primary-fixed: '#002203'
  on-primary-fixed-variant: '#0c5216'
  secondary-fixed: '#a3f69c'
  secondary-fixed-dim: '#88d982'
  on-secondary-fixed: '#002204'
  on-secondary-fixed-variant: '#005312'
  tertiary-fixed: '#ffd9e2'
  tertiary-fixed-dim: '#ffb1c8'
  on-tertiary-fixed: '#3e001d'
  on-tertiary-fixed-variant: '#7a2949'
  background: '#f7fbf1'
  on-background: '#191d17'
  surface-variant: '#e0e4db'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is crafted to project the prestige and forward-thinking nature of the Shri Vitthal College of Agriculture. The brand personality is **Trustworthy, Modern, and High-End**, positioning the institution as a leader in agricultural science and innovation.

The design style is a sophisticated blend of **Modern Minimalism** and **Glassmorphism**. It utilizes generous whitespace, inspired by high-end consumer technology interfaces, to allow academic content to breathe. The aesthetic prioritizes clarity and premium craftsmanship, using translucent layers and subtle background blurs to create a sense of depth and lightness. The emotional response should be one of confidence, serenity, and professional excellence.

## Colors

The palette is rooted in the natural world but refined through a premium lens. 

- **Primary Green (#1B5E20):** A deep, authoritative green used for core branding, primary navigation, and high-level headers. It represents stability and deep-rooted knowledge.
- **Secondary Green (#2E7D32):** A slightly more vibrant tone used for interactive elements and secondary actions, maintaining the organic theme while providing visual variance.
- **Gold Accent (#D4AF37):** Used sparingly for "Hero" moments, prestigious call-outs, and decorative elements to signify excellence and the "golden" future of agriculture.
- **Soft White Background (#F8FAF8):** A tinted neutral that prevents screen glare and provides a modern, clean canvas for glassmorphic elements.
- **Surface & Glass:** Pure white is used for card surfaces, often with a 70-80% opacity and a 20px background blur (backdrop-filter) to achieve the signature glass effect.

## Typography

The typography strategy balances modern geometry with high utility. 

**Plus Jakarta Sans** is the voice of the institution—used for all headings. It is set with tighter letter-spacing in larger sizes to create a "compact" and professional editorial look. **Inter** handles the heavy lifting for body text and administrative data, chosen for its exceptional legibility and neutral tone that doesn't compete with the expressive headlines.

For mobile, display sizes scale down aggressively to ensure no single word breaks across lines, while maintaining a clear hierarchy through weight rather than just scale.

## Layout & Spacing

This design system employs a **Fixed-Width Centered Grid** for desktop and a **Fluid Grid** for mobile devices. 

- **Desktop (1280px+):** A 12-column grid with 24px gutters. Margins are generous (64px) to create an "Apple-style" inset look that focuses attention on the central content.
- **Tablet (768px - 1024px):** 8-column grid with 20px gutters.
- **Mobile (<767px):** 4-column grid with 16px gutters and 20px side margins.

Vertical rhythm is governed by a 4px baseline, with standard section gaps of 120px to emphasize the premium feel of the college. Large "Safe Areas" around components prevent the UI from feeling cluttered or "academic" in the traditional, dense sense.

## Elevation & Depth

Hierarchy is communicated through **Glassmorphism** and **Ambient Shadows** rather than stark borders.

1.  **Base Layer:** The soft white background (#F8FAF8).
2.  **Surface Layer (Cards/Containers):** Semi-transparent white (#FFFFFFCC) with a 20px backdrop blur and a 1px solid white border at 20% opacity. This creates a "frosted glass" effect.
3.  **Elevation Shadows:** Use "Natural Shadows"—low opacity, high blur. (Example: `0px 10px 30px rgba(27, 94, 32, 0.05)`). The shadow color is slightly tinted with the Primary Green to keep it organic.
4.  **Floating Elements (Modals/Popovers):** Higher blur radius (40px) and a slightly darker green-tinted shadow to indicate significant vertical distance from the base.

## Shapes

The shape language is extremely soft and approachable. A large default radius of **24px (1.5rem)** is applied to all primary containers and cards, echoing the rounded, friendly curves of modern high-end hardware and organic agricultural forms.

- **Buttons:** Fully pill-shaped (rounded-full) to signify touch-friendliness and modern software trends.
- **Inputs:** 12px radius to provide a slight visual distinction from the larger card containers.
- **Images:** Always clipped with the container's 24px radius to maintain the soft silhouette.

## Components

### Buttons
- **Primary:** Solid Primary Green (#1B5E20) with white text. Pill-shaped. Subtle lift shadow on hover.
- **Secondary:** Glass-style (White 40% opacity) with Primary Green text and a subtle 1px Primary Green border.
- **Accent:** Solid Gold (#D4AF37) with dark text, reserved exclusively for "Apply Now" or "Donate" actions.

### Cards
Cards are the primary container. They must use the **24px radius** and glassmorphism settings (blur + subtle border). Padding inside cards should be a minimum of 32px for desktop to maintain the airy, premium feel.

### Input Fields
Inputs use a "Soft-Focus" state. Default is a light gray background; on focus, the background turns white, and a 2px Primary Green border glows with a soft shadow.

### Chips & Tags
Used for course categories (e.g., "Agronomy," "Horticulture"). These should be small, pill-shaped, using low-saturation versions of the secondary green with dark green text.

### Navigation Bar
A floating glassmorphic header that pins to the top of the viewport. It should have a 1px bottom border (#000000 5% opacity) to separate it from content as the user scrolls.