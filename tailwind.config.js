/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Now Tailwind knows that "brand" means your specific neon green!
        brand: {
          DEFAULT: '#ccff00',
          dark: '#668000', // You can even save your dark variants here
          light: '#d4ff33', 
        }
      }
    },
  },
  plugins: [],
}