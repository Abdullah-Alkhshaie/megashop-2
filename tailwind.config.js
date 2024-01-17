/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f12a43",
        light: "#f7f7f7",
        dark: "#888",
        font: "#232323",
        gray: "#f0f0f0",
      },
    },
  },
  plugins: [],
};
