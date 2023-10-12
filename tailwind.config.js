/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  safelist: ["mocha", "macchiato", "frappe", "latte"],
  plugins: [require("@catppuccin/tailwindcss")],
};
