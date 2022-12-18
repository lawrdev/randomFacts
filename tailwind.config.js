/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#a3195b',
        'secondary': '#FFCA2A',
        'body': '#f2f2f2',
      }
    },
  },
  plugins: [],
}
