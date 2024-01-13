import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "ul, ol": {
        color: "secondary.800",
        fontSize: "18px",
        lineHeight: "225%",
        marginLeft: "60px",
      },
      a: {
        textDecoration: "none",
      },
    },
  },
  colors: {
    primary: {
      default: "#B1E949",
      50: "#D2EEE8",
      100: "#A6DDD1",
      200: "#89D2C2",
      300: "#5CC1AB",
      400: "#3EA38D",
      500: "#2D7666",
      600: "#1C4A40",
      700: "#163B33",
      800: "#112D27",
      900: "#0B1E1A",
    },
    secondary: {
      default: "#004A9F",
      50: "#E6F3FF",
      100: "#A2C581",
      200: "#8DB865",
      300: "#79A84D",
      400: "#658C40",
      500: "#507033",
      600: "#3C5427",
      700: "#324620",
      800: "#283819",
      900: "#1E2A13",
    },
    tertiary: {
      50: "#F8EDC9",
      100: "#E7BE36",
      200: "#DBAE1A",
      300: "#B79115",
      400: "#927411",
      500: "#6D570D",
      600: "#5B480B",
      700: "#483909",
      800: "#362A07",
      900: "#241C05",
    },
    text: {
      white: "#E6E6E6",
      default: "primary.900",
      darkest: "primary.900",
    },
  },
  fonts: {
    body: `'Poppins', sans-serif`,
  },
  textStyles: {
    heading: {
      fontFamily: "body",
      fontSize: ["lg", "xl", "2xl", "3xl", "4xl"],
      fontWeight: "900",
      lineHeight: "155%",
      textColor: "primary.900",
    },
    headingContext: {
      fontFamily: "body",
      fontSize: ["18px", "24px", "28px", "36px"],
      fontWeight: "600",
      lineHeight: "125%",
      textColor: "primary.900",
    },
    subheading: {
      fontFamily: "body",
      fontSize: ["sm", "md", "lg", "xl", "2xl"],
      fontWeight: "900",
      lineHeight: "155%",
      textColor: "primary.900",
    },
    context: {
      fontSize: ["sm", "md", "lg", "xl"],
      fontWeight: "400",
      lineHeight: "175%",
      textColor: "primary.900",
    },
    smContext: {
      fontSize: ["xs", "sm", "md", "lg"],
      lineHeight: "135%",
      textColor: "primary.900",
    },
    smBold: {
      fontSize: ["sm", "md", "lg", "xl"],
      fontWeight: "700",
      lineHeight: { base: "175%", sm: "135%" },
      textColor: "primary.900",
    },
    xsContext: {
      fontSize: ["xs", "sm"],
      lineHeight: "155%",
      textColor: "primary.900",
    },
  },
});

export default theme;
