/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        eclips: "url(./gallery/ellips.png)",
        joinBG: "url(./gallery/join-bgg.png)",
        GreenBlueR: "linear-gradient(251.38deg, #00A868 0%, #00E0FF 99.76%);",
        lighTBlue:
          "linear-gradient(180deg, rgba(143, 243, 251, 0.1) 0%, rgba(85, 144, 149, 0.1) 100%);",
      },
      colors: {
        lightBlueR: "#8FF3FB33",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
