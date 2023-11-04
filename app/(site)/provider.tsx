// app/providers.tsx
"use client";

import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
