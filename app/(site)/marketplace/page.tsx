/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { CustomPagination } from "@/components/CustomPagination";
import { getAllProjects } from "@/services/endpoints/project";
import { getTags } from "@/services/endpoints/tag";
import { Project, Tag } from "@/services/endpoints/type";
import GeneralProjectCard from "@/ui/Cards/GeneralProjectCard";
import PublicProjectCard from "@/ui/Cards/PublicProjectCard";
import CustomFilter from "@/ui/Form/CustomFilter";
import SectionContainer from "@/ui/SectionContainer";
import {
  VStack,
  Text,
  HStack,
  Input,
  GridItem,
  SimpleGrid,
  Flex,
  Center,
  Box,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function Marketplace() {
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [pagination, setPagination] = React.useState({
    skip: 0,
    take: 6,
    total: 0,
    currentPage: 1,
  });
  const [query, setQuery] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<any>({
    category_id: [],
    subCategory_id: [],
    tag_ids: [],
  });

  const toGetAllProjects = async () => {
    const categoryQueryParam = selectedCategories.category_id.join(",");
    const subCategoryQueryParam = selectedCategories.subCategory_id.join(",");
    const tagsQueryParam = selectedCategories.tag_ids.join(",");

    try {
      // if has category or subcategory, add them to page
      let page;
      if (
        selectedCategories.category_id.length > 0 ||
        selectedCategories.tag_ids.length > 0 ||
        query
      ) {
        page = {
          skip: pagination.skip.toString(),
          take: pagination.take.toString(),
          category_id: categoryQueryParam,
          subCategory_id: subCategoryQueryParam,
          tag_ids: tagsQueryParam,
          query,
        };
      } else {
        page = {
          skip: pagination.skip.toString(),
          take: pagination.take.toString(),
        };
      }

      const res = await getAllProjects(page);

      if (res.result.statusCode === 200) {
        setProjects(res.result.detail.projects);

        setPagination((prevPagination) => ({
          ...prevPagination,
          total: res.result.detail.total,
        }));
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    toGetAllProjects();
  }, [pagination.currentPage, selectedCategories, query]);

  return (
    <Center mt={"70px"} minH={"100vh"} mx={12}>
      <HStack
        minH={"100%"}
        maxW={"1600px"}
        w={"100%"}
        my={12}
        gap={4}
        align={"flex-start"}
      >
        <Flex h={"100%"} align={"flex-start"}>
          <Flex h={"100%"}>
            <VStack
              border={"1px"}
              borderColor={"gray.300"}
              w={"300px"}
              py={4}
              px={4}
            >
              <VStack w={"full"} align="left" mb="18px">
                <Text fontSize="sm">Search by project name:</Text>
                <Input
                  placeholder="search"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </VStack>

              <CustomFilter
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
              />

              <Button
                onClick={() => {
                  setSelectedCategories({
                    category_id: [],
                    subCategory_id: [],
                    tag_ids: [],
                  });
                  setQuery("");
                }}
                bg="secondary.500"
                border="1px solid gray.200"
                cursor="pointer"
                color={"white"}
                transition={"all .3s ease"}
                _hover={{
                  bg: "secondary.600",
                }}
                size={"sm"}
                fontSize={"12px"}
                fontWeight={"400"}
                alignSelf={"flex-end"}
              >
                Clear
              </Button>
            </VStack>
          </Flex>
        </Flex>

        <VStack p={0} m={0} w={"100%"} minH={"100vh"} justify={"space-between"}>
          <SimpleGrid
            columns={{ base: 1, md: 2, xl: 3 }}
            spacing={10}
            placeItems="center"
            mb={24}
          >
            {projects?.length > 0 ? (
              projects.map((project) => {
                return (
                  <Flex key={project.id}>
                    <PublicProjectCard
                      company_name={project.company?.company_name || "company"} // need change
                      status={project.status}
                      project_name={project.project_name}
                      category_name={project.category?.category_name || ""}
                      subCategory_name={
                        project.subCategory?.subCategory_name || ""
                      }
                      tags={project.tagsOnProjects || []}
                      excerpt={project.excerpt}
                      updated_at={project.updated_at}
                    />
                  </Flex>
                );
              })
            ) : (
              <Flex justify={"center"} w={"full"}>
                <Text textAlign={"center"}>Sorry, no results found.</Text>
              </Flex>
            )}
          </SimpleGrid>

          <CustomPagination
            pagination={pagination}
            setPagination={setPagination}
          />
        </VStack>
      </HStack>
    </Center>
  );
}

export default Marketplace;
