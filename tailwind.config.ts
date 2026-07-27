import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#ffffff",
          dark: "#0a0a0a",
          surface: "#f8f7f6",
          "surface-dark": "#1a1a1a",
        },
        text: {
          primary: "#1a1a1a",
          "primary-dark": "#f5f5f5",
          secondary: "#5c5c5c",
          "secondary-dark": "#a0a0a0",
        },
        border: {
          DEFAULT: "#e5e3e0",
          dark: "#2a2a2a",
        },
        accent: {
          DEFAULT: "#0066ff",
          dark: "#0052cc",
        },
        semantic: {
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2.5rem",
        xl: "4rem",
        "2xl": "6rem",
      },
      fontSize: {
        xs: ["12px", { lineHeight: "1.6" }],
        sm: ["14px", { lineHeight: "1.6" }],
        base: ["16px", { lineHeight: "1.8" }],
        lg: ["18px", { lineHeight: "1.8" }],
        xl: ["20px", { lineHeight: "1.4" }],
        "2xl": ["32px", { lineHeight: "1.3" }],
        "3xl": ["48px", { lineHeight: "1.2" }],
        "4xl": ["56px", { lineHeight: "1.1" }],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        lg: "8px",
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-out",
        slideUp: "slideUp 0.5s ease-out",
        slideDown: "slideDown 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
