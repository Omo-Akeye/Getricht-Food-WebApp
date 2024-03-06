/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'upright': ['Cormorant Upright', 'serif'],
        'sans': ['Open Sans', 'sans-serif'],
      },
      backgroundImage : {
        'about-bg': "url('/image/BG.jpg')",
         'blur_hero' : "url('/images/Hero img _blur.png')"
      },
      colors : {
        'primary' : '#DCCA87',
        'ash' : '#AAA',
        'primary-b' : 'rgba(220, 202, 135, 0.20)'
      }
    },
  },
  plugins: [],
}

