/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 6px #45ADFF',
        button: '3px 3px #ebecee'
      }
    },
    fontFamily: {
      nunito: 'Nunito'
    },
    colors: {
      black: {
        primary: '#191A1F',
        secondary: '#202126'
      },
      white: '#ebecee',
      primary: {
        100: '#45ADFF',
        200: '#3e9ce6',
        300: '#378acc',
        400: '#3079b3'
      },
      error: '#FB4C4C',
      success: '#6aff45'
    }
  },
  plugins: []
}
