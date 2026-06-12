import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        soil: '#6b3f24',
        leaf: '#1f7a4c',
        gold: '#f6b72f',
        cream: '#fff8e7',
      },
      boxShadow: {
        glow: '0 24px 80px rgba(31,122,76,0.24)',
      },
      backgroundImage: {
        'grain-radial': 'radial-gradient(circle at top left, rgba(246,183,47,0.24), transparent 32%), radial-gradient(circle at bottom right, rgba(31,122,76,0.22), transparent 34%)',
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
