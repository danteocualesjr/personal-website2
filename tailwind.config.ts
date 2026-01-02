import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: 'var(--accent)',
        'accent-light': 'var(--accent-light)',
        muted: 'var(--muted)',
        card: 'var(--card)',
        'card-border': 'var(--card-border)',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        serif: ['Crimson Pro', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}
export default config
