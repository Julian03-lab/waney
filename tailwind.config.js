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
        100: '#5B8291',
        200: '#527583',
        300: '#496874',
        400: '#405B66'
      },
      secondary: {
        100: '#72F0FF',
        200: '#89C4C2',
        300: '#7AAEAD',
        400: '#6A9997'
      }
    }
  },
  plugins: []
}
