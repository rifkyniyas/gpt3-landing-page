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
        primary: "#FF4820",
        "gradient-from": "#AE67FA",
        "gradient-to": "F49867",
        "orange-text": "#FF8A71",
        "blue-text": "#81AFDD",
        "blue-bg": "#042C54",
        "dark-blue": "#052D56",
        dark: "#040C18",
      },
      backgroundImage: {
        "main-gradient": "linear-gradient(90deg, #AE67FA 0%, #F49867 97.40%)",
      },
    },
  },
  plugins: [],
};
