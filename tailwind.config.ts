import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "rgb(236 254 255)",
          100: "rgb(207 250 254)",
          200: "rgb(165 243 252)",
          300: "rgb(103 232 249)",
          400: "rgb(34 211 238)",
          500: "rgb(6 182 212)",
          600: "rgb(8 145 178)",
          700: "rgb(14 116 144)",
          800: "rgb(21 94 117)",
          900: "rgb(22 78 99)",
          950: "rgb(8 51 68)"
        }
      }
    }
  },
  plugins: []
} satisfies Config;

