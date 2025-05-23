import { Text, Flex } from "@chakra-ui/react";
import { EDUCATION_VARIANT_TYPE, EducationVariantType } from "@/enum";

interface IEducation {
  title: string;
  description: string;
  duration?: string;
  variant: EducationVariantType;
}

export default function Education({
  title,
  description,
  duration,
  variant,
}: IEducation) {
  return (
    <Flex
      p={"16px"}
      bgColor={variant === EDUCATION_VARIANT_TYPE.GOLD ? "gold" : "purple"}
      fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
      flexDir={"row"}
      borderRadius={"4px"}
      gap={"12px"}
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"100%"}
      maxW={"max-content"}
    >
      <Flex flexDir={"column"} w={"100%"}>
        <Text
          color={variant === EDUCATION_VARIANT_TYPE.GOLD ? "purple" : "white"}
          fontFamily={"display"}
          fontSize={{ base: "md", sm: "md", md: "lg", lg: "lg", xl: "lg" }}
          fontWeight={"700"}
        >
          {title}
        </Text>
        <Text
          color={variant === EDUCATION_VARIANT_TYPE.GOLD ? "white" : "gold"}
          fontFamily={"body"}
          fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
        >
          {description}
        </Text>
      </Flex>
      {duration ? (
        <Text
          color={"white"}
          fontFamily={"body"}
          fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
          textWrap={"nowrap"}
        >
          {duration}
        </Text>
      ) : null}
    </Flex>
  );
}
