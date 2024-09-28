/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        fundo: "url('./src/app/img/FundoQuizz.jpeg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customgreen: "#C3FF93",
        customyellow: "#FFDB5C",
        customsalmon: "#FFAF61",
        custompink: "#FF70AB"
      },
    },
  },
  plugins: [],
};
