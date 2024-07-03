/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
          yellowBg:'#F4CE14',
          weirdGreen:'#97BE5A',
          primaryRed:'#a21515',
          dashboardBg:'rgba(69, 1, 23, 0.872)'
        }
    },
  },
  plugins: [],
}