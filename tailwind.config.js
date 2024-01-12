/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./compte.html",
    "./js/**/*.js",
    "./support.html",
    "./y-6-Colection.html",
    "./a propos.html",
    "./space-y-6.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
