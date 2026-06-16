import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#0f4d39",
          navy: "#132238",
          ink: "#1f2937",
          line: "#e5e7eb",
          muted: "#f8fafc"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 77, 57, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
