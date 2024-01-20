/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ROUTE_PATH } from "@/constants/ROUTE_PATH";
import { getProjectByUserId } from "@/services/endpoints/project";
import { Project } from "@/services/endpoints/type";
import { useAppSlector } from "@/services/redux/hooks";
import CustomIconButton from "@/ui/Button/CustomIconButton";
import {
  Flex,
  VStack,
  Image,
  Text,
  Divider,
  HStack,
  Box,
  Stack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Badge,
  Tag,
} from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";

function ProjectInfoDisplay() {
  const { company } = useAppSlector((state) => state.tmpStore.user);
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [pagination, setPagination] = useState({
    skip: 0,
    take: 3,
    total: 0,
    currentPage: 1,
  });

  const userProjects = async () => {
    const page = {
      skip: pagination.skip.toString(),
      take: pagination.take.toString(),
    };
    const res = await getProjectByUserId(page);

    if (res.result.statusCode === 200) {
      setProjects(res.result.detail.projects);

      setPagination((prevPagination) => ({
        ...prevPagination,
        total: res.result.detail.total,
      }));
    }
  };

  useEffect(() => {
    userProjects();
  }, [pagination.currentPage]);

  return (
    <VStack w={"full"} h={"full"} gap={{ base: 8 }} flex={1.5}>
      <Flex
        w={"full"}
        h={"full"}
        align={"flex-start"}
        gap={4}
        bgColor={"white"}
        p={8}
        rounded={30}
        shadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
      >
        {projects.length <= 0 ? (
          <VStack justify={"center"} w={"full"} align="left">
            <Text
              fontSize={"md"}
              fontWeight={"bold"}
              textColor={"secondary.800"}
            >
              Create a project
            </Text>

            <Divider />

            <Text fontSize={"sm"} color={"gray.500"} my={4}>
              Fill in project details, and get started.
            </Text>

            <CustomIconButton
              text={"Create a project"}
              navTo={ROUTE_PATH.DASHBOARD.PROJECT}
            />
          </VStack>
        ) : (
          <VStack justify={"center"} w={"full"} align="left">
            <HStack justify={"space-between"} align="flex-end" mb={2}>
              <Text
                fontSize={"md"}
                fontWeight={"bold"}
                textColor={"secondary.800"}
              >
                My projects
              </Text>

              <Flex
                gap={2}
                bg={"tertiary.300"}
                _hover={{
                  bg: "tertiary.500",
                }}
                px={2}
                py={"5px"}
                rounded={"reset"}
                cursor={"pointer"}
                color={"secondary.800"}
                justify={"center"}
                align="center"
                onClick={() => router.push(ROUTE_PATH.DASHBOARD.PROJECT)}
              >
                <Text size={"xl"} lineHeight={1}>
                  +
                </Text>
                <Text fontWeight={600} fontSize={"xs"}>
                  Add a new project
                </Text>
              </Flex>
            </HStack>

            <Divider />

            <HStack py={6} spacing={8}>
              <HStack
                w={"full"}
                spacing={8}
                align="start"
                justify={"space-between"}
              >
                <>
                  <Flex w={"260px"} flexDir={"column"} gap={4}>
                    <Image
                      w={"full"}
                      h={100}
                      objectFit={"cover"}
                      src={
                        projects[0]?.cover_image &&
                        process.env.NEXT_PUBLIC_S3_USER_BUCKET +
                          projects[0].cover_image
                      }
                      alt={projects[0]?.project_name}
                    />
                    <Badge alignSelf={"center"} w={"fit-content"}>
                      Pending
                    </Badge>
                  </Flex>

                  <Stack spacing="4" w={"full"} justify={"space-between"}>
                    <HStack align={"left"} gap={2}>
                      <Badge
                        w={"fit-content"}
                        variant="solid"
                        colorScheme={projects[0].category?.color}
                        fontSize={"12px"}
                        fontWeight={500}
                        textTransform={"capitalize"}
                        py={1}
                        px={3}
                        rounded={10}
                      >
                        {projects[0].category?.category_name || "Category"}
                      </Badge>
                      <Text color={projects[0].category?.color}>•</Text>
                      <Badge
                        w={"fit-content"}
                        variant="solid"
                        colorScheme={projects[0].category?.color}
                        fontSize={"12px"}
                        fontWeight={500}
                        textTransform={"capitalize"}
                        py={1}
                        px={3}
                        rounded={10}
                      >
                        {projects[0].subCategory?.subCategory_name ||
                          "Subcategory"}
                      </Badge>
                    </HStack>

                    <Text>{projects[0]?.project_name}</Text>

                    <HStack
                      color={"gray.500"}
                      w={"fit-content"}
                      fontSize={"sm"}
                      display="flex"
                      alignItems="center"
                    >
                      <Text>Updated</Text>

                      <Text>•</Text>

                      <Text>
                        {" "}
                        {format(
                          parseISO(projects[0].updated_at),
                          "MMMM dd, yyyy"
                        )}
                      </Text>

                      <Flex
                        gap={2}
                        bg={"tertiary.300"}
                        _hover={{
                          bg: "tertiary.500",
                        }}
                        px={2}
                        py={"5px"}
                        rounded={"reset"}
                        cursor={"pointer"}
                        color={"secondary.800"}
                        justify={"center"}
                        align="center"
                        onClick={() =>
                          router.push(ROUTE_PATH.DASHBOARD.PROJECT)
                        }
                      >
                        <Text fontWeight={600} fontSize={"xs"}>
                          View
                        </Text>
                      </Flex>
                    </HStack>

                    <Divider />

                    <VStack w={"auto"} align={"left"} gap={4}>
                      <HStack flexWrap={"wrap"}>
                        {projects[0].tagsOnProjects?.map((tag: any) => {
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

                      <Text>{projects[0].excerpt}</Text>
                    </VStack>
                  </Stack>
                </>
              </HStack>
            </HStack>
          </VStack>
        )}
      </Flex>
    </VStack>
  );
}

export default ProjectInfoDisplay;
