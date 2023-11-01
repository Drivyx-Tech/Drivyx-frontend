import { getProjectBySlug } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";
import { VStack, Text, Flex } from "@chakra-ui/react";
import { PortableText } from "@portabletext/react";
import React from "react";
import cccoil from "public/cccoil.svg";
import { ProjectContainer } from "./components/ProjectContainer";
import { CustomPortableComponents } from "@/ui/CustomPortableComponents";

export default async function Project({ params }: any) {
  const project = await getProjectBySlug("solar-power-project");

  console.log("project:", project);

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
            {project.subCategory.category.category}
          </Text>
          <VStack>
            <Text
              textStyle={["12px", "16px", "18px"]}
              fontWeight={700}
              textColor={"primary.600"}
            >
              {project.subCategory.subCategory}
            </Text>
            <Text textStyle={"heroTitle"}>{project.projectTitle}</Text>
          </VStack>

          <Text textStyle={"context"} textColor={"white"}>
            {project.excerpt}
          </Text>
        </Flex>

        <VStack bgColor={"white"} roundedTop={"3xl"} px={12} pt={10}>
          <Text
            textStyle={["12px", "16px", "18px"]}
            fontWeight={700}
            textColor={"primary.600"}
          >
            Tags
          </Text>
          {project.body && (
            <PortableText
              value={project.body}
              components={CustomPortableComponents}
            />
          )}
        </VStack>
      </ProjectContainer>
    </Flex>
  );
}
