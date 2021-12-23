module.exports = {
  content: ["./*.html", "./src/**/*.{vue,js,ts,jsx,tsx,css}"],
  theme: {
    screens: {
      little: "200px",
      xs: "300px",
      425: "425px",
      tab: "540px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "2560px",
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
    },
  },
  variants: {},
  plugins: [],
};
