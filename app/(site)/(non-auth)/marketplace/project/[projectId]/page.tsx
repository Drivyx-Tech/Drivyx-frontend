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
  Image,
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
    <VStack align={"center"} justify={"center"}>
      <HStack mt={"80px"} w={"7xl"} align={"center"}>
        <HStack h={"auto"} py={24} px={12} align={"center"} spacing={12}>
          <VStack justify={"center"} align={"left"} spacing={10}>
            <Flex align={"center"} gap={2}>
              <Badge
                variant="solid"
                colorScheme={projectData.category?.color}
                fontSize={"14px"}
                fontWeight={500}
                textTransform={"capitalize"}
                py={1}
                px={3}
                rounded={10}
              >
                {projectData.category?.category_name || "Category"}{" "}
              </Badge>
              <GoDotFill color={projectData.category?.color} />
              <Badge
                variant="solid"
                colorScheme={projectData.category?.color}
                fontSize={"14px"}
                fontWeight={500}
                textTransform={"capitalize"}
                py={1}
                px={3}
                rounded={10}
              >
                {projectData.subCategory?.subCategory_name || "Subcategory"}
              </Badge>
            </Flex>

            <VStack align={"left"} spacing={8}>
              <Text textStyle={"subheading"}>{projectData.project_name}</Text>
              <Text
                textStyle={"context"}
                fontWeight={400}
                lineHeight={{ base: 1.5, md: 1.8 }}
              >
                {projectData.excerpt}
              </Text>

              <HStack>
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
          </VStack>
        </HStack>

        <Stack
          p={6}
          bg={"tertiary.700"}
          borderRadius={"10px"}
          // w={"560px"}
          // h={"auto"}
        >
          <Image
            src={projectData?.cover_image ? projectCover : cccoil.src}
            alt={projectData?.excerpt}
            borderRadius={"10px"}
            objectFit={"cover"}
            w={"560px"}
            h={"full"}
          />
        </Stack>
        {/* <ProjectContainer> */}

        {/* <VStack
        bgColor={"secondary.800"}
        roundedTop={"3xl"}
        px={{ base: 4, md: 8, lg: 12 }}
        pt={10}
        w={"7xl"}
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
      </HStack>
    </VStack>
  );
}
