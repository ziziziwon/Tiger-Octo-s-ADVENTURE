/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        tiger: "#FF9B00",       // 호랑이 메인 컬러
        cream: "#FCECDD",       // 부드러운 베이지
        sky: "#5F7FFF",         // 하늘색 (공연, 꿈)
        background: "#FFFDF9",  // 배경
        pixel: {
          pink: "#FFB7C5",
          blue: "#ACD9FF",
          green: "#DDF6F4",
          dark: "#0f172a",
        }
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        sans: ['Galmuri11', 'Galmuri9', '"Press Start 2P"', 'monospace'],
      },
      animation: {
        bounce: "bounce 1s infinite",
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
