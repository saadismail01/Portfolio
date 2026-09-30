/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        sans:    ["Inter", "sans-serif"],
      },
      colors: {
        cyan: {
          DEFAULT: "#00f5ff",
        },
      },
      keyframes: {
        "slide-left": {
          "0%":   { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-right": {
          "0%":   { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        floatUp: {
          "0%":   { transform: "translateY(0) rotate(0deg)", opacity: "0.6" },
          "100%": { transform: "translateY(-110vh) rotate(720deg)", opacity: "0" },
        },
      },
      animation: {
        "slide-left":  "slide-left 0.5s cubic-bezier(0.25,0.46,0.45,0.94) both",
        "slide-right": "slide-right 0.5s cubic-bezier(0.25,0.46,0.45,0.94) both",
        "float-up":    "floatUp 15s linear infinite",
      },
    },
  },
  plugins: [],
};
