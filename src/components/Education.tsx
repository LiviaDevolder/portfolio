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
        p={6}
        bgColor="accent"
        flexDir={"column"}
        borderRadius={"md"}
        w={"100%"}
        mb={6}
      >
        <Text
          color={"purple"}
          fontFamily={"serif"}
          fontSize={"xl"}
          fontWeight={"bold"}
          mb={2}
        >
          {title}
        </Text>
        <Text color={"white"} mb={2}>
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
      p={4}
      bgColor="purple"
      flexDir={"column"}
      borderRadius={"md"}
      w={"100%"}
      textAlign="center"
    >
      <Text
        fontFamily="serif"
        fontWeight="semibold"
        color="text.light"
        mb={1}
        fontSize="lg"
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
