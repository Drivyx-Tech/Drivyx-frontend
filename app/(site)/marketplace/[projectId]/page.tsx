/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect } from "react";
import { getProjectByProjectId } from "@/services/endpoints/project";
import {
  VStack,
  Text,
  Flex,
  HStack,
  Tag,
  Heading,
  Link,
  Avatar,
  Badge,
} from "@chakra-ui/react";
import cccoil from "public/cccoil.svg";
import { ProjectContainer } from "@/components/marketplace/ProjectContainer";
import { Project } from "@/services/endpoints/type";
import { Utiles } from "@/services/utils";
import { GoDotFill } from "react-icons/go";
import { Skeleton } from "@chakra-ui/react";

export default function Project({ params }: { params: { projectId: string } }) {
  const [project, setProject] = React.useState<Project | null>(null);

  useEffect(() => {
    const getProject = async () => {
      const { result } = await getProjectByProjectId({
        projectId: params.projectId,
      });
      setProject(result.detail);
    };
    getProject();
  }, []);

  if (!project) return <Text>nothing there.</Text>;
  console.log("check if get project by project id works", project);

  return (
    <Flex
      pos={"relative"}
      alignItems={"center"}
      justifyContent={"center"}
      minH={"100vh"}
    >
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
        <Flex justify={"center"} align={"center"} w={"full"} gap={4} my={12}>
          <Badge
            w={"fit-content"}
            variant="solid"
            colorScheme="green"
            fontSize={"xl"}
            flex={"row"}
          >
            <Flex align={"center"} w={"fit-content"} gap={4}>
              {project.category?.category_name || "Category"}{" "}
              <GoDotFill color={"white"} />
              {project.subCategory?.subCategory_name || "Subcategory"}
            </Flex>
          </Badge>
        </Flex>

        <Flex
          flexDirection={"column"}
          mx={6}
          my={10}
          maxW={"770px"}
          h={"400px"}
          textAlign={"center"}
          justify={"space-between"}
          align={"center"}
        >
          <VStack>
            <Heading as={"h1"} color={"white"}>
              {project.project_name}
            </Heading>
          </VStack>

          <Heading
            as={"h2"}
            size={"md"}
            textColor={"white"}
            fontWeight={400}
            lineHeight={1.8}
          >
            {project.excerpt}
          </Heading>

          <HStack mb={4}>
            {project.tagsOnProjects?.map((tag: any) => {
              return (
                <Tag
                  key={tag._id}
                  size="sm"
                  colorScheme="red"
                  borderRadius="full"
                  fontWeight={400}
                  mr={2}
                >
                  {tag.tag_name}
                </Tag>
              );
            })}
          </HStack>
        </Flex>

        <VStack bgColor={"white"} roundedTop={"3xl"} px={12} pt={10} w={"100%"}>
          <VStack mb={10} w={"full"}>
            <HStack w={"full"} align={"left"} gap={10} mx={20}>
              <Avatar
                alignSelf={"center"}
                justifySelf={"center"}
                size={"2xl"}
                src={
                  process.env.NEXT_PUBLIC_S3_USER_BUCKET +
                  `${project.company?.company_profile_url}`
                }
              />
              <VStack align={"left"} w={"full"} gap={4} justify={"center"}>
                <Text w={"full"} fontSize={"xl"} fontWeight={600}>
                  {project.company?.company_name}
                </Text>
                <Link
                  href={project.company?.website_url}
                  color={"primary.600"}
                  fontWeight={600}
                >
                  {project.company?.website_url}
                </Link>
                <Flex w={"full"}>
                  <Text>Industry: {project.company?.industry} </Text>
                </Flex>
              </VStack>
            </HStack>

            <VStack spacing={12} mt={20}>
              <VStack w={"full"}>
                <Heading w={"full"} as="h2" size="md" mb={2}>
                  Funding goad:
                </Heading>
                <Text w={"full"} as="p" fontSize="xl" mb={6}>
                  {project.funding_goal}
                </Text>
              </VStack>

              <VStack w={"full"}>
                <Heading w={"full"} as="h2" size="md" mb={2}>
                  Project Goal:
                </Heading>
                <Text w={"full"} as="p" fontSize="xl" mb={6}>
                  {project.project_goal}
                </Text>
              </VStack>

              <VStack w={"full"}>
                <Heading w={"full"} as="h2" size="md" mb={2}>
                  Project Description:
                </Heading>
                <Text as="p" fontSize="xl" mb={6}>
                  {project.desc}
                </Text>
              </VStack>

              <VStack w={"full"}>
                <Heading w={"full"} as="h2" size="md" mb={2}>
                  Outcome:
                </Heading>
                <Text as="p" fontSize="xl" mb={6}>
                  {project.outcome}
                </Text>
              </VStack>

              <VStack w={"full"}>
                <Heading w={"full"} as="h2" size="md" mb={2}>
                  Contributions:
                </Heading>
                <Text as="p" fontSize="xl" mb={6}>
                  {project.contributions}
                </Text>
              </VStack>
            </VStack>
          </VStack>
        </VStack>
      </ProjectContainer>
    </Flex>
  );
}
