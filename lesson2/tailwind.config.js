/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*index.html'],
  theme: {
    extend: {
      screen:{
        'widescreen':{
          'raw':'(min-aspect-ratio: 3/2)'
        },
        'tallscreen':{
          'raw':'(min-aspect-ratio: 1/2)'
        },

      }
    },
  },
  plugins: [],
}
