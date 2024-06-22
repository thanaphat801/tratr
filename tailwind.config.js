const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html","./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein300: "slidein 1s ease 300ms",
        slidein500: "slidein 1s ease 500ms",
        slidein700: "slidein 1s ease 700ms",
      },
      fontFamily:{
        'prompt':["Prompt", "sans-serif"],
        'sriracha':["Sriracha", "cursive"],
        'sarabun':["Sarabun"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
});

