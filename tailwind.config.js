/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
      'slide-left': {
        '0%': { opacity: 0, transform: 'translateX(-50px)' },
        '100%': { opacity: 1, transform: 'translateX(0)' },
      },
      'slide-right': {
        '0%': { opacity: 0, transform: 'translateX(50px)' },
        '100%': { opacity: 1, transform: 'translateX(0)' },
      },
    },
    animation: {
      'slide-left': 'slide-left 0.6s ease-in-out',
      'slide-right': 'slide-right 0.6s ease-in-out',
    },
  },
  },
  plugins: [],
};
