import plugin from "tailwindcss/plugin";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./main.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.sky[400],
          light: colors.sky[50],
          dark: colors.blue[600],
        },
      },
    },
  },
  plugins: [
    plugin(({ theme, addComponents }) => {
      addComponents({
        ".cup": {
          padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
          borderWidth: `3px`,
          borderColor: theme("colors.primary.DEFAULT"),
          borderRadius: theme("borderRadius.lg"),
          transition: `color 0.2s ease, background-color 0.2s ease`,

          "&.active": {
            backgroundColor: theme("colors.primary.DEFAULT"),
            color: "white",
          },
        },
      });
    }),
  ],
};
