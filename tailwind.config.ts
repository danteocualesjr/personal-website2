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
        cream: 'var(--cream)',
        rust: 'var(--rust)',
        mustard: 'var(--mustard)',
        olive: 'var(--olive)',
        brown: 'var(--brown)',
        muted: 'var(--muted)',
        card: 'var(--card)',
        'card-border': 'var(--card-border)',
      },
      fontFamily: {
        serif: ['Libre Baskerville', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
