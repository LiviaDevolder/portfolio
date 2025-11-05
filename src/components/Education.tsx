import { Text, Flex } from "@chakra-ui/react";
import { EDUCATION_VARIANT_TYPE, EducationVariantType } from "@/enum";
import { memo } from "react";

interface IEducation {
  title: string;
  description: string;
  duration?: string;
  variant: EducationVariantType;
}

function EducationComponent({
  title,
  description,
  duration,
  variant,
}: IEducation) {
  const isGold = variant === EDUCATION_VARIANT_TYPE.GOLD;

  if (isGold) {
    return (
      <Flex
        p={"24px"}
        bg={{
          base: "rgba(229, 195, 166, 0.08)",
          _dark: "rgba(229, 195, 166, 0.05)",
        }}
        border="1px solid"
        borderColor={{
          base: "rgba(229, 195, 166, 0.3)",
          _dark: "rgba(229, 195, 166, 0.2)",
        }}
        flexDir={"column"}
        borderRadius={"md"}
        w={"100%"}
        backdropFilter="blur(8px)"
      >
        <Text
          color="gold"
          fontFamily={"serif"}
          fontSize={"lg"}
          fontWeight={"semibold"}
        >
          {title}
        </Text>
        <Text 
          color={{ base: "blue", _dark: "white" }}
          fontFamily={"body"}
          fontSize={"md"}
        >
          {description}
        </Text>
        {duration && (
          <Text 
            color={{ base: "blue", _dark: "whiteAlpha.700" }}
            fontFamily={"body"}
            fontSize={"sm"}
            mt={1}
          >
            {duration}
          </Text>
        )}
      </Flex>
    );
  }

  return (
    <Flex
      p={3}
      bg={{
        base: "rgba(123, 97, 255, 0.08)",
        _dark: "rgba(123, 97, 255, 0.08)",
      }}
      border="1px solid"
      borderColor={{
        base: "rgba(123, 97, 255, 0.25)",
        _dark: "rgba(123, 97, 255, 0.2)",
      }}
      flexDir={"column"}
      borderRadius={"md"}
      w={"100%"}
      textAlign="center"
      backdropFilter="blur(8px)"
    >
      <Text
        fontFamily="serif"
        fontWeight="semibold"
        color="purple"
        fontSize="md"
      >
        {title}
      </Text>
      <Text 
        color={{ base: "blue", _dark: "whiteAlpha.800" }}
        fontFamily={"body"}
        fontSize="sm"
      >
        {description}
      </Text>
    </Flex>
  );
}

export default memo(EducationComponent);
