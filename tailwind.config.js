/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      nunito: ['Nunito', 'sans-serif']
    },
    colors: {
      black: '#30444f',
      white: '#ebecee',
      primary: {
        100: '#5B8291',
        200: '#527583',
        300: '#496874',
        400: '#405B66'
      },
      secondary: {
        100: '#98DAD8',
        200: '#89C4C2',
        300: '#7AAEAD',
        400: '#6A9997'
      }
    }
  },
  plugins: []
}
