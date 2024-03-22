/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "color-primary":"#991b1b",
        "color-sharp-red":"maroon",
        "color-gray":"333",
        "color-white":"#fff",
        "color-blob":"A427DF",
        "color-primary-dark":"010417",
        "color-primary-light":"020726",
        "color-secondary":"#ff7d3b"
      }
    },
  },
  plugins: [],
}

