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
        'neon-pink': 'var(--neon-pink)',
        'neon-cyan': 'var(--neon-cyan)',
        'neon-purple': 'var(--neon-purple)',
        'neon-yellow': 'var(--neon-yellow)',
        muted: 'var(--muted)',
        card: 'var(--card)',
        'card-border': 'var(--card-border)',
      },
      fontFamily: {
        sans: ['Space Mono', 'monospace'],
        pixel: ['Press Start 2P', 'cursive'],
        terminal: ['VT323', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
