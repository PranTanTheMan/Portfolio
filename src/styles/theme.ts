import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    secondary: "#F9DBBD",
    primary: "#0D0628",
  },
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
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
        borderRadius: "50px",
      },
    }),
  },
});

export default theme;
