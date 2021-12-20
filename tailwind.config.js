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
        13: "13%",
        eighteen: "18%",
        twenty: "20%",
        23: "23%",
        25: "25%",
        26: "26%",
        thirty: "30%",
        33: "33%",
        forty: "40%",
        41: "41%",
        49: "49%",
        fifty: "50%",
        fiftySix: "56%",
        sixty: "60%",
        65: "65%",
        seventy: "70%",
        eighty: "80%",
        ninety: "90%",
        ninetyFive: "95%",
      },
    },
  },
  variants: {},
  plugins: [],
};
