/** @type {import('tailwindcss').Config} */
module.exports = {
   mode: 'jit',
   content: [
      "./src/**/*.{html,ts}",
   ],
   theme: {
      extend: {},
   },
   plugins: [
      require('@tailwindcss/line-clamp'),
      require('tailwind-scrollbar-hide')
   ],
}
