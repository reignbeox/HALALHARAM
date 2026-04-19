/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <--- ADD THIS LINE
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#ccff00',
          dark: '#668000',
          light: '#d4ff33', 
        }
      }
    },
  },
  plugins: [],
}