/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Nunito Sans", "sans-serif"],
        secondry: ["Nunito", "sans-serif"],
      },

      colors: {
        bgBlack: "#131b1e",
        blueEdit: "#69c9d0",
        redEdit: "#ee1d52",
        iconColor: "#4c5154",
        navtextcolor: "#b2b5b6",
        maintextcolor: "#f5f5f5",
        textbg: "#23272a",
        pjtext: "#ccd6f7",
        navborder: "#1f2c31",
        texticonbg: "#285457",
        btnNavColor: "#283a41",
        btnNavColor1: "#12181c",
        topBtn: "box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;",
        modelbg: "rgba(0, 0, 0, 0.5)",
      },
      fontSize: {
        titleFont: "45px",
      },
    },
  },
  plugins: [],
};
