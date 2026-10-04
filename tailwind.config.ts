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
        // Rot-Orange als "glühender" Akzent – sparsam einsetzen.
        // Für kleine Schrift ember-600 verwenden (Kontrast auf Off-White).
        ember: {
          DEFAULT: "#E2571E",
          700: "#A33A15",
          600: "#C2461A",
          300: "#F29A6E",
          100: "#FBDCCB",
          50: "#FDF1EA",
        },
        sand: {
          DEFAULT: "#F7F7F4",
          200: "#EEEEEA",
          300: "#E1E1DC",
        },
        silver: {
          DEFAULT: "#C9CBCD",
          100: "#E6E7E8",
        },
        ink: {
          muted: "#5A5A56",
          subtle: "#8A8A84",
        },
      },
      borderRadius: {
        xl2: "0.875rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(28, 28, 28, 0.04), 0 8px 24px -12px rgba(28, 28, 28, 0.12)",
        "card-hover":
          "0 1px 2px rgba(28, 28, 28, 0.05), 0 16px 40px -16px rgba(28, 28, 28, 0.18), 0 18px 44px -24px rgba(226, 87, 30, 0.35)",
        ember: "0 10px 28px -10px rgba(226, 87, 30, 0.55)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
