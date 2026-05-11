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
        plaster: "#F4F0E8",
        linen: "#EBE6DC",
        parchment: "#E2DBCF",
        stone: "#C9C0B0",
        fog: "#7A7268",
        mist: "#9A9288",
        ink: "#2C2824",
        tan: "#B8965A",
        tanDark: "#967848",
        terracotta: "#A86B5C",
        pure: "#FDFCF9",
        obsidian: "#F4F0E8",
        graphite: "#EBE6DC",
        gunmetal: "#E2DBCF",
        ironHairline: "#C9C0B0",
        dupontBlue: "#B8965A",
        electricBlue: "#967848",
        flameRed: "#A86B5C",
        ember: "#C4956A",
        sunYellow: "#E8D4B0",
        chrome: "#C9C0B0",
        bone: "#2C2824",
        ash: "#7A7268",
        shadow: "#9A9288",
        charcoal: "#2C2824",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-crimson)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      maxWidth: {
        prose: "720px",
        container: "1280px",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        "500": "500ms",
        "600": "600ms",
        "700": "700ms",
        "800": "800ms",
      },
      boxShadow: {
        card: "0 20px 44px -16px rgba(44, 40, 36, 0.12)",
        "card-hover": "0 28px 56px -18px rgba(44, 40, 36, 0.16)",
      },
    },
  },
  plugins: [],
};
export default config;
