/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
       fontFamily: {
        'Ubuntu': ['Ubuntu', 'sans-sans'],
        'Tsukimi': ['Tsukimi Rounded', 'sans-sans']
       },
       fontSize: {
        'med-1': '2.5em', 
        'sml-1': '13px',
        'sml-2': '75%'
       },
       width: {
        'med-1': '32%',
        'med-2': '49%',
        'med-3': '45%',
        'med-4': '6vw',
        'med-5': '25vw',
        'med-6': '327px'
       },
       height: {
        'wrapper-height': '90%',
        'wrapper-login': '87vh',
        'wrapper-card': '30%',
        'med-1': '76%'
       },
       screens: {
        'desktop': {'min': '1525px'},
        // => @media (min-width: 1525px) { ... }
        '2xl': {'max': '1524px'},
        // => @media (max-width: 1535px) { ... }
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
        'md': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
      colors: {
        'darkBlue': '#6991C7',
        'blue-1': '#A3BDED',
        'blue-2': '#6991C7'
      }
    },
  },
  plugins: [],
}

