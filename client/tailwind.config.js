/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFA500", // Orange
          light: "#FFC04D", // Light Orange
          dark: "#FF8000", // Dark Orange
        },
        secondary: {
          DEFAULT: "#FF4500", // Secondary Orange
          light: "#FF6D33", // Light Secondary Orange
          dark: "#E63900", // Dark Secondary Orange
        },
        gray: {
          // Shades of gray here...
        },
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
    },
  },
  plugins: [],
};
