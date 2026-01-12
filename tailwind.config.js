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
        primary: '#E10600', // Ferrari Red
        secondary: '#111111', // Anthracite background
        accent: '#1A1A1A', // Card background
        light: '#FFFFFF', // White for sections
        'light-gray': '#F5F5F5', // Light gray background
        text: {
          white: '#FFFFFF', // White text
          dark: '#1F1F1F', // Dark text for light backgrounds
          gray: '#CCCCCC', // Gray text
          light: '#F2F2F2', // Light text
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        inter: ['var(--font-inter)'],
        outfit: ['var(--font-outfit)'],
        bebas: ['var(--font-bebas)'],
        heading: ['var(--font-outfit)'],
      },
      boxShadow: {
        'sonic': '0 8px 24px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
} 