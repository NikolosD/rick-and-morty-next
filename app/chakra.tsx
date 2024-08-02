// src/chakra.js
"use client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    dark: {
      100: "rgb(49, 50, 52)",
      300: "rgb(26, 26, 26)",
      500: "rgb(30, 30, 30)",
    },
    cyan: {
      300: "rgb(17, 176, 200)",
      500: "rgb(66, 180, 202)",
    },
    lime: {
      300: "rgb(191, 222, 66)",
    },
    light: {
      100: "#fff",
    },
  },
});

// @ts-ignore
export const Chakra = ({ children }) => (
  <ChakraProvider disableGlobalStyle={true} theme={theme}>
    {children}
  </ChakraProvider>
);
