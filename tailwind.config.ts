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
        background: "var(--background)",
        foreground: "var(--foreground)",
        arc: {
          violet: "#663A73",
          "violet-light": "#8A5B9A",
          navy: "#143453",
          "navy-dark": "#0B1E2E",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      backgroundImage: {
        "arc-gradient": "linear-gradient(135deg, #143453 0%, #663A73 100%)",
        "arc-gradient-radial":
          "radial-gradient(circle at 50% 0%, rgba(102,58,115,0.35), rgba(20,52,83,0) 60%)",
        "arc-glow": "radial-gradient(circle, rgba(138,91,154,0.45) 0%, rgba(138,91,154,0) 70%)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
