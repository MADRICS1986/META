/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0055FF",  // MetaNova Blue
        secondary: "#0A1931",
        glow: "#00C8FF"
      }
    }
  },
  plugins: []
};

