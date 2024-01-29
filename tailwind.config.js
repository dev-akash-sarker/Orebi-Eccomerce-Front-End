/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1604px",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#262626",
        two: "#767676",
      },
    },
  },
  plugins: [],
};
