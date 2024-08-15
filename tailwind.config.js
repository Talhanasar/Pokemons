/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Pocket Monk', 'sans-serif'], // Replace CustomFont with your font's name
      },
    },
  },
  plugins: [],
}

