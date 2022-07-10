/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {

      backgroundImage: {
        'spider-man': "url('/img/bg-main.png')",
        'new1': "url('/img/new1.png')",
        'new2': "url('/img/new2.png')",
        'new3': "url('/img/new3.png')",
        'new4': "url('/img/new4.png')",
        'new5': "url('/img/new5.png')",
        'bg-second-page': "url('/img/starwars.png')"
      }
    },

    fontFamily: {
      'gilroy': ['Gilroy-Bold', 'Gilroy-Medium', 'Gilroy-Regular', 'Gilroy-Light'],
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')

  ],
}
