import { Provider } from "@/components/ui/provider";
import React from "react";
import {
  createSystem,
  defaultConfig,
  defineConfig,
  ChakraProvider,
} from "@chakra-ui/react";

type TestProviderProps = {
  children: React.ReactNode;
};
const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        Inter: { value: "'Inter', sans-serif" },
        Poppins: { value: "Poppins', sans-serif" },
      },
    },
  },
});

const theme = createSystem(defaultConfig, customConfig);

export const TestProvider = ({ children }: TestProviderProps) => {
  return (
    <ChakraProvider value={theme}>
      <Provider>{children}</Provider>
    </ChakraProvider>
  );
};
