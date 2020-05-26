// const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  // purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  // theme: {
  //   extend: {},
  // },
  purge: {
    // enabled: true,
    content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans:['Inter']
      },
      fontSize: {
        '7xl': '5.125rem'
      }
    },
  },
  variants: {},
  plugins: [],
}
