/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      screens: {
         /* 🔽 MAX-WIDTH (LESS THAN) */
        "max-xs": { max: "359px" },   // < 360px
        "max-sm": { max: "479px" },   // < 480px
        "max-md": { max: "767px" },   // < 768px
        "max-lg": { max: "1023px" },  // < 1024px
        "max-xl": { max: "1279px" },  // < 1280px
        "max-2xl": { max: "1535px" }, // < 1536px
        
        xl1440: "1440px",   // ✅ custom breakpoint
        xl1600: "1600px",   // (optional)
      },
    },
  },
  plugins: [],
};
