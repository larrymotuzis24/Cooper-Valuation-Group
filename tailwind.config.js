/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
      'Roboto': ['Roboto', 'sans-serif'],
      'Inter': ['Inter', 'sans-serif']
      },
      colors: {
        'primary': '#588157',
        'second': '#3A5A40',
        'third': '#344E41',
        'textbox': '#A3B18A',
        'nongreen': '#DAD7CD'
      }
    },
  },
  plugins: [],
}

