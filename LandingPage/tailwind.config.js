/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#F97316",
          "secondary": "#FFD8BC",
          "accent": "FFD8BC",
          "neutral": "#F97316",
          "base-100": "#ffffff",
          "info": "#F97316",
          "success": "#00ff00",
          "warning": "#00ff00",
          "error": "#ff0000",
        },
      },

    ],
  },
  theme: {
    extend: {
      colors: {
        primary: "#F97316",
        secondary: "#FFD8BC",
        accent: "FFD8BC",
        neutral: "#F97316",
        base: "#ffffff",
        info: "#F97316",
        success: "#00ff00",
        warning: "#00ff00",
        error: "#ff0000",
      },

      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
      },
      width: {
        'custom': '52.3rem',
      },
      maxWidth: {
        'custom': '52.3rem',
        'container': '32rem',
        'box': '300px',
        'box-large': '450px'
      },
      rotate: {
        'neg10': '10.21deg',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(10.21deg)' },
          '50%': { transform: 'rotate(0deg)' },
        }
      },
      animation: {
        'rotateIn': 'wiggle linear scroll infinite',
      },
    },
    backgroundImage: {
      'hero-pattern': "url('background.png')",
      'body-background': "url('body-background.png')",
      'gradient-to-left': "url('left-gradient.svg')",
      'gradient-to-right': "url('right-gradient.svg')",
    },

  },
  plugins: [require('daisyui')],
}