import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    secondary: "#1E2029",
    primary: "#9A6AFF",
    tertiary: "#FFFFFF",
    quaternary: "#E3E3E3",
  },
  fonts: {
    heading: "General Sans, sans-serif",
    body: "General Sans, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        fontFamily:
          "Montserrat-Regular, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        color: "white",
        backgroundColor: "secondary",
      },
      html: {
        scrollBehavior: "smooth",
      },
      "&::-webkit-scrollbar": {
        width: "0.5em",
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: "0px",
        background: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "primary",
        borderRadius: "2px",
      },
    }),
  },
});

export default theme;
