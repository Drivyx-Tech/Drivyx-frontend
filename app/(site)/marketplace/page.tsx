/* eslint-disable react/no-unescaped-entities */
"use client";

import { CustomPagination } from "@/components/CustomPagination";
import { getAllProjects } from "@/services/endpoints/project";
import { Project } from "@/services/endpoints/type";
import GeneralProjectCard from "@/ui/Cards/GeneralProjectCard";
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

  const [selectedCategories, setSelectedCategories] = useState<any>({
    category_id: [],
    subCategory_id: [],
  });

  const toGetAllProjects = async () => {
    const categoryQueryParam = selectedCategories.category_id.join(",");
    const subCategoryQueryParam = selectedCategories.subCategory_id.join(",");

    try {
      // if has category or subcategory, add them to page
      let page;
      if (selectedCategories.category_id.length > 0) {
        page = {
          skip: pagination.skip.toString(),
          take: pagination.take.toString(),
          category_id: categoryQueryParam,
          subCategory_id: subCategoryQueryParam,
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
  }, [pagination.currentPage, selectedCategories]);

  return (
    <Center mt={"70px"}>
      <HStack maxW={"1600px"} w={"100%"} p={12} gap={24}>
        <VStack justify={"start"}>
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
              <Input placeholder="search" />
            </VStack>

            <CustomFilter
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          </VStack>
        </VStack>

        <VStack p={0} m={0} w={"100%"}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={10}
            placeItems="center"
            mb={24}
          >
            {projects?.length > 0 ? (
              projects.map((project) => {
                return (
                  <Flex key={project.id}>
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
