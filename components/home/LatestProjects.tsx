import { VStack, Text, Box, Button, Flex, Link } from "@chakra-ui/react";
import SectionContainer from "@/ui/SectionContainer";
import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import FeaturedSection from "@/ui/FeatureSection";
import { urlForImage } from "@/sanity/image";
import { Project } from "@/types/Project";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type Props = {
  projects: Project[];
};

export default function LatestProjects({ projects }: Props) {
  return (
    <SectionContainer my={{ base: 10, lg: 16 }}>
      <VStack flex={1} gap={24}>
        <VStack align={"center"} w={"100%"}>
          <Text
            textTransform={"uppercase"}
            color={"secondary.700"}
            fontWeight={300}
            fontSize={"lg"}
            textAlign={"center"}
            w={"100%"}
            flex={1}
          >
            Featured
          </Text>

          <Flex pos={"relative"} w={"100%"}>
            <Link href={`${BASE_URL}/marketplace`}>
              <Button
                flex={1}
                variant={"link"}
                colorScheme={"blue"}
                size={"md"}
                justifyContent={"right"}
                pos={"absolute"}
                right={0}
                bottom={2}
                rightIcon={<MdOutlineKeyboardDoubleArrowRight />}
              >
                See All
              </Button>
            </Link>

            <Box
              bgGradient="linear(to-r, #22c1c3, #fdbb2d)"
              h={0.5}
              w={"100%"}
              opacity={0.5}
            />
          </Flex>

          <Text width={800} textStyle={"heading"} textAlign={"center"} pt={8}>
            Driving Sustainability Forward
          </Text>

          <Text textStyle={"Context"}>
            Explore our diverse portfolio of sustainable projects
          </Text>
        </VStack>
        {projects.length > 0 && (
          <>
            {" "}
            <FeaturedSection
              imgSrc={urlForImage(projects[0].coverImage).src}
              title={projects[0].projectTitle}
              content={projects[0].excerpt}
              slug={projects[0].slug.current}
            />
            <FeaturedSection
              exchange={true}
              imgSrc={urlForImage(projects[1].coverImage).src}
              title={projects[1].projectTitle}
              content={projects[1].excerpt}
              slug={projects[1].slug.current}
            />
          </>
        )}
      </VStack>
    </SectionContainer>
  );
}
