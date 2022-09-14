/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or false or 'media'
  theme: {
    screens: {
      'sm': '640px',
      'md': '860px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        'vektor-blue': '#6fceee',
        'vektor-blue-hover': '#46b6dd',
        'vektor-darblue': '#023874',
        'vektor-darkfooter': '#022346',
        'vektor-bg': '#fafdff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("postcss-import"), require("daisyui")],
}
