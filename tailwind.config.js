module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        vektor_blue: '#6fceee',
        DEFAULT: '#007bff',
        dark: '#023874',
      },
      white:{
        DEFAULT: '#fff',
        vekotor_white:'#fafdff',

      },
      pink: '#e83e8c',
      indigo: '#6610f2',
      purple: '#6f42c1',
      red: '#dc3545',
      orange: '#fd7e14',
      yellow: '#ffc107',
      green: '#28a745',
      teal: '#20c997',
      cyan: '#20a8d8',
      black: '#000',
      color_primary: "33, 150, 243",
      color_primary_dark: "25, 118, 210",
      color_accent: "238, 120, 111",
      color_primary_contrast: "255, 255, 255",
      color_accent_contrast: "255, 255, 255",
      color_devil: "#666",
      gray: {
        gray_100: '#f8f9fa',
        gray_200: '#e9ecef',
        gray_300: '#dee2e6',
        gray_400: '#ced4da',
        gray_500: '#adb5bd',
        gray_600: '#6c757d',
        gray_700: '#495057',
        gray_800: '#343a40',
        gray_900: '#212529',
        vektor_grey: '#dbdcdd',
        admin_grey: '#333333',
        DEFAULT: '#8e8185;',
      }

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  
}
