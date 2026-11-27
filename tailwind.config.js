/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0A08',
        coal: '#16130F',
        smoke: '#221E18',
        gold: '#C6A15B',
        goldlight: '#E7CE8F',
        golddark: '#9A7B3F',
        cream: '#F7F2EA',
        paper: '#FDFAF4',
        // shadcn/ui design tokens, mapped to the Habib Tazkira's black+gold brand
        background: '#FDFAF4',
        foreground: '#0B0A08',
        card: { DEFAULT: '#FFFFFF', foreground: '#0B0A08' },
        popover: { DEFAULT: '#FFFFFF', foreground: '#0B0A08' },
        primary: { DEFAULT: '#C6A15B', foreground: '#0B0A08' },
        secondary: { DEFAULT: '#16130F', foreground: '#F7F2EA' },
        muted: { DEFAULT: '#F7F2EA', foreground: '#6E675C' },
        accent: { DEFAULT: '#E7CE8F', foreground: '#0B0A08' },
        destructive: { DEFAULT: '#DC2626', foreground: '#FFFFFF' },
        border: '#E7DFCF',
        input: '#E7DFCF',
        ring: '#C6A15B',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'marquee-x': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap, 1rem)))' },
        },
        'marquee-y': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap, 1rem)))' },
        },
        gradient: {
          to: { backgroundPosition: 'var(--bg-size, 300%) 0' },
        },
      },
      animation: {
        marquee: 'marquee-x var(--duration, 40s) linear infinite',
        'marquee-vertical': 'marquee-y var(--duration, 40s) linear infinite',
        gradient: 'gradient 8s linear infinite',
      },
    },
  },
  plugins: [],
};
