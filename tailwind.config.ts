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
        /* shadcn/ui variables */
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
  plugins: [
    require("postcss-import"),
    require("daisyui"),
    require("tailwindcss-animate"),
  ],
} satisfies Config;
