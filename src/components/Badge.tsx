import { Text } from "@chakra-ui/react";

interface IBadge {
  children: string;
}

export default function Badge({ children }: IBadge) {
  return (
    <Text
      px={"20px"}
      py={"4px"}
      bgColor={"purple"}
      color={"white"}
      fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
    >
      {children}
    </Text>
  );
}
