/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#141414",
        "background-light": "#ffffff",
        "background-dark": "#191919",
        "beige-light": "#F5F5F0",
        "beige-dark": "#2A2A28",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};