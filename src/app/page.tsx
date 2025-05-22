"use client";

import { useLocaleContext } from "@/components/LocaleProvider";
import { ColorModeButton } from "@/components/ui/color-mode";
import {
  Box,
  createListCollection,
  Flex,
  Portal,
  Select,
  Text,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import NextImage from "next/image";
import Profile from "../../public/profile.png";
import Computer from "../../public/computer.svg";
import Phone from "../../public/phone.svg";
import Company from "../../public/company.svg";
import Ear from "../../public/ear.svg";
import PurpleStar from "../../public/purple-star.svg";
import GoldStar from "../../public/gold-star.svg";
import Linkedin from "../../public/linkedin.svg";
import Email from "../../public/email.svg";
import Github from "../../public/github.svg";
import Badge from "@/components/Badge";
import Card from "@/components/Card";
import Education from "@/components/Education";
import { EDUCATION_VARIANT_TYPE } from "@/enum";
import { useEffect } from "react";

export default function Home() {
  const t = useTranslations();

  const languages = createListCollection({
    items: [
      { label: "Português", value: "pt-BR" },
      { label: "English", value: "en-US" },
    ],
  });
  const { locale, setLocale } = useLocaleContext();

  useEffect(() => {
    document.title = t("metadata.title");

    const descriptionMeta = document.querySelector("meta[name='description']");
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", t("metadata.description"));
    }
  }, [t]);

  return (
    <Flex
      w={"100%"}
      minH="100vh"
      overflowX="hidden"
      bgColor={{ base: "white", _dark: "blue" }}
      flexDir={"column"}
    >
      {/* Navbar */}
      <Flex
        w={"100%"}
        alignItems={"center"}
        px={{ base: "16px", sm: "24px", md: "48px", lg: "140px", xl: "200px" }}
        py={{ base: "24px", sm: "24px", md: "24px", lg: "36px", xl: "36px" }}
        justifyContent={"space-between"}
      >
        <Text
          color={"gold"}
          fontFamily={"display"}
          fontSize={{
            base: "xxl",
            sm: "xxl",
            md: "xxxl",
            lg: "xxxl",
            xl: "xxxl",
          }}
        >
          {t("nav.title")}
        </Text>
        <Flex alignItems={"center"} gap={"12px"}>
          <ColorModeButton color={"gold"} />
          <Select.Root
            collection={languages}
            value={[locale]}
            onValueChange={(e) => setLocale(e.value[0])}
            width={"120px"}
          >
            <Select.Control>
              <Select.Trigger
                borderColor={"transparent"}
                borderRadius={"4px"}
                bgColor={{ base: "gold" }}
                fontFamily={"body"}
                color={"blue"}
              >
                <Select.ValueText placeholder={t("nav.language")} />
              </Select.Trigger>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content bgColor={{ base: "purple" }}>
                  {languages.items.map((language) => (
                    <Select.Item item={language} key={language.value}>
                      {language.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        </Flex>
      </Flex>
      {/* Intro */}
      <Flex
        width={"100%"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
        px={{ base: "16px", sm: "24px", md: "48px", lg: "140px", xl: "200px" }}
        py={{ base: "24px", sm: "24px", md: "24px", lg: "36px", xl: "36px" }}
        alignItems={"center"}
        gap={"24px"}
        justifyContent={"space-between"}
      >
        <NextImage
          width={350}
          height={516}
          src={Profile}
          alt={"Lívia Tarot Card"}
        />
        <Flex
          flexDir={"column"}
          gap={{ base: "16px", sm: "16px", md: "16px", lg: "32px", xl: "32px" }}
        >
          <Flex flexDir={"column"} gap={"12px"}>
            <Text
              color={"gold"}
              fontFamily={"display"}
              fontSize={{
                base: "xxl",
                sm: "xxl",
                md: "xxxl",
                lg: "xxxl",
                xl: "xxxl",
              }}
            >
              {t("intro.title")}
            </Text>
            <Flex gap={"12px"}>
              <Badge>WordPress</Badge>
              <Badge>Node.js</Badge>
              <Badge>Go</Badge>
            </Flex>
          </Flex>
          <Flex flexDir={"column"} alignItems={"end"}>
            <Text
              color={{ base: "blue", _dark: "white" }}
              fontFamily={"body"}
              fontSize={{
                base: "md",
                sm: "md",
                md: "xl",
                lg: "xl",
                xl: "xl",
              }}
            >
              {t("intro.quote")}
            </Text>
            <Text
              color={{ base: "blue", _dark: "white" }}
              fontFamily={"body"}
              fontSize={{
                base: "md",
                sm: "md",
                md: "xl",
                lg: "xl",
                xl: "xl",
              }}
              fontStyle={"italic"}
            >
              {t("intro.author")}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      {/* About Me */}
      <Flex
        width={"100%"}
        flexDirection={"column"}
        px={{ base: "16px", sm: "24px", md: "48px", lg: "140px", xl: "200px" }}
        py={{ base: "24px", sm: "24px", md: "24px", lg: "36px", xl: "36px" }}
        gap={"24px"}
      >
        <Text
          color={"gold"}
          fontFamily={"display"}
          fontSize={{ base: "xl", sm: "xl", md: "xxl", lg: "xxl", xl: "xxl" }}
        >
          {t("about.title")}
        </Text>
        <Flex
          gap={"48px"}
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
          }}
          justifyContent={"space-between"}
          w={"100%"}
        >
          <Flex
            position={"relative"}
            w={"100%"}
            flexDirection={"column"}
            gap={"36px"}
            maxW={"max-content"}
            zIndex={0}
            alignItems={"center"}
          >
            <Box position={"absolute"} zIndex={-1}>
              <PurpleStar />
            </Box>
            <Text
              color={{ base: "blue", _dark: "white" }}
              fontFamily={"body"}
              fontSize={{
                base: "md",
                sm: "md",
                md: "lg",
                lg: "lg",
                xl: "lg",
              }}
            >
              {t.rich("about.description", {
                strong: (chunks) => <strong>{chunks}</strong>,
                br: () => <br />,
              })}
            </Text>
            <Flex
              flexDir={"column"}
              gap={"12px"}
              w={"100%"}
              maxW={"max-content"}
            >
              <Education
                title={t("about.education.course")}
                description={t("about.education.university")}
                variant={EDUCATION_VARIANT_TYPE.GOLD}
                duration={t("about.education.duration")}
              />
              <Flex gap={"12px"} justifyContent={"space-between"}>
                <Education
                  title={t("about.languages.portuguese.title")}
                  description={t("about.languages.portuguese.level")}
                  variant={EDUCATION_VARIANT_TYPE.PURPLE}
                />
                <Education
                  title={t("about.languages.english.title")}
                  description={t("about.languages.portuguese.level")}
                  variant={EDUCATION_VARIANT_TYPE.PURPLE}
                />
                <Education
                  title={t("about.languages.spanish.title")}
                  description={t("about.languages.portuguese.level")}
                  variant={EDUCATION_VARIANT_TYPE.PURPLE}
                />
              </Flex>
            </Flex>
          </Flex>
          <Flex
            maxW={"max-content"}
            w={"100%"}
            flexDir={"column"}
            gap={"24px"}
            zIndex={0}
          >
            <Card
              title={t("about.experience.deal.title")}
              description={t("about.experience.deal.description")}
              role={t("about.experience.deal.role")}
              duration={t("about.experience.deal.duration")}
              badges={[
                "TypeScript",
                "Prisma",
                "PostgreSQL",
                "Tailwind",
                "Azure",
                "Nest.js",
              ]}
            />
            <Card
              title={t("about.experience.clearsale.title")}
              description={t("about.experience.clearsale.description")}
              role={t("about.experience.clearsale.role")}
              duration={t("about.experience.clearsale.duration")}
              badges={[
                "TypeScript",
                "MongoDB",
                "Terraform",
                "AWS",
                "APIfy",
                "Node.js",
              ]}
            />
            <Card
              title={t("about.experience.brq.title")}
              description={t("about.experience.brq.description")}
              role={t("about.experience.brq.role")}
              duration={t("about.experience.brq.duration")}
              badges={[
                "TypeScript",
                "CSS",
                "PostgreSQL",
                "Nest.js",
                "Next.js",
                "Chakra UI",
              ]}
            />
          </Flex>
        </Flex>
      </Flex>
      {/* Services */}
      <Flex
        width={"100%"}
        flexDirection={"column"}
        px={{ base: "16px", sm: "24px", md: "48px", lg: "140px", xl: "200px" }}
        py={{ base: "24px", sm: "24px", md: "24px", lg: "36px", xl: "36px" }}
        gap={"24px"}
      >
        <Text
          color={"gold"}
          fontFamily={"display"}
          fontSize={{ base: "xl", sm: "xl", md: "xxl", lg: "xxl", xl: "xxl" }}
        >
          {t("services.title")}
        </Text>
        <Flex
          color={{ base: "blue", _dark: "white" }}
          flexDir={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
          }}
          gap={"12px"}
          alignItems={"center"}
        >
          <Flex flexDir={"column"} gap={"16px"} maxW={"100%"}>
            <Flex gap={"8px"} alignItems={"center"}>
              <Flex>
                <Computer />
              </Flex>
              <Text color={"white"} fontFamily={"display"} fontSize={"xl"}>
                {t("services.web.title")}
              </Text>
            </Flex>
            <Text fontFamily={"body"} fontSize={"md"}>
              {t("services.web.description")}
            </Text>
          </Flex>
          <Flex>
            <GoldStar />
          </Flex>
          <Flex flexDir={"column"} gap={"16px"} maxW={"100%"}>
            <Flex gap={"8px"} alignItems={"center"}>
              <Flex>
                <Phone />
              </Flex>
              <Text color={"white"} fontFamily={"display"} fontSize={"xl"}>
                {t("services.pwa.title")}
              </Text>
            </Flex>
            <Text fontFamily={"body"} fontSize={"md"}>
              {t("services.pwa.description")}
            </Text>
          </Flex>
          <Flex>
            <GoldStar />
          </Flex>
          <Flex flexDir={"column"} gap={"16px"} maxW={"100%"}>
            <Flex gap={"8px"} alignItems={"center"}>
              <Flex>
                <Company />
              </Flex>
              <Text color={"white"} fontFamily={"display"} fontSize={"xl"}>
                {t("services.company.title")}
              </Text>
            </Flex>
            <Text fontFamily={"body"} fontSize={"md"}>
              {t("services.company.description")}
            </Text>
          </Flex>
          <Flex>
            <GoldStar />
          </Flex>
          <Flex flexDir={"column"} gap={"16px"} maxW={"100%"}>
            <Flex gap={"8px"} alignItems={"center"}>
              <Flex>
                <Ear />
              </Flex>
              <Text color={"white"} fontFamily={"display"} fontSize={"xl"}>
                {t("services.hearing.title")}
              </Text>
            </Flex>
            <Text fontFamily={"body"} fontSize={"md"}>
              {t("services.hearing.description")}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      {/* Footer */}
      <Flex
        bgColor={"gold"}
        w={"100%"}
        alignItems={"center"}
        px={{ base: "16px", sm: "24px", md: "48px", lg: "140px", xl: "200px" }}
        py={{ base: "24px", sm: "24px", md: "24px", lg: "36px", xl: "36px" }}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
        gap={"12px"}
      >
        <Text color={"white"}>{t("footer.text")}</Text>
        <Flex gap={"12px"}>
          <Linkedin />
          <Email />
          <Github />
        </Flex>
      </Flex>
    </Flex>
  );
}
