/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        interSemi:["inter-semi"],
        interReg:["inter-reg"],
        interItalic:["inter-italic"],
        interSemiItalic:["inter-semi-italic"]
      },
    },
  },
  plugins: [],
}