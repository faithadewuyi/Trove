/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      xs: "320px",
      sm: "375px",
      sms: "386px",
      smm: "410px",
      sml: "500px",
      md: "667px",
      mdl: "768px",
      lg: "960px",
      lgl: "1024px",
      xl: "1280px",
    },

    extend: {
      backgroundImage: {
        'hero-image': "url('/hero.png')",

      },

      colors: {

        btn: "#F1BE07",
        btnHover: "#FFD700",

        // btn: "#FFD700",
        btnlight: "#FFEB80",

        footer: "#27272B",
        footerTextLink: "#adadad",
        textcol: "#313131",
        black: "#27272B",

        darkgray: "#CCD4DD",
        lightgray: "#D9D9D9",

        


      },

      fontFamily:{
        title: [ "Montserrat", "sans-serif;"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        'xs': '.35rem',
        'sm': '.55rem',
        'tiny': '.75rem',
        'base': '.9rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
    },
  },
  plugins: [],
}