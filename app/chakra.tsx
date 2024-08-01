// src/chakra.js
'use client';
import {ChakraProvider, extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
    // Настройки темы, если они нужны
});

// @ts-ignore
export const Chakra = ({children}) => (
    <ChakraProvider theme={theme}>
        {children}
    </ChakraProvider>
);
