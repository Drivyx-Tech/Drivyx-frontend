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
    <Center mt={"70px"} minH={"100vh"}>
      <HStack
        h={"full"}
        maxW={"1600px"}
        w={"100%"}
        py={12}
        gap={8}
        align={"flex-start"}
      >
        <Flex h={"100%"} align={"flex-start"}>
          <Flex h={"100%"}>
            <VStack
              border={"1px"}
              borderColor={"gray.300"}
              w={"300px"}
              gap={4}
              py={8}
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
            </VStack>
          </Flex>
        </Flex>

        <VStack p={0} m={0} w={"100%"}>
          <SimpleGrid
            columns={{ base: 1, xl: 2 }}
            spacing={10}
            placeItems="center"
            mb={24}
          >
            {projects?.length > 0 ? (
              projects.map((project) => {
                return (
                  <Flex key={project.id}>
                    <PublicProjectCard
                      company_name={project.project_name} // need change
                      status={project.status}
                      project_name={project.project_name}
                      category_name={project.category?.category_name || ""}
                      subCategory_name={
                        project.subCategory?.subCategory_name || ""
                      }
                      tags={project.tagsOnProjects || []}
                      excerpt={project.excerpt}
                      update_at={project.updated_at}
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
      </HStack>
    </Center>
  );
}

export default Marketplace;
