/** @type {import('tailwindcss').Config} */

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Enable dark mode with class strategy
    theme: {
      extend: {
        fontFamily: {
          antique: ["'Antique Olive'", "sans-serif"], // Custom font
        },
        colors: {
          dark: {
            100: "#f8f8f8",
            200: "#e0e0e0",
            300: "#bbbbbb",
            400: "#666666",
            500: "#444444",
            600: "#2a2a2a",
            700: "#1f1f1f",
            800: "#181818",
            900: "#0f0f0f",
            950: "#0a0a0a",
          },
          primary: {
            100: "#f5f3ff",
            200: "#ede9fe",
            300: "#ddd6fe",
            400: "#c4b5fd",
            500: "#a855f7", // Purple-500
            600: "#9333ea",
            700: "#7e22ce",
            800: "#6b21a8",
            900: "#581c87",
          },
        },
        boxShadow: {
          'glow-purple': '0 0 15px rgba(168, 85, 247, 0.5)',
          'glow-purple-lg': '0 0 30px rgba(168, 85, 247, 0.4)',
        },
        animation: {
          'spin-slow': 'spin 15s linear infinite',
          'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        backgroundImage: {
          'dark-gradient': 'linear-gradient(to bottom, #121212, #0a0a0a)',
          'purple-glow': 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
        },
      },
    },
    plugins: [],
  };
  