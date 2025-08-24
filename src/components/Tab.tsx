import { Text } from "@chakra-ui/react";

interface ITab {
  active: boolean;
  children: string;
  onClick: () => void;
}

export default function Tab({ children, active, onClick }: ITab) {
  return (
    <Text
      w={"100%"}
      whiteSpace={"nowrap"}
      px={5}
      py={2.5}
      cursor={"pointer"}
      bgColor={active ? "gold" : "purple"}
      color={"white"}
      fontSize={{ base: "md", md: "lg" }}
      textAlign={"center"}
      onClick={onClick}
    >
      {children}
    </Text>
  );
}
