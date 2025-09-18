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
  VStack,
} from "@chakra-ui/react";
import { QrCode } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export default function ContatoPage() {
  const t = useTranslations();

  const languages = createListCollection({
    items: [
      { label: "Português", value: "pt-BR" },
      { label: "English", value: "en-US" },
      { label: "Español", value: "es-ES" },
    ],
  });
  const { locale, setLocale } = useLocaleContext();

  return (
    <Flex
      w="100%"
      minH="100vh"
      bgColor={{ base: "white", _dark: "blue" }}
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      {/* Navigation */}
      <Box
        position="fixed"
        top="0"
        w="100vw"
        left="0"
        bg={{ base: "rgba(255, 255, 255, 0.9)", _dark: "rgba(28, 27, 42, 0.8)" }}
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
            fontWeight="bold"
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
              width="120px"
            >
              <Select.Control>
                <Select.Trigger
                  borderColor="transparent"
                  borderRadius="4px"
                  bgColor="accent"
                  fontFamily="body"
                  color="primary"
                  aria-label={t("accessibility.languageSelect")}
                >
                  <Select.ValueText placeholder={t("nav.language")} />
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

      {/* Contact Content */}
      <Flex
        px={{ base: "16px", sm: "24px", md: "48px" }}
        py={{ base: "80px", sm: "80px", md: "80px", lg: "80px", xl: "80px" }}
        pt={{ base: "128px", sm: "128px", md: "128px", lg: "144px", xl: "144px" }}
      >
        <VStack gap={8} align="center" maxW="600px">
          <Box textAlign="center">
            <Text
              color="gold"
              fontFamily="display"
              fontSize={{ base: "xl", sm: "xl", md: "xxl", lg: "xxl", xl: "xxl" }}
              mb={4}
              fontWeight="bold"
            >
              {t("contact.title")}
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color={{ base: "blue", _dark: "white" }}
              fontFamily="body"
            >
              {t("contact.description")}
            </Text>
          </Box>

          <Box
            p={8}
            borderRadius="lg"
            border="1px"
            borderColor="accent"
            bg={{ base: "white", _dark: "white" }}
            shadow="techBadge"
          >
            <QrCode.Root value="https://devolder.ia.br" size="lg">
              <QrCode.Frame>
                <QrCode.Pattern />
              </QrCode.Frame>
            </QrCode.Root>
          </Box>

          <Box textAlign="center">
            <Text
              fontSize="md"
              color={{ base: "blue", _dark: "white" }}
              fontFamily="body"
            >
              {t("contact.directAccess")}
            </Text>
            <Text
              fontSize="lg"
              color="accent"
              fontFamily="display"
              fontWeight="semibold"
              mt={2}
            >
              devolder.ia.br
            </Text>
          </Box>
        </VStack>
      </Flex>
    </Flex>
  );
}
