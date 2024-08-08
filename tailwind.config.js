/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        eclips: "url(./gallery/ellips.png)",
        GreenBlueR: "linear-gradient(251.38deg, #00A868 0%, #00E0FF 99.76%);",
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
