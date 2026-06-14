import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        soil: '#6b3f24',
        leaf: '#1b5e20',
        leafSoft: '#2e7d32',
        gold: '#d4af37',
        cream: '#f7fbf1',
        ink: '#191d17',
        moss: '#41493e',
      },
      boxShadow: {
        glow: '0 24px 80px rgba(27, 94, 32, 0.14)',
        glass: '0 18px 48px rgba(27, 94, 32, 0.08)',
      },
      backgroundImage: {
        'grain-radial': 'radial-gradient(circle at top left, rgba(212,175,55,0.16), transparent 32%), radial-gradient(circle at bottom right, rgba(27,94,32,0.14), transparent 34%)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
