// app/providers.tsx
"use client";

import { persistor, store } from "@/services/redux/store";
import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      {/* <Provider store={store}> */}
      {/* <PersistGate persistor={persistor}> */}
      {children}
      {/* </PersistGate> */}
      {/* </Provider> */}
    </ChakraProvider>
  );
}
