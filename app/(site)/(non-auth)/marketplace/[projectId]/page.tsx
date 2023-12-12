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
  const projectCover =
    process.env.NEXT_PUBLIC_S3_USER_BUCKET + `${project?.cover_image}`;

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

  return (
    <Flex
      pos={"relative"}
      alignItems={"center"}
      justifyContent={"center"}
      minH={"100vh"}
    >
      <Flex
        backgroundImage={project?.cover_image ? projectCover : cccoil.src}
        backgroundPosition="center"
        backgroundRepeat="repeat"
        backgroundSize="cover"
        h={{ base: "100vh", md: "600px", lg: "800px" }}
        w={"100%"}
        pos={"absolute"}
        top={0}
        left={0}
        zIndex={-1}
      >
        {" "}
        <Flex
          pos={"absolute"}
          w={"100%"}
          h={"100%"}
          bg={"black"}
          opacity={"0.6"}
          zIndex={2}
        ></Flex>
      </Flex>

      <ProjectContainer>
        <Flex justify={"center"} align={"center"} mt={20}>
          <Flex
            direction={{ base: "column", md: "row", lg: "row" }}
            align={"center"}
            gap={2}
          >
            <Badge
              variant="solid"
              colorScheme="green"
              fontSize={{ base: "16px", md: "md", lg: "xl" }}
              flex={"row"}
            >
              {project.category?.category_name || "Category"}{" "}
            </Badge>
            <GoDotFill color={"white"} />
            <Badge
              w={"fit-content"}
              variant="solid"
              colorScheme="green"
              fontSize={{ base: "16px", md: "md", lg: "xl" }}
              flex={"row"}
            >
              {project.subCategory?.subCategory_name || "Subcategory"}
            </Badge>
          </Flex>
        </Flex>

        <Flex
          flexDirection={"column"}
          mx={6}
          my={10}
          maxW={"770px"}
          minH={{ base: "200px", md: "300px", lg: "400px" }}
          textAlign={"center"}
          justify={"space-between"}
          align={"center"}
        >
          <VStack>
            <Text textStyle={"heading"} color={"white"}>
              {project.project_name}
            </Text>
          </VStack>

          <Text
            textStyle={"headingContext"}
            textColor={"white"}
            fontWeight={400}
            lineHeight={{ base: 1.5, md: 1.8 }}
          >
            {project.excerpt}
          </Text>

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

        <VStack
          bgColor={"white"}
          roundedTop={"3xl"}
          px={{ base: 4, md: 8, lg: 12 }}
          pt={10}
          w={"100%"}
        >
          <VStack mb={10} w={"full"}>
            <HStack w={"full"} align={"left"} gap={10}>
              <Avatar
                alignSelf={"center"}
                justifySelf={"center"}
                size={{ base: "lg", md: "xl", lg: "2xl" }}
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
              </VStack>
            </HStack>

            <VStack
              spacing={{ base: 6, md: 8, lg: 12 }}
              mt={{ base: 8, md: 16, lg: 20 }}
              w={"full"}
            >
              <VStack w={"full"}>
                <Text textStyle={"context"} fontWeight={"bold"} w={"full"}>
                  Funding goad:
                </Text>
                <Text w={"full"} textStyle={"context"}>
                  {project.funding_goal}
                </Text>
              </VStack>

              <VStack w={"full"}>
                <Text textStyle={"context"} fontWeight={"bold"} w={"full"}>
                  Project Goal:
                </Text>
                <Text w={"full"} textStyle={"context"}>
                  {project.project_goal}
                </Text>
              </VStack>

              <VStack w={"full"}>
                <Text textStyle={"context"} fontWeight={"bold"} w={"full"}>
                  Project Description:
                </Text>
                <Text w={"full"} textStyle={"context"}>
                  {project.desc}
                </Text>
              </VStack>

              <VStack w={"full"}>
                <Text textStyle={"context"} fontWeight={"bold"} w={"full"}>
                  Outcome:
                </Text>
                <Text w={"full"} textStyle={"context"}>
                  {project.outcome}
                </Text>
              </VStack>

              <VStack w={"full"}>
                <Text textStyle={"context"} fontWeight={"bold"} w={"full"}>
                  Contributions:
                </Text>
                <Text w={"full"} textStyle={"context"}>
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
