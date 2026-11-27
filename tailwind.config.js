/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
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
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
