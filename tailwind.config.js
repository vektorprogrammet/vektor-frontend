module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'vektor-blue':'#6fceee',
        'vektor-blue-hover':'#46b6dd',
        'vektor-darkblue':'#023874',
        'vektor-darkfooter': '#022346',
        'vektor-bg':'#fafdff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
