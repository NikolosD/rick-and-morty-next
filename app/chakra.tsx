// src/chakra.js
"use client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// @ts-ignore
export const Chakra = ({ children }) => (
  <ChakraProvider disableGlobalStyle={true}>{children}</ChakraProvider>
);
