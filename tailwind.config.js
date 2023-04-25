/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        zinc: {
          850: 'rgb(50, 50, 50)'
        }
      },
      animation: {
        'from-thin-air': 'appear-from-top-with-bounce 300ms ease-out'
      },
      keyframes: {
        'appear-from-top-with-bounce': {
          '0%': {
            opacity: '0',
            transform: 'translatey(-15%) scale(1.05)'
          },
          '50%': {
            transform: 'translatey(2%)'
          },
          '100%': {
            opacity: '1',
            transform: 'translatey(0) scale(1)'
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide')
  ]
}
