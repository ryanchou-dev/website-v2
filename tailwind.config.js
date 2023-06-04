/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: "Noto Sans Japanese, sans-serif",
      },
      colors: {
        boba: "#ba7472",
        "boba-light": "#d6ad8d",
      },
      scale: {
        flip: "-1",
      },
    },
  },
};
