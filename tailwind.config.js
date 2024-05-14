/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '256': '64rem',
      },
      keyframes: {
        'slide-in-right': {
          from: {
            transform: 'translateX(100%)',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
        'slide-out-right': {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(100%)',
          },
        },
      },
      animation: {
        'slide-in': 'slide-in-right 4s linear',
        'slide-out': 'slide-out-right 4s linear',
      },
      colors: {
        primary: {
          "bg": "#2F324C",
          "txt": "#FDF9FE",
          "bg-hv":"#474770",
          "brd-hv": "FAF2FA"
        },
        secondary: {
          "bg": "#FFDDBF",
          "txt": "#252425"
        },
        thirty: {
          "bg": "#FFD371",
          "txt": "#FDF9FE"
        },
        fourty: {
          "bg": '#E0B963'
        },
        'same-header': {
          "bg": "#2552ac"
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin') // add this line
  ],
}

