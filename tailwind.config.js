/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '2xl': '0 35px 40px -15px rgba(0, 0, 0, 0.5)',
        '10xl': '0 65px 80px -35px rgba(0, 0, 0, 0.5)',
      }
    },
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
