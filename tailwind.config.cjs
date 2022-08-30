/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [" ./index.html ", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monserrat: "Montserrat",
      },
      backgroundImage: {
        plane: "url('./public/img/rr.png')",
      },
    },
  },
  plugins: [],
};
