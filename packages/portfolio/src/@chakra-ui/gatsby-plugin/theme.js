import { extendTheme } from "@chakra-ui/react";

const Text = {
  variants: {
    H1: {
      fontFamily: "Alte",
      fontSize: "36px",
      fontWeight: "bold",
      letterSpacing: 0,
    },
    H2: {
      fontFamily: "Alte",
      fontSize: "28px",
      letterSpacing: 0,
    },
    title: {
      fontFamily: "Alte",
      fontSize: "24px",
      fontWeight: "bold",
    },
    body: {
      fontFamily: "Alte",
      fontSize: "15px",
    },
    bodySm: {
      fontFamily: "Alte",
      fontSize: "12px",
    },
  },
};

export const palette = {
  primaryBlue: "#303f9f",
  primaryDarkBlue: "#283593",
  primaryDarkerBlue: "#1a237e",
  primaryOrange: "#ffb300",
};

const theme = {
  components: {
    Text,
  },
  colors: palette,
};

export default extendTheme(theme);
