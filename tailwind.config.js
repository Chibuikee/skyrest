// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxxs: "400px",
      xxs: "500px",
      xs: "540px",
      s: "600px",
      sm: "640px",
      m: "700px",
      md: "768px",
      mmd: "800px",
      pc: "900px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    extend: {
      fontFamily: {
        "primary-font": ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
