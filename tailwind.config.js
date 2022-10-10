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
        'bg-second-page': "url('/img/starwars.png')",
        'bg-sobre': "url('/img/bg-3.png')",
        'bg-espaco': "url('/img/bg-space.png')",
        'bg-terror': "url('/img/bg-terror.png')",
        'sp1': "url('/img/sp1.png')",
        'sp2': "url('/img/sp2.png')",
        'sp3': "url('/img/sp3.png')",
        'sp4': "url('/img/sp4.png')",
        'sp5': "url('/img/sp5.png')",
        'terr1': "url('/img/terr1.png')",
        'terr2': "url('/img/terr2.png')",
        'terr3': "url('/img/terr3.png')",
        'terr4': "url('/img/terr4.png')",
        'terr5': "url('/img/terr5.png')"

      }
    },

    fontFamily: {
      'gilroy': ['Gilroy-Bold', 'Gilroy-Medium', 'Gilroy-Regular', 'Gilroy-Light'],
    }
  },
  plugins: [ ],
}
