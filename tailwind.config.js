/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        dot1: "dots 1.5s infinite",
        dot2: "dots 1.5s infinite 0.3s",
        dot3: "dots 1.5s infinite 0.6s",
      },
      keyframes: {
        dots: {
          "0%, 20%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
