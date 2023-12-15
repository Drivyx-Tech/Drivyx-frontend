/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect } from "react";
import {
  Button,
  Flex,
  HStack,
  Link,
  SimpleGrid,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import GeneralProjectCard from "@/ui/Cards/GeneralProjectCard";
import { AddIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { Project } from "@/services/endpoints/type";
import { getProjectByUserId } from "@/services/endpoints/project";
import { CustomPagination } from "../CustomPagination";
import { getCompany } from "@/services/endpoints/company";
import { useAppDispatch } from "@/services/redux/hooks";
import { tmpStoreAction } from "@/services/redux/tmpStore.reducer";

function ListCreatedProjects() {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const router = useRouter();
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [pagination, setPagination] = React.useState({
    skip: 0,
    take: 3,
    total: 0,
    currentPage: 1,
  });

  const userProjects = async () => {
    try {
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
    } catch (error: any) {
      console.log("error", error.response?.status);
    }
  };

  const userCompany = async () => {
    try {
      const res = await getCompany();

      if (res.result.code === 404) {
        toast({
          title: "Please create company profile",
          description: "",
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
        router.push("/dashboard/profile");
      }

      if (res.result.statusCode === 200) {
        dispatch(
          tmpStoreAction.setState((state) => {
            state.user.company = res?.result.detail;
            return state;
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userProjects();
    userCompany();
  }, [pagination.currentPage]);

  return (
    <VStack flex={1.5} h={"full"}>
      <Flex w={"full"} align={"end"} justify={"flex-end"} gap={6}>
        <Link href={"/contact"}>
          <Text fontWeight={"bold"} color={"secondary.400"}>
            Contact Us
          </Text>
        </Link>
        <Button
          onClick={() => router.push("/dashboard/project")}
          w={"fit-content"}
          bg="secondary.500"
          border="1px solid gray.200"
          cursor="pointer"
          color={"white"}
          transition={"all .3s ease"}
          _hover={{
            bg: "secondary.600",
          }}
          leftIcon={<AddIcon />}
          size={"sm"}
          fontSize={"12px"}
          fontWeight={"400"}
        >
          New a Project
        </Button>
      </Flex>
      <VStack h={"full"} justify={"space-between"}>
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 1 }}
          row={{ base: 1, lg: 2, xl: 3 }}
          spacing={6}
          placeItems="center"
          my={4}
        >
          {projects.length > 0 ? (
            projects.map((project: any, index: number) => {
              return (
                <Flex key={index}>
                  <GeneralProjectCard
                    company_name={project.project_name}
                    status={project.status}
                    project_name={project.project_name}
                    category_name={project.category?.category_name || ""}
                    subCategory_name={
                      project.subCategory?.subCategory_name || ""
                    }
                    tags={project.tagsOnProjects || []}
                    excerpt={project.excerpt}
                    update_at={project.updated_at}
                    imageUrl={project.cover_image}
                  />
                </Flex>
              );
            })
          ) : (
            <Flex>
              <Text>You don't have any projects, click to create</Text>
            </Flex>
          )}
        </SimpleGrid>

        <CustomPagination
          pagination={pagination}
          setPagination={setPagination}
        />
      </VStack>
    </VStack>
  );
}

export default ListCreatedProjects;
