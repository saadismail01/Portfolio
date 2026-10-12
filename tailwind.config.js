/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      // Colours are CSS variables (see src/index.css) so light/dark share one set of class names.
      colors: {
        canvas: token("bg"),
        surface: token("surface"),
        ink: { DEFAULT: token("ink"), soft: token("ink-soft"), muted: token("ink-muted") },
        line: token("line"),
        accent: { DEFAULT: token("accent"), soft: token("accent-soft"), violet: token("violet"), cyan: token("cyan") },
      },
      maxWidth: { prose: "68ch" },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(4%, -6%, 0) scale(1.08)" },
        },
        shine: { "0%": { backgroundPosition: "0% 50%" }, "100%": { backgroundPosition: "200% 50%" } },
        pulse2: { "0%, 100%": { opacity: "1" }, "50%": { opacity: ".35" } },
      },
      animation: {
        "fade-up": "fade-up .7s cubic-bezier(.2,.7,.2,1) both",
        drift: "drift 18s ease-in-out infinite",
        "drift-slow": "drift 26s ease-in-out infinite reverse",
        shine: "shine 6s linear infinite",
        blink: "pulse2 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
