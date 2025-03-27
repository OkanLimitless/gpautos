/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000', // Sonic red
        secondary: '#121212', // Deep black for backgrounds
        accent: '#1A1A1A', // Slightly lighter black for cards
        text: {
          white: '#FFFFFF',
          gray: '#CCCCCC',
          light: '#F2F2F2',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      boxShadow: {
        'sonic': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
} 