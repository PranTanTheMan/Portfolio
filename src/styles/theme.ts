import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    secondary: "#1E2029",
    primary: "#fff",
    quaternary: "#E3E3E3",
    textColorLight: "rgba(176, 176, 176, 0.574)",
    textColorMed: "rgba(176, 176, 176, 0.7)",
    textDark: "rgba(180, 180, 180, 1)",
    bgColorLight: "rgba(255, 255, 255, 0.103)",
    textColorHover: "#e9e9e9",
    bg: "#330f2e87",
  },
  fonts: {
    body: "Darker Grotesque, sans-serif",
    heading: "Darker Grotesque, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        fontFamily: "Darker Grotesque",
        backgroundImage:
          "linear-gradient(to right bottom, #56174d, #4d1545, #44133d, #3b1136, #330f2e);",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        color: "white",
      },
      html: {
        scrollBehavior: "smooth",
      },
    }),
  },
});

export default theme;
