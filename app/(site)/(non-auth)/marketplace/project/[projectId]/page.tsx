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
import treesBg from "@/public/images/trees-bg.jpg";
import { css } from "@emotion/react";
import AnimatedTextButton from "@/ui/Button/AnimatedTextButton";
import { ROUTE_PATH } from "@/constants/ROUTE_PATH";

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
      <Stack pos={"relative"} w={"full"} align={"center"}>
        <HStack
          flexDir={{ base: "column", md: "row" }}
          flexFlow={"column-reverse"}
          px={8}
          gap={12}
          w={"full"}
          maxW={"7xl"}
          justify={"center"}
          align={"center"}
        >
          <HStack
            mt={{ base: "120px", md: "80px" }}
            flex={1.5}
            h={"auto"}
            py={16}
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

              <VStack align={"left"} spacing={8} maxW={"xl"}>
                <Text textColor={"white"} textStyle={"subheading"}>
                  {projectData.project_name}
                </Text>
                <Text
                  textColor={"white"}
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

        <Stack
          h={"full"}
          pos={"absolute"}
          top={0}
          left={0}
          w={"full"}
          zIndex={-1}
        >
          <Image
            w={"full"}
            h={"full"}
            loading="lazy"
            src={treesBg.src}
            alt={"project-bg"}
            objectFit={"cover"}
            objectPosition={"center"}
          />
          <Flex
            pos={"absolute"}
            bottom={0}
            w={"100%"}
            h={"full"}
            backgroundImage={
              "linear-gradient(to top, rgba(0, 0, 0,0.9), rgba(0, 0, 0,0.3))"
            }
          />
        </Stack>

        <Stack align={"left"} w={"7xl"} px={8} py={4}>
          <AnimatedTextButton
            navTo={ROUTE_PATH.NON_AUTH.MARKETPLACE.HOME}
            text="Go Back"
            arrowDir="left"
            color={"white"}
          />
        </Stack>
      </Stack>

      <VStack w={"full"} h={"full"}>
        <HStack
          px={8}
          pt={10}
          gap={12}
          w={"full"}
          align={"flex-start"}
          maxW={"7xl"}
          h={"full"}
        >
          <Stack flex={1} h={"full"} gap={8}>
            <VStack align={"left"}>
              <Text fontWeight={600}>Share Project</Text>
              <HStack>
                <Text>Twitter</Text>
                <Text>LinkedIn</Text>
                <Text>Facebook</Text>
                <Text>CopyLink</Text>
              </HStack>
            </VStack>

            <VStack align={"left"}>
              <Text fontWeight={600}>Organization</Text>

              <HStack gap={4}>
                <Image
                  rounded={10}
                  w={"80px"}
                  h={"80px"}
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
                    {projectData.company?.type}
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </Stack>

          <Tabs flex={4} w={"full"} h={"full"} minH={"500px"}>
            <TabList
              style={{
                borderBottom: "1px solid",
                borderImage: "linear-gradient(to left, #fdbb2d, #22c1c3)",
                borderImageSlice: 1,
                transition: "all ease-in-out .5s",
              }}
              color={"primary.300"}
              fontWeight={600}
              // bgGradient="linear(to-l, #fdbb2d, #22c1c3)"
              // bgClip="text"
            >
              <Tab
                _selected={{
                  bgGradient: "linear(to-l, #fdbb2d, #22c1c3)",
                  bgClip: "text",
                  fontWeight: 600,
                }}
              >
                Overview
              </Tab>
              <Tab
                _selected={{
                  bgGradient: "linear(to-l, #fdbb2d, #22c1c3)",
                  bgClip: "text",
                  fontWeight: 600,
                }}
              >
                About
              </Tab>
              <Tab
                _selected={{
                  bgGradient: "linear(to-l, #fdbb2d, #22c1c3)",
                  bgClip: "text",
                  fontWeight: 600,
                }}
              >
                Contacts
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <VStack gap={10}>
                  <VStack w={"full"} align={"left"} gap={4}>
                    <Text
                      fontSize={"14px"}
                      fontWeight={600}
                      textColor={"white"}
                    >
                      Description
                    </Text>
                    <Text>{projectData.desc}</Text>
                  </VStack>

                  <VStack w={"full"} align={"left"} gap={4}>
                    <Text fontSize={"14px"} textColor={"gray.300"}>
                      Founding Goal
                    </Text>
                    <Text> {projectData.funding_goal}</Text>
                  </VStack>
                </VStack>
              </TabPanel>

              <TabPanel>
                <VStack gap={10}>
                  <VStack w={"full"} align={"left"} gap={4}>
                    <Text fontSize={"14px"} textColor={"gray.300"}>
                      Project Goals
                    </Text>
                    <Text> {projectData.project_goal}</Text>
                  </VStack>

                  <VStack w={"full"} align={"left"} gap={4}>
                    <Text fontSize={"14px"} textColor={"gray.300"}>
                      Outcome
                    </Text>
                    <Text> {projectData.outcome}</Text>
                  </VStack>

                  <VStack w={"full"} align={"left"} gap={4}>
                    <Text fontSize={"14px"} textColor={"gray.300"}>
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
                      src={
                        projectData.company &&
                        process.env.NEXT_PUBLIC_S3_USER_BUCKET +
                          projectData.company?.company_profile_url
                      }
                      alt={projectData.company?.company_name}
                    />
                    <Text>{projectData.company?.description}</Text>
                  </VStack>

                  <HStack w={"full"} align={"left"} gap={4}>
                    <Text fontSize={"14px"} textColor={"gray.300"}>
                      Website
                    </Text>
                    <Text>{projectData.company?.website_url}</Text>
                  </HStack>

                  <HStack w={"full"} align={"left"} gap={4}>
                    <Text fontSize={"14px"} textColor={"gray.300"}>
                      Industry
                    </Text>
                    <Text>{projectData.company?.industry}</Text>
                  </HStack>

                  <HStack w={"full"} align={"left"} gap={4}>
                    <Text fontSize={"14px"} textColor={"gray.300"}>
                      Location
                    </Text>
                    <Text>{projectData.company?.location}</Text>
                  </HStack>
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </HStack>

        <HStack
          flexWrap={"wrap"}
          px={8}
          pt={10}
          pb={20}
          gap={2}
          w={"full"}
          maxW={"7xl"}
          justify={"center"}
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
                shadow={"2xl"}
              />
            );
          })}
        </HStack>
      </VStack>
    </VStack>
  );
}
