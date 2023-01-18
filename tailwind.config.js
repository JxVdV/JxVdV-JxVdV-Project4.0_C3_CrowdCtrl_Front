/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    
    extend: {
      colors: {
        'primary-orange': '#de6107',
        'primary-gray': '#494949',
      },
    },
  },
  plugins: [],
}
