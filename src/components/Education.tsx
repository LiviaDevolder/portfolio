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
  const bgColor = isGold ? "gold" : "purple";
  const titleColor = isGold ? "purple" : "white";
  const descriptionColor = isGold ? "white" : "gold";

  return (
    <Flex
      p={4}
      bgColor={bgColor}
      fontSize={{ base: "sm", md: "md" }}
      flexDir={"row"}
      borderRadius={"sm"}
      gap={3}
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"100%"}
    >
      <Flex flexDir={"column"} w={"100%"}>
        <Text
          color={titleColor}
          fontFamily={"display"}
          fontSize={{ base: "md", md: "lg" }}
          fontWeight={"700"}
        >
          {title}
        </Text>
        <Text
          color={descriptionColor}
          fontFamily={"body"}
          fontSize={{ base: "sm", md: "md" }}
        >
          {description}
        </Text>
      </Flex>
      {duration && (
        <Text
          color={"white"}
          fontFamily={"body"}
          fontSize={{ base: "sm", md: "md" }}
          whiteSpace={"nowrap"}
        >
          {duration}
        </Text>
      )}
    </Flex>
  );
}

export default memo(EducationComponent);
