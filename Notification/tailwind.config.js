/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#1D1D2B',
        dark2: '#272A39',
        dark3: '#2F3548',
        green: '#1BE1C9',
        redd: '#FD3D82',
        blue: '#00A3E0',
        txt: '#F1F1F1',
        txtdark: '#A8ADBF',
        txtdarker: '#6B6F81',
        gray1: '#4E5364',
      }
    }
  },
  plugins: []
}
