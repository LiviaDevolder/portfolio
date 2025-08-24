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
      p={4}
      bgColor={"gray"}
      color={{ base: "white", _dark: "blue" }}
      fontSize={{ base: "sm", md: "md" }}
      flexDir={"column"}
      borderRadius={"sm"}
      maxW={"620px"}
      gap={3}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Flex flexDir={"column"}>
          <Text
            color={{ base: "white", _dark: "blue" }}
            fontFamily={"display"}
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight={"700"}
          >
            {title}
          </Text>
          <Text
            color={"purple"}
            fontFamily={"body"}
            fontSize={{ base: "sm", md: "md" }}
          >
            {role}
          </Text>
        </Flex>
        <Text
          color={{ base: "white", _dark: "blue" }}
          fontFamily={"body"}
          fontSize={{ base: "sm", md: "md" }}
        >
          {duration}
        </Text>
      </Flex>
      <Flex gap={4} flexDirection={{ base: "column", lg: "row" }}>
        <Text
          color={{ base: "white", _dark: "blue" }}
          fontFamily={"body"}
          fontSize={{ base: "sm", md: "md" }}
        >
          {description}
        </Text>
        <Flex flexWrap={"wrap"} gap={2}>
          {badges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default memo(CardComponent);
