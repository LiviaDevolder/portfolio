import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { ExternalLink, Github } from "lucide-react";
import NextImage, { StaticImageData } from "next/image";
import Badge from "./Badge";

interface ProjectCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  badges: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  badges,
  demoUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <Flex
      flexDir="column"
      bg={{
        base: "rgba(229, 195, 166, 0.05)",
        _dark: "rgba(245, 245, 245, 0.05)",
      }}
      border="1px solid"
      borderColor={{
        base: "rgba(229, 195, 166, 0.2)",
        _dark: "rgba(229, 195, 166, 0.2)",
      }}
      borderRadius="lg"
      overflow="hidden"
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      _hover={{
        borderColor: {
          base: "rgba(229, 195, 166, 0.4)",
          _dark: "rgba(229, 195, 166, 0.4)",
        }
      }}
    >
      {/* Image */}
      <Box h="192px" overflow="hidden" position="relative">
        <NextImage
          src={image}
          alt={title}
          fill
          style={{
            objectFit: "cover",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
      </Box>

      {/* Content */}
      <Flex flexDir="column" p={6} gap={4}>
        {/* Header with title and links */}
        <Flex justifyContent="space-between" alignItems="flex-start">
          <Text
            fontFamily="display"
            fontSize="xl"
            fontWeight="semibold"
            color={{ base: "blue", _dark: "white" }}
          >
            {title}
          </Text>
          <Flex gap={2}>
            {demoUrl && (
              <Link
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                color={{ base: "purple", _dark: "purple" }}
                _hover={{ color: { base: "gold", _dark: "gold" } }}
                transition="color 0.2s"
              >
                <ExternalLink size={20} strokeWidth={1.5} />
              </Link>
            )}
            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                color={{ base: "purple", _dark: "purple" }}
                _hover={{ color: { base: "gold", _dark: "gold" } }}
                transition="color 0.2s"
              >
                <Github size={20} strokeWidth={1.5} />
              </Link>
            )}
          </Flex>
        </Flex>

        {/* Description */}
        <Text
          fontFamily="body"
          fontSize="md"
          color={{ base: "blue", _dark: "whiteAlpha.800" }}
          lineHeight="relaxed"
        >
          {description}
        </Text>

        {/* Badges */}
        <Flex flexWrap="wrap" gap={2}>
          {badges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
