/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        test1: "#0f0",
        test2: "#a0a",
        test3: "#00f",
      },
    },
  },
  plugins: [],
};
