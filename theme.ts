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
      50: "#F9FFE6",
      100: "#F0FFD1",
      200: "#E6FFB8",
      300: "#DFFF9E",
      400: "#D4FF85",
      500: "#B1E949",
      600: "#8FCB00",
      700: "#6CA300",
      800: "#172908",
      900: "#122400",
    },
    secondary: {
      default: "#004A9F",
      50: "#E6F3FF",
      100: "#E6F3FF",
      200: "#99C9FF",
      300: "#5CA8FF",
      400: "#1F87FF",
      500: "#005FCC",
      600: "#004A9F",
      700: "#003166",
      800: "#022852",
      900: "#001329",
    },
    text: {
      white: "#E6E6E6",
      default: "secondary.800",
      darkest: "secondary.800",
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
      textColor: "secondary.800",
    },
    headingContext: {
      fontFamily: "body",
      fontSize: ["18px", "24px", "28px", "36px"],
      fontWeight: "600",
      lineHeight: "125%",
      textColor: "secondary.800",
    },
    subheading: {
      fontFamily: "body",
      fontSize: ["sm", "md", "lg", "xl", "2xl"],
      fontWeight: "900",
      lineHeight: "155%",
      textColor: "secondary.800",
    },
    context: {
      fontSize: ["sm", "md", "lg", "xl"],
      fontWeight: "400",
      lineHeight: "175%",
      textColor: "secondary.800",
    },
    smContext: {
      fontSize: ["xs", "sm", "md", "lg"],
      lineHeight: "135%",
      textColor: "secondary.800",
    },
    smBold: {
      fontSize: ["sm", "md", "lg", "xl"],
      fontWeight: "700",
      lineHeight: { base: "175%", sm: "135%" },
      textColor: "secondary.800",
    },
    xsContext: {
      fontSize: ["xs", "sm"],
      lineHeight: "155%",
      textColor: "secondary.800",
    },

    // for project detail page
    sanityH2: {
      fontSize: ["28px", "36px"],
      fontWeight: "900",
      lineHeight: "155%",
      textColor: "secondary.800",
    },
    sanityH3: {
      fontSize: ["24px", "28px"],
      fontWeight: "800",
      lineHeight: "135%",
      textColor: "secondary.800",
    },
    sanityH4: {
      fontSize: ["20px", "24px"],
      fontWeight: "800",
      lineHeight: "135%",
      textColor: "secondary.800",
    },
    sanityNormal: {
      fontSize: ["16px", "18px"],
      fontWeight: "200",
      lineHeight: "175%",
      textColor: "secondary.800",
    },
  },
});

export default theme;
