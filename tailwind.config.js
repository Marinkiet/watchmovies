/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#4287f5",
        secondary:'#151312',
        light:{
          100:'#D6C6FF',
          200:'#A8B5DB',
          300:'#9CA4AB',  
        }, //end light
        dark:{
          100:'#221F3D',
          200:'#0F0D23'
        }, //end dark
        accent:"#AB8BFF"
      }, //end colors
    }, //end extend
  },
  plugins: [],
}