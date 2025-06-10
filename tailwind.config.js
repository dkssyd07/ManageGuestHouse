// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
          primary: '#1E3A8A',       // 버튼, 강조색
          secondary: '#F1F5F9',     // 배경
          soft: '#E2E8F0',          // 카드 그림자 배경
      },
    },
  },
  plugins: [],
};
