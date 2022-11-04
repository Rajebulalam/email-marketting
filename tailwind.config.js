/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5649CF",
          secondary: "#F4F4F4",
          accent: "#F9F9F9",
          neutral: "#3CB265",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  }
}
