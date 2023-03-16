/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        cream: "#f2ebe3",
        darkcyan: "#3c8067",
        darkcyanhover: "#2c5e4b",
        verydarkblue: "#1c232b",
        darkgrayisblue: "#6c7289",
        lightpeach: "#FFDAB9",
      },
    },
  },
  plugins: [],
};
