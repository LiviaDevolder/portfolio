import { Box, Flex, Text } from "@chakra-ui/react";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import Badge from "./Badge";

interface ServiceCardProps {
  icon: LucideIcon;
  iconColor?: string;
  iconSize?: number;
  title: string;
  description: string;
  badges?: string[];
  children?: ReactNode;
  isSpecialty?: boolean;
}

export default function ServiceCard({
  icon: Icon,
  iconColor = "purple",
  iconSize = 24,
  title,
  description,
  badges = [],
  children,
  isSpecialty = false,
}: ServiceCardProps) {
  return (
    <Flex
      flexDir="column"
      p={8}
      bg={
        isSpecialty
          ? {
              base: "linear-gradient(135deg, rgba(229, 195, 166, 0.15), rgba(170, 137, 200, 0.1))",
              _dark: "linear-gradient(135deg, rgba(229, 195, 166, 0.15), rgba(170, 137, 200, 0.1))",
            }
          : {
              base: "rgba(229, 195, 166, 0.05)",
              _dark: "rgba(245, 245, 245, 0.05)",
            }
      }
      border={isSpecialty ? "2px solid" : "1px solid"}
      borderColor={
        isSpecialty
          ? {
              base: "rgba(229, 195, 166, 0.3)",
              _dark: "rgba(229, 195, 166, 0.3)",
            }
          : {
              base: "rgba(229, 195, 166, 0.1)",
              _dark: "rgba(229, 195, 166, 0.1)",
            }
      }
      borderRadius="md"
      transition="all 0.3s ease"
      _hover={{
        borderColor: isSpecialty
          ? {
              base: "rgba(229, 195, 166, 0.5)",
              _dark: "rgba(229, 195, 166, 0.5)",
            }
          : {
              base: "rgba(229, 195, 166, 0.3)",
              _dark: "rgba(229, 195, 166, 0.3)",
            },
        bg: isSpecialty
          ? {
              base: "linear-gradient(135deg, rgba(229, 195, 166, 0.2), rgba(170, 137, 200, 0.15))",
              _dark: "linear-gradient(135deg, rgba(229, 195, 166, 0.2), rgba(170, 137, 200, 0.15))",
            }
          : {
              base: "rgba(229, 195, 166, 0.08)",
              _dark: "rgba(245, 245, 245, 0.08)",
            },
        transform: "translateY(-4px)",
      }}
    >
      <Flex alignItems="flex-start" mb={6}>
        <Box mr={3} color={{ base: iconColor, _dark: iconColor }}>
          <Icon size={iconSize} strokeWidth={1.5} />
        </Box>
        <Flex flexDir="column">
          <Text
            fontFamily={"display"}
            fontSize={"xl"}
            fontWeight="semibold"
            color={{ base: "blue", _dark: "white" }}
          >
            {title}
          </Text>
          {isSpecialty && (
            <Text
              fontFamily={"body"}
              fontSize={"sm"}
              fontWeight="medium"
              color={{ base: "gold", _dark: "gold" }}
              mt={1}
            >
              Especialidade
            </Text>
          )}
        </Flex>
      </Flex>
      <Text
        fontFamily={"body"}
        fontSize={"md"}
        color={
          isSpecialty
            ? { base: "blue", _dark: "whiteAlpha.900" }
            : { base: "blue", _dark: "whiteAlpha.800" }
        }
        mb={badges.length > 0 ? 4 : 0}
        lineHeight="relaxed"
      >
        {description}
      </Text>
      {badges.length > 0 && (
        <Flex flexWrap="wrap" gap={2} mt="auto">
          {badges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </Flex>
      )}
      {children}
    </Flex>
  );
}
