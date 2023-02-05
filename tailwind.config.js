const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Be Vietnam Pro", "Inter", "system-ui", "sans"],
      monospace: ["DM Mono", "monospace"],
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.yellow,
      blue: colors.blue,
      green: colors.green,
      orange: colors.orange,
      purple: colors.purple,
    pink: colors.pink,
    },
    extend: {
      colors: {
        bg: "#A7C7E7",
        "fun-gray-light": "#b2bbcf",
        "fun-gray": "#7b89a8",
        "fun-gray-medium": "#767c85",
        "fun-gray-darker": "#2a2a2c",
        "fun-gray-dark": "#1F1F20",
        "fun-gray-darkest": "#141414",
        "fun-pink": "#F8C8DC",
        "fun-pink-darker": "#000f2e",
        "fun-pink-darkest": "#000c24",
        "fun-pink-dark": "#F8C8DC",
        "fun-pink-light": "#009ac5",
        "fun-white": "#ffffff",
        "fun-purple": "#C3B1E1",
      },
      rotate: {
        '360': '360deg'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        'fadeInAndBounce': 'fadeIn 3s ease-out',
      },
      willChange: {
        'projectCard': 'border-color, opacity, transform',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
