import { VStack, Text, Flex, HStack, Tag } from "@chakra-ui/react";
import { PortableText } from "@portabletext/react";
import React from "react";
import cccoil from "public/cccoil.svg";
import { CustomPortableComponents } from "@/ui/CustomPortableComponents";
import { Project } from "@/types/sanityTypes";
import { ProjectContainer } from "@/components/marketplace/ProjectContainer";

export default function ProjectPage({ project }: { project: Project }) {
  const slug = project?.slug;

  if (!slug) {
    return (
      <Flex
        flex={1}
        alignItems={"center"}
        justifyContent={"center"}
        h={"100vh"}
        w={"100%"}
      >
        <Text textStyle={"heading"}>Not found</Text>
      </Flex>
    );
  }

  return (
    <Flex pos={"relative"} alignItems={"center"} justifyContent={"center"}>
      <Flex
        bgColor={"primary.900"}
        backgroundImage={cccoil.src}
        backgroundPosition="center"
        backgroundRepeat="repeat"
        backgroundSize="cover"
        h={"800px"}
        w={"100%"}
        pos={"absolute"}
        top={0}
        left={0}
        zIndex={-1}
      ></Flex>

      <ProjectContainer>
        <Flex
          flexDirection={"column"}
          mx={6}
          maxW={"770px"}
          textAlign={"center"}
          py={20}
          gap={10}
        >
          <Text
            textStyle={"smContext"}
            fontWeight={900}
            textColor={"secondary.600"}
          >
            {project?.subCategory.category.category || "Category"}
          </Text>
          <VStack>
            <Text
              textStyle={["12px", "16px", "18px"]}
              fontWeight={700}
              textColor={"primary.600"}
            >
              {project?.subCategory.subCategory}
            </Text>
            <Text textStyle={"heroTitle"}>{project?.projectTitle}</Text>
          </VStack>

          <Text textStyle={"context"} textColor={"white"}>
            {project?.excerpt}
          </Text>
        </Flex>

        <VStack bgColor={"white"} roundedTop={"3xl"} px={12} pt={10}>
          <VStack h={"170px"} mb={10} w={"full"}>
            <HStack mb={4}>
              {project?.tags.map((tag: any) => {
                return (
                  <Tag
                    key={tag._id}
                    borderRadius="full"
                    size="lg"
                    textStyle={["22px", "26px", "28px"]}
                    fontWeight={700}
                    textColor={"primary.600"}
                    mr={2}
                  >
                    {tag.tag}
                  </Tag>
                );
              })}
            </HStack>

            <VStack w={"full"} align={"left"} gap={4}>
              <Text textStyle={"smBold"} fontWeight="bold">
                Website: {project.website}
              </Text>
              <Text textStyle={"smBold"} fontWeight="bold">
                Client: {project.client}
              </Text>
              <Text textStyle={"smBold"} fontWeight="bold">
                Published at: {project.publishedAt.substring(0, 10)}
              </Text>
            </VStack>
          </VStack>

          {project?.body && (
            <PortableText
              value={project?.body}
              components={CustomPortableComponents}
            />
          )}
        </VStack>
      </ProjectContainer>
    </Flex>
  );
}
