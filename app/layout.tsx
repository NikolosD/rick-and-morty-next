import type { Metadata } from "next";
import "./globals.css";
import {Chakra} from "@/app/chakra";
import {StoreProvider} from "@/src/stores/storeContext";


import './../styles/index.scss'
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'

export const metadata: Metadata = {
  title: "Rick and Morty App",
  description: "Created by Nick",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <StoreProvider>
            <Chakra>
                {children}
            </Chakra>
        </StoreProvider>
        </body>
        </html>
    );
}