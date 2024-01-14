/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class",
  theme: {
    screens: {
      xs: "360px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      "2lg": "1160px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        backGround: "#E5E5E5",
        navyBlue: "#086250",
        forestGreen: "#089373",
        lightBlue: "#2EC5CE",
        primaryBlack: "#575757",
        primaryBlack2: "#202020",
        ui_primary: "#1F284F",
        ui_secondary1: "#089373",
        tertiary: "#FAFBFC",
        Ash: "#575757",
        ui_primary2: "#228B22",
        ui_button: "#0070F0",
        linear: "#F5F0FF",
        db_ui_secondary: "#0070F0",
        dark_bg: "#111420",
        dark_primary: "#1a2235",
        dark_field: "#1c2536",
        dark_secondary: "#1c2438",
        dark_text: "#B7C5CC",
      },
      keyframes: {
        "animate-fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "animate-fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-in": "animate-fade-in 0.4s ease-out backwards",
        "fade-out": "animate-fade-out 0.4s ease-out forwards",
      },
    },
    plugins: [],
  },
};
