import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
      backgroundImage: {
        "main-Bg-1": "url('/img/main/@main-bg.webp')",
        "main-Bg-2": "url('/img/main/@main-bg2.webp')",
        "main-Bg-3": "url('/img/main/@main-bg3.webp')",
        "main-Bg-4": "url('/img/main/@main-bg4.webp')",
        "main-slide-1": "url('/img/main/mainslide_01.webp')",
        "main-slide-2": "url('/img/main/mainslide_02.webp')",
        "main-slide-3": "url('/img/main/mainslide_03.webp')",
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
        nanumMyeongjo: ["var(--font-nanumMyeongjo)"],
      },
      colors: {
        black: "#1D1D1D",
        gray: "#666666",
        gray2: "#ebebeb",
        gray3: "#fafafa",
        gray4: "#626262",
        gray5: "#F7F7F7",
        gray6: "#9B9FA8",
        gray7: "#D3D5DA",
        "light-gray": "#999999",
        gold: "#D4B156",
        gold2: "#C99F32",
        red: "#E51414",
        headerBg: "rgba(0,0,0,0.9)",
        loadingBg: "rgba(255, 255, 255, 0.8)",
      },
      fontSize: {
        "18": "18.5px",
        "16": "16.5px",
        "14": "14.5px",
      },
      width: {
        "8.5": "34px",
        "30": "7.5rem" /* 120px */,
      },
      height: {
        "8.5": "34px",
        "30": "7.5rem" /* 120px */,
        "32.5": "8.125rem" /* 130px */,
      },
      spacing: {
        "7.5": "1.875rem" /* 30px */,
        "15": "3.75rem" /* 60px */,
        "22": "5.625rem" /* 90px */,
        "25": "6.25rem" /* 100px */,
        "30": "7.5rem" /* 120px */,
        "140px": "140px" /* 140px */,
      },
      boxShadow: {
        m: "0 6px 12px 0 rgba(0, 0, 0, 0.12)",
        m2: "0 -4px 12px 0 rgb(0 0 0 / 0.08), 0 2px 6px 0 rgb(0 0 0 / 0.05)",
        m3: "0 -2px 6px 0 rgb(0 0 0 / 0.05), 0 4px 12px 0 rgb(0 0 0 /0.08)",
      },
      animation: {
        fadeIn: "fadeIn 1.5s",
        hoverLine: "hoverLine 1.5s",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0.25" },
          to: { opacity: "1" },
        },
        hoverLine: {
          from: { width: "0" },
          to: { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
