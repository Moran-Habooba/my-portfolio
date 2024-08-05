/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#bfc0e4",
        pink: "#f2d5da",
        green: "#c5e2e4",
        pinkBold: "#f3d2c9",
        orang: "#F9E3CF",
        purpleBold: "#9079A8",
        gray: "#878787",
        banana: "#f8f4ba",
      },
      fontFamily: {
        handwriting: ['"Playwright België Walloon"', "cursive"],
      },
      keyframes: {
        fall: {
          "0%": { transform: "translateY(-50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        fall: "fall 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};
