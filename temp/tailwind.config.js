module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue: { 500: "#1da1f2", 800: "#0a66c2", A400: "#1877f2" },
        blue_gray: {
          100: "#cccccc",
          200: "#b0cdba",
          900: "#373737",
          "100_01": "#d1d1d1",
          "200_7f": "#b0cdba7f",
          "200_66": "#b0cdba66",
          "900_01": "#24285b",
        },
        red: { 200: "#d69e9e" },
        green: { 900: "#005e20" },
        black: { 900: "#0c0c0c", "900_3f": "#0000003f", "900_01": "#000000" },
        gray: {
          50: "#fbfbfb",
          200: "#eeeeee",
          300: "#e0eae3",
          500: "#939393",
          600: "#9a7b7b",
          "300_01": "#e6e6e6",
        },
        deep_orange: { 200: "#f4a28c" },
        light_green: { "800_42": "#5e814242" },
        yellow: { A700: "#ffd200" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { abeezee: "ABeeZee", montserrat: "Montserrat" },
      boxShadow: {
        bs2: "0px 0px  14px 0px #eeeeee",
        bs1: "0px 0px  24px 0px #eeeeee",
        bs4: "0px 0px  3px 0px #b0cdba7f",
        bs3: "0px 0px  14px 0px #d1d1d1",
        bs: "0px 4px  4px 0px #0000003f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
