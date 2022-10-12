/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_light: '#14a83c',
        secondary_light: '#23783a',
        primary_dark: '#23783a',
        secondary_dark: '#14a83c'
      }
    },
  },
  plugins: [],
}
