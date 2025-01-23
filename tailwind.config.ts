import type { Config } from "tailwindcss";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  darkMode: "class", // or false or 'media'
  theme: {
    screens: {
      sm: "640px",
      md: "860px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        "vektor-blue": "#6fceee",
        "vektor-blue-hover": "#46b6dd",
        "vektor-darkblue": "#023874",
        "vektor-DARKblue": "#022346",
        "table-grey": "#EFEFEF",
        "vektor-kontrollblue": "#292E4C",
        "vektor-bg": "#E2F4FA",
        "vektor-bg-dark": "#2a2a2a",
        "text-light": "#000",
        "text-dark": "#fff",
        "vektor-light-blue": "#c7ecf8",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        vektor: {
          primary: "#6fceee",
          "primary-focus": "#46b6dd",
          "primary-content": "#ffffff",
          secondary: "#023874",
          "secondary-focus": "#001854",
          "secondary-content": "#ffffff",
          accent: "#E2F4FA",
          "accent-focus": "#222222",
          "accent-content": "#ffffff",
          neutral: "#B4C3C8",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",
          "base-100": "#fafdff",
          "base-200": "#f9fafb",
          "base-300": "#d1d5db",
          "base-content": "#1f2937",
          info: "#2094f3",
          success: "#4CAF50",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
    ],
  },
  plugins: [require("postcss-import"), require("daisyui")],
} satisfies Config;
