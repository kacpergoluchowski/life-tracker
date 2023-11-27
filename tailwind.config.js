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
        'med-1': '2.5em' 
       },
       width: {
        'med-1': '32%'
       },
       height: {
        'wrapper-height': '90%'
       }
    },
  },
  plugins: [],
}

