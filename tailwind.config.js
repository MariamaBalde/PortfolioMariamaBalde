/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#11676a',
        secondary: '#f5f5dc', // beige
        accent: '#e8e8e8', // off-white
        'light-gray': '#f8f8f8',
        'text-dark': '#2c3e50',
        'text-light': '#7f8c8d',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}