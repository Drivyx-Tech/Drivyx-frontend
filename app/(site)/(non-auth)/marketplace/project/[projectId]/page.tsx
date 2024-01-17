import React from "react";
import { getProjectByProjectId } from "@/services/endpoints/project";
import {
  VStack,
  Text,
  Flex,
  HStack,
  Tag,
  Link,
  Badge,
  Image,
  Stack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Divider,
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
      <HStack
        flexDir={{ base: "column", md: "row" }}
        flexFlow={"column-reverse"}
        mt={{ base: "120px", md: "80px" }}
        px={8}
        gap={12}
        w={"full"}
        maxW={"7xl"}
        align={"center"}
      >
        <HStack
          flex={1.5}
          h={"auto"}
          py={{ base: 16, md: 24 }}
          align={"center"}
          spacing={12}
        >
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

        <Stack flex={1}>
          <Image
            src={projectData?.cover_image && projectCover}
            alt={projectData?.excerpt}
            borderRadius={"10px"}
            objectFit={"cover"}
            objectPosition={"center"}
            w={"560px"}
            h={"300px"}
            shadow={"2xl"}
          />
        </Stack>
      </HStack>

      <HStack
        px={8}
        py={10}
        gap={12}
        w={"full"}
        align={"flex-start"}
        maxW={"7xl"}
        h={"full"}
      >
        <Stack flex={1} h={"full"}>
          <Text fontWeight={600}>Share Project</Text>
          <HStack>
            <Text>Twitter</Text>
            <Text>LinkedIn</Text>
            <Text>Facebook</Text>
            <Text>CopyLink</Text>
          </HStack>

          <Text fontWeight={600}>Organization</Text>

          <HStack>
            <Image
              rounded={10}
              w={100}
              h={100}
              src={
                projectData.company &&
                process.env.NEXT_PUBLIC_S3_USER_BUCKET +
                  projectData.company?.company_profile_url
              }
              alt={projectData.company?.company_name}
            />
            <VStack>
              <Text fontWeight={600} fontSize={"12px"}>
                {projectData.company?.company_name}
              </Text>
              <Text fontSize={"12px"} textColor={"gray.300"}>
                {projectData.company?.location}
              </Text>
            </VStack>
          </HStack>
        </Stack>

        <Tabs flex={4} w={"full"} h={"full"} minH={"500px"}>
          <TabList>
            <Tab>Overview</Tab>
            <Tab>About</Tab>
            <Tab>Contacts</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <VStack gap={10}>
                <VStack w={"full"} align={"left"} gap={4}>
                  <Text fontSize={"14px"} textColor={"gray.500"}>
                    Description
                  </Text>
                  <Text>{projectData.desc}</Text>
                </VStack>

                <VStack w={"full"} align={"left"} gap={4}>
                  <Text fontSize={"14px"} textColor={"gray.500"}>
                    Founding Goal
                  </Text>
                  <Text> {projectData.funding_goal}</Text>
                </VStack>
              </VStack>
            </TabPanel>

            <TabPanel>
              <VStack gap={10}>
                <VStack w={"full"} align={"left"} gap={4}>
                  <Text fontSize={"14px"} textColor={"gray.500"}>
                    Project Goals
                  </Text>
                  <Text> {projectData.project_goal}</Text>
                </VStack>

                <VStack w={"full"} align={"left"} gap={4}>
                  <Text fontSize={"14px"} textColor={"gray.500"}>
                    Outcome
                  </Text>
                  <Text> {projectData.outcome}</Text>
                </VStack>

                <VStack w={"full"} align={"left"} gap={4}>
                  <Text fontSize={"14px"} textColor={"gray.500"}>
                    Contribution
                  </Text>
                  <Text> {projectData.contributions}</Text>
                </VStack>
              </VStack>
            </TabPanel>

            <TabPanel>
              <VStack gap={10}>
                <VStack w={"full"} align={"left"} gap={4}>
                  <Image
                    w={100}
                    h={100}
                    src={projectData.company?.company_profile_url}
                    alt={projectData.company?.company_name}
                  />
                  <Text>{projectData.company?.description}</Text>
                </VStack>

                <HStack w={"full"} align={"left"} gap={4}>
                  <Text fontSize={"14px"} textColor={"gray.500"}>
                    Website
                  </Text>
                  <Text>{projectData.company?.website_url}</Text>
                </HStack>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </HStack>

      <HStack
        flexWrap={"wrap"}
        px={8}
        py={10}
        gap={12}
        w={"full"}
        maxW={"7xl"}
        mb={20}
      >
        {projectData.projectGalary?.map((img, index) => {
          return (
            <Image
              key={index}
              h={"300px"}
              w={"auto"}
              objectFit={"cover"}
              src={process.env.NEXT_PUBLIC_S3_USER_BUCKET + img.image_url}
              alt={"project image"}
            />
          );
        })}
      </HStack>
    </VStack>
  );
}
