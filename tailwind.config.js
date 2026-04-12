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
        primary: '#DC2626',
        secondary: '#1A1A1A',
        accent: '#DC2626',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        inter: ['var(--font-inter)'],
        heading: ['var(--font-outfit)'],
        outfit: ['var(--font-outfit)'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
    },
  },
  plugins: [],
}