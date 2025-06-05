const {heroui} = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}" // Add app directory for Next.js projects
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class', // Enable dark mode support
  plugins: [heroui()] // Ensure plugins array is correctly formatted
};
