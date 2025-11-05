"use client";

import {
  Box,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import NextImage, { StaticImageData } from "next/image";
import Profile from "../../public/profile.png";
import Scraper from "../../public/projects/scraper.png";
import Renault from "../../public/projects/renault.png";
import BoraLa from "../../public/projects/borala.png";
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
import Navigation from "@/components/Navigation";
import { EDUCATION_VARIANT_TYPE, PROJECTS_TYPE, ProjectsType } from "@/enum";
import { ReactNode, useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";

// Dynamic import for Tab component (non-critical)
const Tab = dynamic(() => import("@/components/Tab"), {
  loading: () => (
    <div
      style={{
        height: "48px",
        backgroundColor: "#f0f0f0",
        borderRadius: "4px",
      }}
    />
  ),
});

interface IProjects {
  title: string;
  image: StaticImageData;
  description: ReactNode;
  badges: string[];
}

export default function Home() {
  const t = useTranslations();
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  useEffect(() => {
    document.title = t("metadata.title");

    const descriptionMeta = document.querySelector("meta[name='description']");
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", t("metadata.description"));
    }
  }, [t]);

  const [selectedProject, setSelectedProject] = useState<ProjectsType>(
    PROJECTS_TYPE.SCRAPER
  );

  const experiences = useMemo(
    () => [
      {
        key: "brq-2",
        title: t("about.experience.brq-2.title"),
        description: t("about.experience.brq-2.description"),
        role: t("about.experience.brq-2.role"),
        duration: t("about.experience.brq-2.duration"),
        badges: [
          "TypeScript",
          "Prisma",
          "PostgreSQL",
          "Nest.js",
          "Next.js",
          "Chakra UI",
        ],
      },
      {
        key: "deal",
        title: t("about.experience.deal.title"),
        description: t("about.experience.deal.description"),
        role: t("about.experience.deal.role"),
        duration: t("about.experience.deal.duration"),
        badges: [
          "TypeScript",
          "Prisma",
          "PostgreSQL",
          "Tailwind",
          "Azure",
          "Nest.js",
        ],
      },
      {
        key: "clearsale",
        title: t("about.experience.clearsale.title"),
        description: t("about.experience.clearsale.description"),
        role: t("about.experience.clearsale.role"),
        duration: t("about.experience.clearsale.duration"),
        badges: [
          "TypeScript",
          "MongoDB",
          "Terraform",
          "AWS",
          "APIfy",
          "Node.js",
        ],
      },
      {
        key: "brq",
        title: t("about.experience.brq.title"),
        description: t("about.experience.brq.description"),
        role: t("about.experience.brq.role"),
        duration: t("about.experience.brq.duration"),
        badges: [
          "TypeScript",
          "CSS",
          "PostgreSQL",
          "Nest.js",
          "Next.js",
          "Chakra UI",
        ],
      },
    ],
    [t]
  );

  const displayedExperiences = showAllExperiences
    ? experiences
    : experiences.slice(0, 2);

  const projectsRecord: Record<ProjectsType, IProjects> = useMemo(
    () => ({
      [PROJECTS_TYPE.SCRAPER]: {
        title: t("projects.data.scraper.title"),
        image: Scraper,
        description: t.rich("projects.data.scraper.description", {
          br: () => <br />,
        }),
        badges: [
          "Puppeteer",
          "Playwright",
          "Cheerio",
          "Crawlee",
          "Apify",
          "Axios",
        ],
      },
      [PROJECTS_TYPE.RENAULT]: {
        title: t("projects.data.renault.title"),
        image: Renault,
        description: t.rich("projects.data.renault.description", {
          br: () => <br />,
        }),
        badges: [
          "TypeScript",
          "CSS",
          "PostgreSQL",
          "Nest.js",
          "Next.js",
          "Chakra UI",
        ],
      },
      [PROJECTS_TYPE.BORALA]: {
        title: t("projects.data.borala.title"),
        image: BoraLa,
        description: t.rich("projects.data.borala.description", {
          br: () => <br />,
        }),
        badges: [
          "TypeScript",
          "Vercel",
          "Firebase",
          "Google Cloud Plataform",
          "Nest.js",
          "Next.js",
          "Chakra UI",
        ],
      },
    }),
    [t]
  );

  return (
    <Flex
      w={"100%"}
      minH="100vh"
      bgColor={{ base: "white", _dark: "blue" }}
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
    >
      {/* Navigation */}
      <Navigation />
      <Flex
        w={"100%"}
        minH="100vh"
        overflowX="hidden"
        flexDir={"column"}
        maxW={"1400px"}
      >
        {/* Intro */}
        <Flex
          width={"100%"}
          flexDirection={{ base: "column", lg: "row" }}
          px={{
            base: "16px",
            sm: "24px",
            md: "48px",
          }}
          pt={{
            base: "128px",
            sm: "128px",
            md: "128px",
            lg: "144px",
            xl: "144px",
          }}
          pb={{ base: "80px", sm: "80px", md: "80px", lg: "80px", xl: "80px" }}
          alignItems={"center"}
          gap={"24px"}
          justifyContent={"space-around"}
        >
          <NextImage
            width={350}
            height={516}
            src={Profile}
            alt={t("accessibility.profileImage")}
            priority
            sizes="(max-width: 768px) 100vw, 350px"
          />
          <Flex flexDir={"column"} maxW={"576px"} gap={{ base: 4, lg: 4 }}>
            <Flex flexDir={"column"} gap={3}>
              <Text
                color={"gold"}
                fontFamily={"display"}
                fontWeight={"bold"}
                fontSize={{ base: "xl", md: "xxl" }}
              >
                {t("intro.title")}
              </Text>
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
                {t("intro.description")}
              </Text>
            </Flex>
            <Flex gap={"12px"}>
              <Badge>React.js</Badge>
              <Badge>Node.js</Badge>
              <Badge>Cloud</Badge>
              <Badge>AI</Badge>
            </Flex>
            <Flex mt={4}>
              <a
                href="https://www.credly.com/badges/0694c04b-48cc-4ccc-9e4b-26a8326e681f"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linux Essentials Certification Badge"
              >
                <NextImage
                  src="https://images.credly.com/size/340x340/images/009defc4-25a0-4d6f-8b2d-7fac9c7362f1/blob"
                  alt="Linux Essentials Certification"
                  width={60}
                  height={60}
                  style={{
                    cursor: "pointer",
                    transition: "transform 0.2s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </a>
            </Flex>
          </Flex>
        </Flex>
        {/* About Me */}
        <Flex
          width={"100%"}
          flexDirection={"column"}
          px={{
            base: "16px",
            sm: "24px",
            md: "48px",
          }}
          py={{ base: "24px", sm: "24px", md: "24px", lg: "36px", xl: "36px" }}
          gap={"24px"}
        >
          <Text
            color={"gold"}
            fontWeight={"bold"}
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
                fontSize={"1.125rem"}
              >
                {t.rich("about.description", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                  br: () => <br />,
                })}
              </Text>
              <Flex
                flexDir={"column"}
                w={"100%"}
                gap={"12px"}
                // maxW={"max-content"}
              >
                <Education
                  title={t("about.education.mba.course")}
                  description={t("about.education.mba.university")}
                  variant={EDUCATION_VARIANT_TYPE.GOLD}
                  duration={t("about.education.mba.duration")}
                />
                <Education
                  title={t("about.education.graduation.course")}
                  description={t("about.education.graduation.university")}
                  variant={EDUCATION_VARIANT_TYPE.GOLD}
                  duration={t("about.education.graduation.duration")}
                />
                <Flex
                  gap={"12px"}
                  justifyContent={"space-between"}
                  flexDirection={{ base: "row", sm: "row" }}
                >
                  <Education
                    title={t("about.languages.portuguese.title")}
                    description={t("about.languages.portuguese.level")}
                    variant={EDUCATION_VARIANT_TYPE.PURPLE}
                  />
                  <Education
                    title={t("about.languages.english.title")}
                    description={t("about.languages.english.level")}
                    variant={EDUCATION_VARIANT_TYPE.PURPLE}
                  />
                  <Education
                    title={t("about.languages.spanish.title")}
                    description={t("about.languages.spanish.level")}
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
              {displayedExperiences.map((experience) => (
                <Card
                  key={experience.key}
                  title={experience.title}
                  description={experience.description}
                  role={experience.role}
                  duration={experience.duration}
                  badges={experience.badges}
                />
              ))}
              <Button
                onClick={() => setShowAllExperiences(!showAllExperiences)}
                variant="outline"
                borderColor="gold"
                color="gold"
                w="100%"
                _hover={{
                  bgColor: "gold",
                  color: "white",
                }}
                alignSelf="center"
                mt={2}
              >
                {showAllExperiences ? t("about.showLess") : t("about.showMore")}
              </Button>
            </Flex>
          </Flex>
        </Flex>
        {/* Services */}
        <Flex
          width={"100%"}
          flexDirection={"column"}
          px={{
            base: "16px",
            sm: "24px",
            md: "48px",
          }}
          py={{ base: "24px", sm: "24px", md: "24px", lg: "36px", xl: "36px" }}
          gap={"24px"}
        >
          <Text
            color={"gold"}
            fontWeight={"bold"}
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
                <Text fontFamily={"display"} fontSize={"xl"}>
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
                <Text fontFamily={"display"} fontSize={"xl"}>
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
                <Text fontFamily={"display"} fontSize={"xl"}>
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
                <Text fontFamily={"display"} fontSize={"xl"}>
                  {t("services.hearing.title")}
                </Text>
              </Flex>
              <Text fontFamily={"body"} fontSize={"md"}>
                {t("services.hearing.description")}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        {/* Projects */}
        <Flex
          width={"100%"}
          flexDirection={"column"}
          px={{
            base: "16px",
            sm: "24px",
            md: "48px",
          }}
          py={{ base: "24px", sm: "24px", md: "24px", lg: "36px", xl: "36px" }}
          gap={"24px"}
        >
          <Text
            color={"gold"}
            fontWeight={"bold"}
            fontFamily={"display"}
            fontSize={{ base: "xl", sm: "xl", md: "xxl", lg: "xxl", xl: "xxl" }}
          >
            {t("projects.title")}
          </Text>
          <Flex
            width={"100%"}
            flexDirection={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "row",
              xl: "row",
            }}
            gap={"24px"}
          >
            <Flex flexDir={"column"} gap={"12px"}>
              {Object.entries(projectsRecord).map(([key, project]) => (
                <Tab
                  key={key}
                  active={key === selectedProject}
                  onClick={() => setSelectedProject(key as ProjectsType)}
                >
                  {project.title}
                </Tab>
              ))}
            </Flex>
            <Flex
              width={"100%"}
              gap={"24px"}
              flexWrap="wrap"
              alignItems="flex-start"
            >
              <Flex
                flex="1 1 400px"
                maxWidth={{ base: "100%", xl: "610px" }}
                minWidth={{ base: "100%", md: "320px" }}
                w={{ base: "100%", md: "auto" }}
              >
                <NextImage
                  src={projectsRecord[selectedProject].image}
                  alt={projectsRecord[selectedProject].title}
                  width={610}
                  height={400}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 610px"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Flex>

              <Flex flexDir={"column"} gap={"12px"} flex="1 1 400px" w={"auto"}>
                <Text color={{ base: "blue", _dark: "white" }}>
                  {projectsRecord[selectedProject].description}
                </Text>
                <Flex flexWrap={"wrap"} gap={"8px"}>
                  {projectsRecord[selectedProject].badges.map((badge) => (
                    <Badge key={badge}>{badge}</Badge>
                  ))}
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* Footer */}
      <Flex
        bgColor={"gold"}
        w={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex
          w={"100%"}
          maxW={"1400px"}
          alignItems={"center"}
          px={{
            base: "16px",
            sm: "24px",
            md: "48px",
          }}
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
            <Linkedin
              aria-label={t("accessibility.linkedinProfile")}
              role="button"
              tabIndex={0}
            />
            <Email
              aria-label={t("accessibility.sendEmail")}
              role="button"
              tabIndex={0}
            />
            <Github
              aria-label={t("accessibility.githubProfile")}
              role="button"
              tabIndex={0}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
