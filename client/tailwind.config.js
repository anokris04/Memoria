const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#e9ecef",
        "secondary": "#276257",
        "tertiary": "379392",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}