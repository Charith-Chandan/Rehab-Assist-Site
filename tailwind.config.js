/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"],
  
  theme: {
    extend: {
      height: {
        '128': '48rem',
      },
      fontFamily: {
        'nav-font': ["'Josefin Sans'", 'sans-serif'],
      },
      colors:{
        'tram': '#04CFCD',
        'bannerbg': '#af0c3e',
        'bannerS': '#b10f56',
        'bannerE': '#af0c3e',
        'backb': '#787A91',
        'butb': '#334756',
        'but2': '#082032',
      },
      backgroundImage: {
        'banner': "url('../src/')",
      },
    },
    plugins: [
      require('flowbite/plugin')
    ]
  },
  plugins: [],
}