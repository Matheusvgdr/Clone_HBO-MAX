/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {

      backgroundImage: {
        'spider-man': "url('/img/filme-bg.jpg')"
      }
    },

    fontFamily: {
      'gilroy': ['Gilroy-Bold', 'Gilroy-Medium', 'Gilroy-Regular', 'Gilroy-Light'],
    }
  },
  plugins: [],
}
