/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#6B7D7D",
        "dark-slate-gray": "#374B4A",

        // First color palatte
        "tea-green": "#c4f1beff",
        "cambridge-blue": "#a2c3a4ff",
        "cambridge-blue-2": "#869d96ff",
        "paynes-gray": "#525b76ff",
        "space-cadet": "#201e50ff",

        // Second color palatte
        "raisin-black": "#161925ff",
        "delft-blue": "#23395bff",
        "ucla-blue": "#406e8eff",
        "powder-blue": "#8ea8c3ff",
        "mint-green": "#cbf7edff",
        "mint-green-400":"#e5fbf6",
        "mint-green-900":"#79948e",

        // Third Color Palatte
        "carolina-blue": "#74b3ceff",
        "blue-munsell": "#508991ff",
        "prussian-blue": "#172a3aff",
        "midnight-green": "#004346ff",
        "mint": "#09bc8aff",
      },
      backgroundImage: (theme) => ({
        "mobile-home": "url('./src/assests/HomePageHeroImg.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {},
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
