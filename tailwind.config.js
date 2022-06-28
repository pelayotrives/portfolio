/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '650px',
      md: '750px',
      lg: '975px',
      xl: '1440px',
      xxl: '1920px',
    }
  },
  plugins: [],
}
