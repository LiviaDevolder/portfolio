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
      textWrap={"nowrap"}
      px={"20px"}
      py={"10px"}
      cursor={"pointer"}
      bgColor={active ? "gold" : "purple"}
      color={"white"}
      fontSize={{ base: "md", sm: "md", md: "lg", lg: "lg", xl: "lg" }}
      textAlign={"center"}
      onClick={onClick}
    >
      {children}
    </Text>
  );
}
