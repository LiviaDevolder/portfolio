"use client";

import { useLocaleContext } from "@/components/LocaleProvider";
import { ColorModeButton } from "@/components/ui/color-mode";
import {
  Box,
  createListCollection,
  Flex,
  Portal,
  Select,
  Text,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import GoldStar from "../../public/gold-star.svg";

const ChevronIcon = ({ isOpen, color }: { isOpen: boolean; color: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    style={{
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.2s ease",
    }}
  >
    <path
      d="M4 6L8 10L12 6"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Navigation() {
  const t = useTranslations();
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const languages = createListCollection({
    items: [
      { label: "Português", value: "pt-BR" },
      { label: "English", value: "en-US" },
      { label: "Español", value: "es-ES" },
    ],
  });
  const { locale, setLocale } = useLocaleContext();

  return (
    <Box
      position="fixed"
      top="0"
      w="100vw"
      left="0"
      bg={{
        base: "rgba(255, 255, 255, 0.9)",
        _dark: "rgba(28, 27, 42, 0.8)",
      }}
      backdropFilter="blur(8px)"
      borderBottom="1px solid rgba(229, 195, 166, 0.2)"
      zIndex="navbar"
    >
      <Flex
        maxW="1400px"
        mx="auto"
        px={{ base: 6, lg: 8 }}
        h="80px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          fontFamily="serif"
          fontSize="2xl"
          fontWeight="700"
          color="accent"
          letterSpacing="tight"
          
        >
          {t("nav.title")}
        </Text>
        
        <Flex alignItems="center" gap={3}>
          <ColorModeButton
            color="accent"
            aria-label={t("accessibility.colorModeToggle")}
          />
          <Select.Root
            collection={languages}
            value={[locale]}
            onValueChange={(e) => setLocale(e.value[0])}
            onOpenChange={(details) => setIsSelectOpen(details.open)}
            width="140px"
          >
            <Select.Control>
              <Select.Trigger
                borderColor="transparent"
                borderRadius="4px"
                bgColor="accent"
                fontFamily="body"
                color="primary"
                aria-label={t("accessibility.languageSelect")}
                position="relative"
                paddingRight="32px"
              >
                <Select.ValueText placeholder={t("nav.language")} />
                <Box
                  position="absolute"
                  right="8px"
                  top="50%"
                  transform="translateY(-50%)"
                  pointerEvents="none"
                >
                  <ChevronIcon 
                    isOpen={isSelectOpen} 
                    color="var(--chakra-colors-primary)" 
                  />
                </Box>
              </Select.Trigger>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content bgColor="secondary">
                  {languages.items.map((language) => (
                    <Select.Item item={language} key={language.value}>
                      {language.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        </Flex>
      </Flex>
    </Box>
  );
}