/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { CustomPagination } from "@/components/CustomPagination";
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
  Button,
  Link,
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
    take: 1,
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
      <VStack
        w={"full"}
        h={"full"}
        align={"flex-start"}
        justify={"space-between"}
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
              {projects.map((project, index) => (
                <VStack
                  key={index}
                  w={"full"}
                  spacing={8}
                  align="start"
                  justify={"space-between"}
                >
                  <Flex w={"200px"} flexDir={"column"} gap={4}>
                    <Image
                      w={"full"}
                      h={100}
                      objectFit={"cover"}
                      src={
                        project?.cover_image &&
                        process.env.NEXT_PUBLIC_S3_USER_BUCKET +
                          project.cover_image
                      }
                      alt={project?.project_name}
                    />
                  </Flex>

                  <Stack spacing="2" w={"full"} justify={"space-between"}>
                    <Badge alignSelf={"left"} w={"fit-content"}>
                      {project.status}
                    </Badge>

                    <Text fontWeight={600}>{project?.project_name}</Text>

                    <HStack
                      color={"gray.500"}
                      w={"full"}
                      fontSize={"sm"}
                      display="flex"
                      alignItems="center"
                      justify={"space-between"}
                    >
                      <HStack>
                        <Text>Created at</Text>

                        <Text>•</Text>

                        <Text>
                          {" "}
                          {format(
                            parseISO(project.created_at),
                            "MMMM dd, yyyy"
                          )}
                        </Text>
                      </HStack>

                      <HStack>
                        <Link
                          target="_blank"
                          href={ROUTE_PATH.NON_AUTH.CONTACT}
                        >
                          Contact us
                        </Link>

                        {/* <Button
                          bg={"tertiary.300"}
                          _hover={{
                            bg: "tertiary.500",
                          }}
                          size={"sm"}
                          h={"28px"}
                          rounded={"reset"}
                          cursor={"pointer"}
                          color={"secondary.800"}
                          onClick={() =>
                            router.push(ROUTE_PATH.DASHBOARD.PROJECT)
                          }
                        >
                          <Text fontWeight={600} fontSize={"xs"}>
                            View in detail
                          </Text>
                        </Button> */}
                      </HStack>
                    </HStack>

                    <Divider />

                    <VStack w={"auto"} align={"left"} gap={4}>
                      <VStack w={"full"} align={"left"} gap={1}>
                        <Text fontSize={"sm"} textColor={"gray.500"}>
                          Category
                        </Text>
                        <Text w={"full"}>
                          {" "}
                          {project.category?.category_name || "Category"}
                        </Text>
                      </VStack>

                      <VStack w={"full"} align={"left"} gap={1}>
                        <Text fontSize={"sm"} textColor={"gray.500"}>
                          Subcategory
                        </Text>
                        <Text w={"full"}>
                          {" "}
                          {project.subCategory?.subCategory_name ||
                            "Subcategory"}
                        </Text>
                      </VStack>

                      <VStack w={"full"} align={"left"} gap={1}>
                        <VStack w={"full"} align={"left"} gap={1}>
                          <Text fontSize={"sm"} textColor={"gray.500"}>
                            Tag
                          </Text>
                          <HStack flexWrap={"wrap"}>
                            {project.tagsOnProjects?.map((tag: any) => {
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

                      <VStack w={"full"} align={"left"} gap={1}>
                        <Text fontSize={"sm"} textColor={"gray.500"}>
                          About project
                        </Text>
                        <Text>{project.excerpt}</Text>
                      </VStack>
                    </VStack>
                  </Stack>
                </VStack>
              ))}
            </HStack>
          </VStack>
        )}

        <CustomPagination
          pagination={pagination}
          setPagination={setPagination}
        />
      </VStack>
    </VStack>
  );
}

export default ProjectInfoDisplay;
