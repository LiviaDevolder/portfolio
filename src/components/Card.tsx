import { Text, Flex } from "@chakra-ui/react";
import Badge from "./Badge";

interface ICard {
  title: string;
  description: string;
  role: string;
  duration: string;
  badges: string[];
}

export default function Card({
  title,
  description,
  role,
  duration,
  badges,
}: ICard) {
  return (
    <Flex
      p={"16px"}
      bgColor={"gray"}
      color={{ base: "white", _dark: "blue" }}
      fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
      flexDir={"column"}
      borderRadius={"4px"}
      maxW={"620px"}
      gap={"12px"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Flex flexDir={"column"}>
          <Text
            color={{ base: "white", _dark: "blue" }}
            fontFamily={"display"}
            fontSize={{ base: "lg", sm: "lg", md: "xl", lg: "xl", xl: "xl" }}
            fontWeight={"700"}
          >
            {title}
          </Text>
          <Text
            color={"purple"}
            fontFamily={"body"}
            fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
          >
            {role}
          </Text>
        </Flex>
        <Text
          color={{ base: "white", _dark: "blue" }}
          fontFamily={"body"}
          fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
        >
          {duration}
        </Text>
      </Flex>
      <Flex
        gap={"16px"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
      >
        <Text
          color={{ base: "white", _dark: "blue" }}
          fontFamily={"body"}
          fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
        >
          {description}
        </Text>
        <Flex flexWrap={"wrap"} gap={"8px"}>
          {badges.map((badge, index) => {
            return <Badge key={index}>{badge}</Badge>;
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}
