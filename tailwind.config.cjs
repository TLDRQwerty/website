/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: colors.rose,
        gray: colors.slate,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
