import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    secondary: "#1E2029",
    primary: "#9A6AFF",
    textColor: "#FFFFFF",
    quaternary: "#E3E3E3",
    textColorLight: "rgba(186, 186, 186, 0.574)",
    textColorHover: "#e9e9e9",
  },
  fonts: {
    body: "Darker Grotesque, sans-serif",
    heading: "Darker Grotesque, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        fontFamily: "Darker Grotesque",
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
