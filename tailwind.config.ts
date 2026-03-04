import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 温暖人文色彩系统
        primary: {
          DEFAULT: "#F6AD55", // 暖橙
          light: "#FBD38D",
          dark: "#DD6B20",
        },
        secondary: {
          DEFAULT: "#9F7AEA", // 柔和紫
          light: "#B794F6",
          dark: "#6B46C1",
        },
        background: {
          DEFAULT: "#FAFAFA", // 温暖白
          warm: "#FFF9F0",
        },
        text: {
          primary: "#2D3748", // 深灰
          secondary: "#4A5568",
          muted: "#718096",
        },
        accent: {
          rose: "#F687B3",
          teal: "#38B2AC",
          amber: "#F6AD55",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Crimson Text", "Georgia", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;