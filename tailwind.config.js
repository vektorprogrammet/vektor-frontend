module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or false or 'media'
  theme: {
    screens: {
      'sm': '640px',
      'md': '860px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
