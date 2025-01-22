import daisyui from "daisyui";
import daisyUIThemes from "daisyui/src/theming/themes";
import tailwindcss from "tailwindcss";
import autoprefixer from 'autoprefixer'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
}