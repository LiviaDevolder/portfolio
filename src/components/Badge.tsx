import { Text } from "@chakra-ui/react";

interface IBadge {
  children: string;
}

import { memo } from "react";

function BadgeComponent({ children }: IBadge) {
  return (
    <Text
      px={4}
      py={1}
      bgColor={"purple"}
      color={"white"}
      fontSize={{ base: "sm", md: "md" }}
    >
      {children}
    </Text>
  );
}

export default memo(BadgeComponent);
