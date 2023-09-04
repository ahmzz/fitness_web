/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tea-green": "#c4f1beff",
        "cambridge-blue": "#a2c3a4ff",
        "cambridge-blue-2": "#869d96ff",
        "paynes-gray": "#525b76ff",
        "space-cadet": "#201e50ff",
      },
      backgroundImage:(theme)=>(
        {
          "mobile-home":"url('./src/assests/HomePageHeroImg.png')"
        }
      ),
      fontFamily:{
        dmsans:["DM Sans","sans-serif"],
        montserrat:["Montserrat","sans-serif"]
      },
      content:{
        
      },
      
    },
    screens:{
      xs:"480px",
      sm:"768px",
      md:"1060px"
    }
  },
  plugins: [],
};
