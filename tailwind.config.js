module.exports = {
  content: ["./*.html", "./src/**/*.{vue,js,ts,jsx,tsx,css}"],
  theme: {
    screens: {
      little: "200px",
      xs: "300px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      colors: {
        night: "#141414",
        egg: "#f0ead6",
      },
      fontFamily: {
        sans: ['"Zen Kurenaido"', "sans-serif"],
      },
      fontSize: {
        five: "4.9rem",
      },
      spacing: {
        three: "3%",
        five: "5%",
        ten: "10%",
        26: "26%",
        thirty: "30%",
        33: "33%",
        forty: "40%",
        41: "41%",
        49: "49%",
        fifty: "50%",
        sixty: "60%",
        65: "65%",
        eighty: "80%",
        ninety: "90%",
        ninetyFive: "95%",
      },

      keyframes: {
        slideInTop: require("./src/shared/animations.js").slideInTop,
        slideInLeft: require("./src/shared/animations.js").slideInLeft,
        slideInRight: require("./src/shared/animations.js").slideInRight,
        slideInBottom: require("./src/shared/animations.js").slideInBottom,
        fadeInTop: require("./src/shared/animations.js").fadeInTop,
        fadeInLeft: require("./src/shared/animations.js").fadeInLeft,
        fadeInRight: require("./src/shared/animations.js").fadeInRight,
        fadeInBottom: require("./src/shared/animations.js").fadeInBottom,
        btnEnlarge: require("./src/shared/animations.js").btnEnlarge,
      },

      animation: {
        slideInTop: "slideInTop 1s ease-out 1 forwards",
        slideInLeft: "slideInLeft 2s ease-out 1 forwards",
        slideInRight: "slideInRight 2s ease-out 1 forwards",
        slideInBottom: "slideInBottom 1s ease-out 1 forwards",
        fadeInTop: "fadeInTop 2s ease-out forwards",
        fadeInLeft: "fadeInLeft 1s ease-out forwards",
        fadeInRight: "fadeInRight 1s ease-out forwards",
        fadeInBottom: "fadeInBottom 2s ease-out forwards",
        btnEnlarge: "btnEnlarge 2s ease-out 1",
      },
    },
  },
  variants: {},
  plugins: [],
};
