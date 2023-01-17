/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      nunito: 'Nunito'
    },
    colors: {
      black: '#1E1E24',
      white: '#ebecee',
      primary: {
        100: '#72F0FF',
        200: '#67d8e6',
        300: '#5bc0cc',
        400: '#50a8b3'
      }
    }
  },
  plugins: []
}
