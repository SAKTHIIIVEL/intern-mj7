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
        xl1440: "1440px",   // ✅ custom breakpoint
        xl1600: "1600px",   // (optional)
      },
    },
  },
  plugins: [],
};
