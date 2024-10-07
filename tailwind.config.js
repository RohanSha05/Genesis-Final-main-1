/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },

      animation: {
        slideLeftToRight: 'slideLeftToRight 5s ease-in-out',
        slideTopToBottom: 'slideTopToBottom 5s ease-in-out',
      },
      keyframes: {
        slideLeftToRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideTopToBottom: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

