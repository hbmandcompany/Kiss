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
        canvas: "#0A0608",
        surface: "#13090D",
        bone: "#F4EFEA",
        mute: "#8A7F7A",
        "border-bone": "#2A1A1F",
        "border-emphasis": "#4A2A30",
        "accent-oxblood": "#7B0F1F",
        "accent-violet": "#3B1144",
        "accent-crimson": "#C8102E",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #7B0F1F 0%, #3B1144 100%)",
        "glass-glow":
          "radial-gradient(ellipse at 50% 0%, rgba(123, 15, 31, 0.08) 0%, transparent 55%)",
      },
      maxWidth: {
        prose: "65ch",
      },
      borderRadius: {
        brand: "4px",
      },
      boxShadow: {
        "inner-glow":
          "inset 0 1px 0 0 rgba(244, 239, 234, 0.06), inset 0 0 48px rgba(59, 17, 68, 0.12)",
        "inner-glow-strong":
          "inset 0 1px 0 0 rgba(244, 239, 234, 0.08), inset 0 0 64px rgba(123, 15, 31, 0.1)",
      },
      transitionDuration: {
        hover: "200ms",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
