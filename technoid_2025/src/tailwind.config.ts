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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#050505", // Cyberpunk Black
        foreground: "#e0e0e0", // Cyberpunk Text
        primary: {
          DEFAULT: "#00f3ff", // Neon Cyan
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#ff00ff", // Neon Pink
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#ffee00", // Neon Yellow
          foreground: "#000000",
        },
      },
      fontFamily: {
        // This connects your layout.tsx to Tailwind classes
        audiowide: ["var(--font-audiowide)"], 
        roboto: ["var(--font-roboto-condensed)"],
      },
    },
  },
  plugins: [],
};
export default config;