// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
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
      borderRadius: {
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};