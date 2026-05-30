import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#F4E8D5",
        lava: "#4A2C24",
        hibiscus: "#B85C4A",
        tide: "#4F7C78",
        palm: "#2F4F3E",
        shell: "#FFF8EE",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        editorial: "0 24px 80px rgb(74 44 36 / 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
