module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      pop: ["Poppins", "sans-serif"],
      // mon: ["Montserrat", "sans-serif"],
      // rob: ["Roboto", "sans-serif"],
      // heb: ["Heebo", "sans-serif"],
    },
    colors: {
      transparent: {
        DEFAULT: "transparent",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
      black: {
        DEFAULT: "#000000",
        // c282538: "#282538",
      },
      gray: {
        DEFAULT: "#9E9E9E",
        cFAFAFB: "#FAFAFB",
        c4F4F4F: "#4F4F4F",
        c828282: "#828282",
        cBDBDBD: "#BDBDBD",
        cF6F7FB: "#F6F7FB",
        cF2F2F2: "#F2F2F2",
        cE0E0E0: "#E0E0E0",
        cF6F8FB: "#F6F8FB",
        // cB9BDCF: "#B9BDCF",
        // cB7BCCE: "#B7BCCE",
        // cA9A9A9: "#A9A9A9",
        // c333333: "#333333",
      },
      red: {
        DEFAULT: "#F44336",
        // cEB5757: "#EB5757",
      },
      green: {
        DEFAULT: "#4CAF50",
        c219653: "#219653",
        // c27AE60: "#27AE60",
      },
      blue: {
        DEFAULT: "#2196F3",
        c2F80ED: "#2F80ED",
        c97BEF4: "#97BEF4",
        // c334680: "#334680",
        // c1E86FF: "#1E86FF",
        // c2D9CDB: "#2D9CDB",
        // c100E1D: "#100E1D",
      },
    },
    extend: {
      // backgroundImage: (theme) => ({
      //   "bg-example": "url('/example-image.png')",
      // }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
