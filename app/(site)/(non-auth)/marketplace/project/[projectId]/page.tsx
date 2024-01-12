import React from "react";
import { getProjectByProjectId } from "@/services/endpoints/project";
import {
  VStack,
  Text,
  Flex,
  HStack,
  Tag,
  Link,
  Avatar,
  Badge,
  Stack,
} from "@chakra-ui/react";
import cccoil from "public/cccoil.svg";
import { ProjectContainer } from "@/components/marketplace/ProjectContainer";
import { Project } from "@/services/endpoints/type";
import { GoDotFill } from "react-icons/go";

export default async function Project({ params }: any) {
  const res = await getProjectByProjectId({
    projectId: params.projectId,
  });

  if (!res || res.result.statusCode !== 200) return <Text>nothing there.</Text>;
  const { detail: projectData } = res.result;

  const projectCover =
    process.env.NEXT_PUBLIC_S3_USER_BUCKET + `${projectData?.cover_image}`;

  if (!projectData) return <Text>nothing there.</Text>;

  return (
    <VStack>
      <Stack justify={"center"} align={"center"} bgColor={"black"} w={"full"}>
        <Flex
          backgroundImage={projectData?.cover_image ? projectCover : cccoil.src}
          backgroundPosition="center"
          backgroundRepeat="repeat"
          backgroundSize="cover"
          h={"60vh"}
          w={"full"}
          maxW={"1600px"}
          pos={"relative"}
        >
          <Flex
            pos={"absolute"}
            top={0}
            w={"100%"}
            h={"100%"}
            backgroundImage={
              "radial-gradient(circle, rgba(0,0,0,0.7), rgba(0,0,0,0.98))"
            }
          ></Flex>

          <VStack
            w={"full"}
            h={`calc(60vh - 80px)`}
            pos={"absolute"}
            // top={20}
            justify={"center"}
            align={"center"}
            mt={20}
            mb={8}
          >
            {/* <Flex
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
                {projectData.category?.category_name || "Category"}{" "}
              </Badge>
              <GoDotFill color={"white"} />
              <Badge
                w={"fit-content"}
                variant="solid"
                colorScheme="green"
                fontSize={{ base: "16px", md: "md", lg: "xl" }}
                flex={"row"}
              >
                {projectData.subCategory?.subCategory_name || "Subcategory"}
              </Badge>
            </Flex> */}

            <VStack>
              <Text textStyle={"heading"} color={"white"}>
                {projectData.project_name}
              </Text>
            </VStack>
          </VStack>
        </Flex>
      </Stack>

      {/* <ProjectContainer> */}
      <VStack
        mx={6}
        my={10}
        maxW={"770px"}
        minH={{ base: "200px", md: "300px" }}
        textAlign={"center"}
        justify={"space-between"}
        align={"center"}
      >
        <Text
          textStyle={"subheading"}
          textColor={"white"}
          fontWeight={400}
          lineHeight={{ base: 1.5, md: 1.8 }}
        >
          {projectData.excerpt}
        </Text>

        <HStack mb={4}>
          {projectData.tagsOnProjects?.map((tag: any) => {
            return (
              <Tag
                key={tag.tag_id}
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
      </VStack>

      {/* <VStack
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
                `${projectData.company?.company_profile_url}`
              }
            />
            <VStack align={"left"} w={"full"} gap={4} justify={"center"}>
              <Text w={"full"} fontSize={"xl"} fontWeight={600}>
                {projectData.company?.company_name}
              </Text>
              <Link
                href={projectData.company?.website_url}
                color={"primary.600"}
                fontWeight={600}
              >
                {projectData.company?.website_url}
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
                {projectData.funding_goal}
              </Text>
            </VStack>

            <VStack w={"full"}>
              <Text textStyle={"context"} fontWeight={"bold"} w={"full"}>
                Project Goal:
              </Text>
              <Text w={"full"} textStyle={"context"}>
                {projectData.project_goal}
              </Text>
            </VStack>

            <VStack w={"full"}>
              <Text textStyle={"context"} fontWeight={"bold"} w={"full"}>
                Project Description:
              </Text>
              <Text w={"full"} textStyle={"context"}>
                {projectData.desc}
              </Text>
            </VStack>

            <VStack w={"full"}>
              <Text textStyle={"context"} fontWeight={"bold"} w={"full"}>
                Outcome:
              </Text>
              <Text w={"full"} textStyle={"context"}>
                {projectData.outcome}
              </Text>
            </VStack>

            <VStack w={"full"}>
              <Text textStyle={"context"} fontWeight={"bold"} w={"full"}>
                Contributions:
              </Text>
              <Text w={"full"} textStyle={"context"}>
                {projectData.contributions}
              </Text>
            </VStack>
          </VStack>
        </VStack>
      </VStack> */}
      {/* </ProjectContainer> */}
    </VStack>
  );
}
