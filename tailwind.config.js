/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    'app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 6px #45ADFF',
        button: '3px 3px #45ADFF',
        income: '3px 3px #6aff45',
        expense: '3px 3px #FB4C4C'
      }
    },
    fontFamily: {
      nunito: 'Nunito'
    },
    colors: {
      transparent: colors.transparent,
      black: {
        // Azulada
        // primary: '#0d1b2a',
        // secondary: '#1b263b'
        // Mas negra
        primary: '#0b090a',
        secondary: '#161a1d'
      },
      white: '#ebecee',
      primary: {
        100: '#45ADFF',
        200: '#3e9ce6',
        300: '#378acc',
        400: '#3079b3'
      },
      error: '#FB4C4C',
      success: '#6aff45',
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      lime: colors.lime,
      green: colors.green,
      teal: colors.teal,
      cyan: colors.cyan,
      blue: colors.blue,
      violet: colors.violet,
      fuchsia: colors.fuchsia,
      rose: colors.rose,
      slate: colors.slate,
      sky: colors.sky,
      neutral: colors.neutral

    }
  },
  plugins: []
}
