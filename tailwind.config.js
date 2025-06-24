/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'terros-blue': '#58739c',
        'terros-mint': '#31d3ae',
        'terros-light': '#7ed7c1',
      },
    },
  },
  plugins: [],
}
