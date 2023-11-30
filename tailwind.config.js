/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["preview/*.html"],
  safelist: ["mocha", "macchiato", "frappe", "latte"],
  plugins: [require("@catppuccin/tailwindcss")],
};
