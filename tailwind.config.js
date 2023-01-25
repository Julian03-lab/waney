/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 6px #45ADFF'
      }
    },
    fontFamily: {
      nunito: 'Nunito'
    },
    colors: {
      black: '#1E1E24',
      white: '#ebecee',
      primary: {
        100: '#45ADFF',
        200: '#67d8e6',
        300: '#5bc0cc',
        400: '#50a8b3'
      },
      error: '#FB4C4C'
    }
  },
  plugins: []
}
