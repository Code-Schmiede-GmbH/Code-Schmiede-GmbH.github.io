import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        anthracite: {
          DEFAULT: "#1C1C1C",
          800: "#2A2A2A",
          700: "#3D3D3D",
        },
        copper: {
          DEFAULT: "#B87333",
          600: "#A0642C",
          300: "#D9A570",
          50: "#F6EDE3",
        },
        sand: {
          DEFAULT: "#F5F5F0",
          200: "#EBEBE4",
          300: "#DEDED5",
        },
        ink: {
          muted: "#5A5A56",
          subtle: "#8A8A84",
        },
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(28, 28, 28, 0.04), 0 8px 24px -12px rgba(28, 28, 28, 0.12)",
        "card-hover":
          "0 1px 2px rgba(28, 28, 28, 0.05), 0 16px 40px -16px rgba(28, 28, 28, 0.18)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
