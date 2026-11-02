/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          navy: "#06275B",
          darkBlue: "#0755A5",
          primary: "#1265B3",
          lightBlue: "#8CC6EE",
          paleBlue: "#EAF5FF",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-poppins)", "sans-serif"],
        script: ["var(--font-great-vibes)", "cursive"],
      },
      boxShadow: {
        panel: "0 10px 25px -5px rgba(7, 85, 165, 0.15), 0 8px 10px -6px rgba(7, 85, 165, 0.1)",
        glow: "0 0 25px rgba(140, 198, 238, 0.45)",
      },
    },
  },
  plugins: [],
};

