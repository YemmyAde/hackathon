/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ["Clash"],
        mont: ["Monteserrat"],
      },
      screens: {
        "md": "769px",
        "2xl": "1521px",
      },
    },
  },
  plugins: [],
};

