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
        bgColor="accent"
        flexDir={"column"}
        fontWeight={"bold"}
        borderRadius={"md"}
        w={"100%"}
      >
        <Text
          color={"purple"}
          fontFamily={"serif"}
          fontSize={"lg"}
        >
          {title}
        </Text>
        <Text color={"white"}>
          {description}
        </Text>
        {duration && (
          <Text color={"white"} fontSize={"sm"}>
            {duration}
          </Text>
        )}
      </Flex>
    );
  }

  return (
    <Flex
      p={3}
      bgColor="purple"
      flexDir={"column"}
      fontWeight={"bold"}
      borderRadius={"md"}
      w={"100%"}
      textAlign="center"
    >
      <Text
        fontFamily="serif"
        fontWeight="semibold"
        color={"white"}
        fontSize="md"
      >
        {title}
      </Text>
      <Text color="text.accent" fontSize="sm">
        {description}
      </Text>
    </Flex>
  );
}

export default memo(EducationComponent);
