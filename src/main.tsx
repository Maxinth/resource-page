import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "@/components/ui/provider";
import { ColorModeProvider } from "./components/ui/color-mode.tsx";
import {
  createSystem,
  defaultConfig,
  defineConfig,
  ChakraProvider,
  Theme,
} from "@chakra-ui/react";

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

export const theme = createSystem(defaultConfig, customConfig);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={theme}>
      <Provider>
        <ColorModeProvider forcedTheme="light">
          <Theme appearance="light">
            <App />
          </Theme>
        </ColorModeProvider>
      </Provider>
    </ChakraProvider>
  </StrictMode>
);
