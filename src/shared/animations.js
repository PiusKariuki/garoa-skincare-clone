const animations = {
  // ................slide animations
  slideInTop: {
    "0%": {
      top: "16%",
      opacity: "0",
    },
    "50%": {
      opacity: "1",
    },
    "100%": {
      top: "26%",
      opacity: "1",
    },
  },
  slideInLeft: {
    "0%": {
      left: "15%",
      opacity: " 0",
    },
    "50%": {
      opacity: " 1",
    },
    "100%": {
      left: "25%",
      opacity: " 1",
    },
  },
  slideInRight: {
    "0%": {
      right: "15%",
      opacity: "0",
    },
    "50%": {
      opacity: "1",
    },
    "100%": {
      right: "23%",
      opacity: "1",
    },
  },
  slideInBottom: {
    "0%": {
      top: "55%",
      opacity: "0",
    },
    "50%": {
      opacity: "1",
    },
    "100%": {
      top: "48%",
      opacity: "1",
    },
  },
  //  ....................fade animations
  fadeInLeft: {
    "0%": {
      left: "40%",
      opacity: "0%",
    },
    "60%": {
      opacity: "1",
    },
    "100%": {
      left: "33%",
    },
  },

  fadeInTop: {
    "0%": {
      top: "18%",
      opacity: "0%",
    },
    "60%": {
      opacity: "1",
    },
    "100%": {
      top: "26%",
    },
  },
  fadeInRight: {
    "0%": {
      right: "39%",
      opacity: "0%",
    },
    "60%": {
      opacity: "1",
    },
    "100%": {
      right: "29%",
    },
  },
  fadeInBottom: {
    "0%": {
      top: "50%",
      opacity: "0%",
    },
    "60%": {
      opacity: "1",
    },
    "100%": {
      top: "41%",
    },
  },
  // btn animations
  btnEnlarge: {
    "0%": {
      top: "90%",
      width: "2rem",
      height: "2rem",
      borderRadius: "50%",
      backgroundColor: "#fff",
      fontSize: "0rem",
      padding: "0",
      color: "#fff",
    },
    "100%": {
      top: "65%",
      backgroundColor: "#fff",
      color: "#000",
    },
  },
};

module.exports = animations;
