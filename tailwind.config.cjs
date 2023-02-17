const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.rose,
        secondary: colors.blue,
        neutral: colors.slate,
      },
    },
  },
  plugins: [],
};
