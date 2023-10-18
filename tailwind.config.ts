import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      primary: "#B05DF4",
      secondary: "#EBEBEC",
      tertiary: "#362B49",
      heading: "#C5C2D3",
      main: "#2D2A45",
      grey: "#3F3F3F",
      learn: "#FFADAD",
      innovate: "#85E9D1",
      win: "#BE8BFF",
    },
    extend: {
      height: {
        "128": "38rem",
        "78": "20rem",
      },
      width: {
        "128": "38rem",
        "78": "20rem",
        "54": "16rem",
        "60": "18rem",
      },
    },
  },

  plugins: [],
};
export default config;
