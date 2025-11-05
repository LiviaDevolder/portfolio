import { Text, Flex } from "@chakra-ui/react";
import Badge from "./Badge";
import { memo } from "react";

interface ICard {
  title: string;
  description: string;
  role: string;
  duration: string;
  badges: string[];
}

function CardComponent({ title, description, role, duration, badges }: ICard) {
  return (
    <Flex
      p={6}
      bg={{
        base: "rgba(233, 229, 238)",
        _dark: "whiteAlpha.50",
      }}
      fontSize={{ base: "sm", md: "md" }}
      flexDir={"column"}
      borderRadius={"md"}
      gap={4}
    >
      <Flex justifyContent={"space-between"} alignItems={"start"}>
        <Flex flexDir={"column"}>
          <Text
            color="text.light"
            fontFamily={"serif"}
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight={"semibold"}
          >
            {title}
          </Text>
          <Text
            color={"text.secondary"}
            fontFamily={"body"}
            fontSize={{ base: "sm", md: "md" }}
          >
            {role}
          </Text>
        </Flex>
        <Text
          color="text.light"
          fontFamily={"body"}
          fontSize={{ base: "sm", md: "md" }}
        >
          {duration}
        </Text>
      </Flex>
      <Text
        color="text.light"
        fontFamily={"body"}
        fontSize={{ base: "sm", md: "md" }}
        mb={4}
      >
        {description}
      </Text>
      <Flex flexWrap={"wrap"} gap={2}>
        {badges.map((badge) => (
          <Badge key={badge}>{badge}</Badge>
        ))}
      </Flex>
    </Flex>
  );
}

export default memo(CardComponent);
