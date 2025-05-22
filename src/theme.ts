import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        blue: { value: "#1C1B2A" },
        purple: { value: "#AA89C9" },
        gray: { value: "#C1BFC8" },
        white: { value: "#F5F5F5" },
        gold: { value: "#E5C3A6" },
      },
      fonts: {
        dislpay: { value: "var(--font-cormorant-garamond)" },
        body: { value: "var(--font-poppins)" },
      },
      fontSizes: {
        sm: { value: "12px" },
        md: { value: "16px" },
        lg: { value: "20px" },
        xl: { value: "24px" },
        xxl: { value: "32px" },
        xxxl: { value: "48px" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
