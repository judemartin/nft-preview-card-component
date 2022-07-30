/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xl": "1440px",
    },
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        "cyan-main": "#00FFF8",
        "soft-blue": "#8BACD9",
        "very-dark-blue-main": "#0D192C",
        "very-dark-blue-card": "#15263F",
        "very-dark-blue-line": "#2E405A",
      },
    },
  },
  plugins: [],
};
