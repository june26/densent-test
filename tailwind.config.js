module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco"],
      },
      boxShadow: {
        card: "0 20px 70px -30px rgba(15, 23, 42, 0.3)",
      },
      colors: {
        charcoal: {
          900: "#111827",
          950: "#0f172a",
        },
        sand: {
          100: "#f7f1ea",
          200: "#ede0cf",
          300: "#dbc6a7",
          400: "#c7a57e",
          500: "#b1844c",
        },
        warm: {
          50: "#fbf5ef",
          100: "#f4ebe3",
        },
        tropical: {
          400: "#6d9d5d",
        },
      },
    },
  },
  plugins: [],
};
