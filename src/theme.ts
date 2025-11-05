import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: "#1C1B2A" },
        accent: { value: "#E5C3A6" },
        secondary: { value: "#AA89C8" },
        light: { value: "#F5F5F5" },
        blue: { value: "#1C1B2A" },
        purple: { value: "#AA89C8" },
        gray: { value: "#C1BFC8" },
        white: { value: "#F5F5F5" },
        gold: { value: "#E5C3A6" },
      },
      fonts: {
        display: { value: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif" },
        body: { value: "var(--font-inter), 'Inter', sans-serif" },
        serif: { value: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif" },
        sans: { value: "var(--font-inter), 'Inter', sans-serif" },
      },
      fontSizes: {
        xs: { value: "12px" },
        sm: { value: "14px" },
        md: { value: "16px" },
        lg: { value: "20px" },
        xl: { value: "24px" },
        xxl: { value: "32px" },
        xxxl: { value: "48px" },
      },
      shadows: {
        techBadge: { value: "1px 2px 10px rgba(0, 0, 0, 0.2)" },
      },
      zIndex: {
        navbar: { value: "50" },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          primary: { 
            value: { _light: "#F5F5F5", _dark: "#1C1B2A" } 
          },
          accent: { 
            value: { _light: "#E5C3A6", _dark: "#E5C3A6" } 
          },
          secondary: { 
            value: { _light: "#AA89C8", _dark: "#AA89C8" } 
          },
        },
        text: {
          primary: { 
            value: { _light: "#1C1B2A", _dark: "#F5F5F5" } 
          },
          accent: { 
            value: { _light: "#E5C3A6", _dark: "#E5C3A6" } 
          },
          secondary: { 
            value: { _light: "#AA89C8", _dark: "#AA89C8" } 
          },
          light: { 
            value: { _light: "#1C1B2A", _dark: "#F5F5F5" } 
          },
        }
      }
    }
  },
});

export const system = createSystem(defaultConfig, config);
