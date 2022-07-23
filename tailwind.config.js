/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '2rem',
          sm: '4rem',
          lg: '6rem',
          xl: '8rem',
          '2xl': '10rem',
        },
       
      },
    },
  },
  plugins: [],
}
