import type { Config } from "tailwindcss";
import path from "path"; // Import the 'path' module

const config: Config = {
  // We are now telling Tailwind the *exact* full path
  content: [
    path.join(__dirname, "./src/app/**/*.{js,ts,jsx,tsx,mdx}"),
    path.join(__dirname, "./src/components/**/*.{js,ts,jsx,tsx,mdx}"),
  ],
  theme: {
    extend: {
      colors: {
        "neon-cyan": "#00f3ff",
        "neon-pink": "#ff00ff",
        "neon-yellow": "#ffee00",
        "cyber-black": "#050505",
        "cyber-gray": "#0a0a0a",
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)"],
        rajdhani: ["var(--font-rajdhani)"],
      },
    },
  },
  plugins: [],
};
export default config;
