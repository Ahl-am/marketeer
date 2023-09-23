/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require('tailwindcss/defaultTheme');

const colors = {
  ...defaultColors,
  ...{
    "primary" : {
      DEFAULT : '#202124',
    },
    "secondary" : {
      DEFAULT : '#d787f5',
    },
  }
}

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: colors,
      fontFamily : {
        montserrat: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
}

