/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./codingan/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        hmSansRegular : "'HM Sans Regular', serif",
        hmSansLatinBold : "'HM Sans Latin Bold', serif",
        hmSansLatinRegular : "'HM Sans Latin Regular', serif",
        hmSansLatinSemiBold : "'HM Sans Latin SemiBold', serif",
      }
      
    },
  },
  plugins: [],
}

