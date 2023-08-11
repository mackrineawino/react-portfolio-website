/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'Clicker': ['Clicker Script'],
      },
      textColor: {
        'white-dark-mode': '#fff',
      },
    },
  },
  plugins: [],
}

