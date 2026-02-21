/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ─── BRAND COLORS ────────────────────────────────────────
      colors: {
        background: "#0a0a0f",      // deep dark background
        surface: "#12121a",         // card/section background
        border: "#1e1e2e",          // subtle borders
        primary: "#6366f1",         // indigo — your accent color
        "primary-hover": "#4f46e5", // darker indigo on hover
        secondary: "#22d3ee",       // cyan — secondary accent
        muted: "#3f3f5a",           // muted elements
        "text-primary": "#e2e8f0",  // main text
        "text-secondary": "#94a3b8",// secondary text / labels
        "text-muted": "#475569",    // muted text
      },

      // ─── TYPOGRAPHY ──────────────────────────────────────────
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },

      // ─── ANIMATIONS ──────────────────────────────────────────
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(99, 102, 241, 0.6)" },
        },
      },
    },
  },
  plugins: [],
}


