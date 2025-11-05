import { Text } from "@chakra-ui/react";

interface IBadge {
  children: string;
}

import { memo } from "react";

function BadgeComponent({ children }: IBadge) {
  return (
    <Text
      px={3}
      py={1}
      bgColor={"purple"}
      color={"white"}
      fontSize={"xs"}
      borderRadius={"sm"}
      boxShadow={"techBadge"}
    >
      {children}
    </Text>
  );
}

export default memo(BadgeComponent);
