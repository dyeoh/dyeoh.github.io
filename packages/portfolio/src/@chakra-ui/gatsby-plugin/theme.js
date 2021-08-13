import { extendTheme } from "@chakra-ui/react";

const Text = {
  variants: {
    H1A: {
      fontFamily: "Lato",
      fontSize: "30px",
      fontWeight: 400,
      lineHeight: "34px",
      letterSpacing: 0,
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
