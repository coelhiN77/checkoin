/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Josefin Sans', 'sans-serif']
      },
      backgroundImage: {
        'backgroundMain': "url('/src/assets/bgWelcome.gif')",
      },
    },
  },
  plugins: [],
}

