/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ¡Ojo con los asteriscos!
  ],
  theme: {
    extend: {
      colors: {
        brand: "#03DAC6",
      }
    },
  },
  plugins: [],
}