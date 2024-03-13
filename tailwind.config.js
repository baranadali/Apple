/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      SfProBold: ["sfProBold", "sans-serif"],
      SfProSemiBold: ["SfProSemiBold", "sans-serif"],
      SfPro: ["SfProRegular", "sans-serif"],
    },
    screens: {
      mobile: { 'max': '768px' },
    },
    extend: {
      backgroundImage: {
        'first-content' : "url('./assets/images/first-content.jpg')",
      },
      colors : {
        "woodsmoke": "#161617",
        "athens" : "#F5F5F7",
        "shark": "#1D1D1F",
        "science-blue" : "#0066CC",
        "appleblack" : {
          72: "rgba(0, 0, 0, 0.72)"
        },
        "nero": {
          80: "rgba(255, 255, 255, 0.8)",
        }
      }
    },
  },
  plugins: [],
}