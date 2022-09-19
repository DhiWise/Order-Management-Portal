module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        blue_A701: "#0061ff",
        bluegray_50: "#eaecf0",
        blue_A700: "#0a58ff",
        bluegray_100: "#d6dae2",
        indigo_A200: "#5e69ff",
        orange_700: "#ff7a00",
        gray_50: "#f8f9fa",
        bluegray_900: "#262b35",
        bluegray_600: "#5f6c86",
        bluegray_300: "#9ea8ba",
        bluegray_200: "#bac1ce",
        pink_600: "#e01e5a",
        white_A700: "#ffffff",
      },
      borderRadius: {
        radius8: "8px",
        radius16: "16px",
        radius25: "2.5px",
        radius50: "50%",
      },
      borderWidth: { bw083: "0.83px" },
      fontFamily: {
        poppins: "Poppins",
        opensans: "Open Sans",
        gilroy: "Gilroy",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
