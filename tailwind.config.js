/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      h1: ["36px", { lineHeight: "44px", fontWeight: 700 }],
      h2: ["28px", { lineHeight: "36px", fontWeight: 700 }],
      h3: ["24px", { lineHeight: "32px", fontWeight: 700 }],
      h4: ["20px", { lineHeight: "28px", fontWeight: 700 }],
      h5: ["52px", { lineHeight: "60px", fontWeight: 700 }],
      h6: ["36px", { lineHeight: "44px", fontWeight: 500 }],
      subtitle1: ["18px", { lineHeight: "24px", fontWeight: 700 }],
      subtitle2: ["16px", { lineHeight: "24px", fontWeight: 700 }],
      subtitle3: ["14px", { lineHeight: "20px", fontWeight: 700 }],
      subtitle4: ["12px", { lineHeight: "18px", fontWeight: 700 }],
      body1: ["16px", { lineHeight: "24px", fontWeight: 400 }],
      body2: ["14px", { lineHeight: "24px", fontWeight: 400 }],
      body3: ["14px", { lineHeight: "24px", fontWeight: 500 }],
      body4: ["20px", { lineHeight: "28px", fontWeight: 400 }],
      caption1: ["12px", { lineHeight: "18px", fontWeight: 400 }],
      caption2: ["10px", { lineHeight: "12px", fontWeight: 700 }],
      caption3: ["10px", { lineHeight: "12px", fontWeight: 400 }],
    },
    extend: {
      colors: {
        p100: "#D42B53",
        p200: "#FF364A",
        t100: "#FFFFFF",
        t200: "#BABABA",
        t300: "#808080",
        t400: "#333333",
        t500: "#000000",
      },
      fontFamily: {
        sans: ["NotoSansKR"],
      },
    },
  },
  plugins: [],
};
