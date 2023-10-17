/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        poppins_light: ["Poppins Light", "sans-serif"],
        poppins_medium: ["Poppins Medium", "sans-serif"],
        poppins_semibold: ["Poppins SemiBold", "sans-serif"],
        poppins_bold: ["Poppins Bold", "sans-serif"],
      },
      screens: {
        ios : '320px',
        samsungS8: "360px",
        xs: '390px',
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl":'1448px',
        "3xl": "1920px",
      },
    },
  },
  variants: {
    extend: {
      display: ["dark"],
    },
  },
  darkMode: ["class"],
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    // ...
  ],
}
