/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8eea7e",

          secondary: "#ed95d4",

          accent: "#50afae",

          neutral: "#1f2332",

          "base-100": "#e6eaf4",

          info: "#5ab1e7",

          success: "#21e4bd",

          warning: "#f6b76f",

          error: "#f95843",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
