/** @type {import('tailwindcss').Config} */
module.exports = {
   content: 
    ["./App.{js,jsx,ts,tsx}", 
    "./Screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./Categories/**/*.{js,jsx,ts,tsx}",
    "./CategoryCard/**/*.{js,jsx,ts,tsx}",
    "./FeaturedRow/**/*.{js,jsx,ts,tsx}",
    "./RestaurantCards/**/*.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }