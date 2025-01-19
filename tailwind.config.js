/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        'sm360': '360px',
        'xs': '480px' 
      },
      fontFamily: {
        mavenPro: ['Maven Pro'],
        roboto: ['Roboto Condensed'],
        smoochSans: ['Smooch Sans'],
      },
    },
  },
  plugins: [],
}

