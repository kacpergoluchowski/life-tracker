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
       },
       height: {
        'wrapper-height': '90%'
       },
       screens: {
        'desktop': {'min': '1525px'},
        // => @media (min-width: 1525px) { ... }
        '2xl': {'max': '1524px'},
        // => @media (max-width: 1535px) { ... }
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '768px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [],
}

