/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fcf6fd',
          100: '#f7ebfa',
          200: '#ecd5f3',
          300: '#debceb',
          400: '#c58de0',
          500: '#465991', // Main brand color
          600: '#380b40',
          700: '#2e0934',
          800: '#240729',
          900: '#1a051d',
        },
        secondary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#7b337E',
          600: '#6a2c6c',
          700: '#59255b',
          800: '#481e4a',
          900: '#371738',
        },
      },
    },
  },
  plugins: [],
}

