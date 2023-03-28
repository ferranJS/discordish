/** @type {import('tailwindcss').Config} */
module.exports = {
   mode: 'jit',
   content: [
      "./src/**/*.{html,ts}",
   ],
   theme: {
      extend: {
         colors: {
            zinc: {
               850: 'rgb(50, 50, 50)'
            }
         }
      },
   },
   plugins: [
      require('@tailwindcss/line-clamp'),
      require('tailwind-scrollbar-hide')
   ],
}
