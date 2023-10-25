/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      // Primary
      "primary-50": "#ECCDF6",
      "primary-100": "#ECCDF6",
      "primary-200": "#E0ABF0",
      "primary-300": "#D081E9",
      "primary-500": "#A103D3",
      "primary-700": "#6B028D",
      "primary-900": "#360146",
      // Scondary
      "secondary-50": "#FFF0CC",
      "secondary-100": "#FFF0CC",
      "secondary-200": "#FFD980",
      "secondary-300": "#FFCD55",
      "secondary-500": "#FFB400",
      "secondary-700": "#D49600",
      "secondary-900": "#805A00",
      // Tertiary
      "tertiary-100": "#EEEEEE",
      "tertiary-200": "#DADADA",
      "tertiary-300": "#A6A6A6",
      "tertiary-500": "#4D4D4D",
      "tertiary-700": "#1F1F1F",
      "tertiary-900": "#000000",
      // Neutral
      "neutral-100": "#EEEEEE",
      "neutral-200": "#DADADA",
      "neutral-300": "#A6A6A6",
      "neutral-500": "#4D4D4D",
      "neutral-700": "#1F1F1F",
      "neutral-900": "#000000",
      // Surface
      "surface-100": "#FFFFFF",
      "surface-200": "#FAFAFA",
      "surface-300": "#FCF9F2",
      "surface-500": "#FDF9F0",
      "surface-700": "#FCF6E8",
      "surface-900": "#FEF6E5",
      // Success
      "success-50": "#FFF0CC",
      "success-100": "#EBFCD8",
      "success-200": "#D3FAB2",
      "success-300": "#B1F188",
      "success-500": "#60D13A",
      "success-700": "#2A961D",
      "success-900": "#0B640D",
      // Info
      "info-100": "#E0E4FF",
      "info-200": "#C2C9FF",
      "info-300": "#A4ADFF",
      "info-500": "#6875FF",
      "info-700": "#343DB7",
      "info-900": "#13197A",
      // Warning
      "warning-100": "#FEFBCC",
      "warning-200": "#FEF69A",
      "warning-300": "#FEF068",
      "warning-500": "#FCDF05",
      "warning-700": "#B59C02",
      "warning-900": "#786400",
      // Danger
      "danger-100": "#FFE6D6",
      "danger-200": "#FFC7AD",
      "danger-300": "#FFA283",
      "danger-500": "#FF4332",
      "danger-700": "#B71926",
      "danger-900": "#7A0925",

      "dark-body": "#c5c5c5",
      white: "#ffffff",
      // primary: "#1e293b",
      // secondary: "#64748b",
    },
    // fontSize: {
    //   "p2": [
    //     "12px",
    //     {
    //       lineHeight: "150%",
    //     },
    //   ],
    // },
    screens: {
      "screen-tablet": "425px",
      "screen-dekstop": "1024px",
    },
  },
  plugins: [],
};

