"use client";

import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { QrCode } from "@chakra-ui/react";

export default function ContatoPage() {
  return (
    <Flex
      w="100%"
      minH="100vh"
      bgColor={{ base: "white", _dark: "blue" }}
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      px={{ base: "16px", sm: "24px", md: "48px" }}
      py={{ base: "80px", sm: "80px", md: "80px", lg: "80px", xl: "80px" }}
    >
      <VStack gap={8} align="center" maxW="600px">
        <Box textAlign="center">
          <Text
            color="gold"
            fontFamily="display"
            fontSize={{ base: "xl", sm: "xl", md: "xxl", lg: "xxl", xl: "xxl" }}
            mb={4}
            fontWeight={"bold"}
          >
            Entre em Contato!
          </Text>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color={{ base: "blue", _dark: "white" }}
            fontFamily="body"
          >
            Escaneie o QR Code para acessar meu LinkedIn
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
            Ou acesse diretamente:
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
  );
}
