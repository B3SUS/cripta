/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    animation:{
      'pulse':'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
    keyframes:{
      pulse:{
        '100%':{opacity:'1'},
        '50%':{opacity:'0.1'}
      }
    },
    extend: {
      colors: {
        'main': '#0b121c',
        'add': '#162336',
      },
    },
  },
  plugins: [],
}

