/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    fontFamily: {
      doto: ["Doto", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        bg_info: "rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
