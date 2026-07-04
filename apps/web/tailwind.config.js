/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{src,pages,components,app}/**/*.{ts,tsx,js,jsx,html}',
    '!./{src,pages,components,app}/**/*.{stories,spec}.{ts,tsx,js,jsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#010B13',
        'ink-black': '#010B13',
        surface: '#0F0F12',
        'surface-grey': '#1A1A1A',
        'muted-grey': '#888888',
        'tech-blue': {
          DEFAULT: '#1560BD',
          glow: 'rgba(21, 96, 189, 0.15)',
        },
        'neon-violet': {
          DEFAULT: '#DF00FF',
          glow: 'rgba(223, 0, 255, 0.15)',
        },
        'dark-violet': {
          DEFAULT: '#9400D3',
          glow: 'rgba(148, 0, 211, 0.15)',
        },
      },
      fontFamily: {
        sans: ['var(--font-work-sans)', 'ui-sans-serif', 'system-ui'],
        manrope: ['var(--font-manrope)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular'],
        display: ['var(--font-archivo-black)', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        'concentric-grid': 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'brutalist-grid': 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'light-leak-blue': 'radial-gradient(circle at center, rgba(21, 96, 189, 0.3) 0%, transparent 70%)',
        'light-leak-violet': 'radial-gradient(circle at center, rgba(148, 0, 211, 0.3) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid-sm': '20px 20px',
        'grid-md': '40px 40px',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
