/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm_cstm': {'max': '480px'},
      'xl_cstm': {'max': '1350px'},
      'lg_cstm': {'max': '950px'},
      'md_cstm': {'max': '770px'},
      'md_hide': '770px',
    }
  },
  plugins: [],
}