/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import { CustomPagination } from "@/components/CustomPagination";
import { getAllProjects } from "@/services/endpoints/project";
import {
  CategoryRes,
  TagRes,
  GetAllProjectsRes,
  Project,
} from "@/services/endpoints/type";
import PublicProjectCard from "@/ui/Cards/PublicProjectCard";
import {
  VStack,
  Text,
  HStack,
  Input,
  Flex,
  Button,
  InputGroup,
  InputLeftElement,
  Wrap,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
import PublicCustomFilter from "@/ui/Filter&Checkbox/PublicCustomFilter";
import FilterCheckbox from "@/ui/Filter&Checkbox/FilterCheckbox";
import { RxReset } from "react-icons/rx";

type Props = {
  allProjects: GetAllProjectsRes;
  categories: CategoryRes;
  tags: TagRes;
};

function Marketplace({ allProjects, categories, tags }: Props) {
  const showFilterBtn = useBreakpointValue({ base: true, lg: false });
  const takeNum =
    useBreakpointValue({ base: 4, sm: 6, xl: 8 }, { ssr: false }) || 8;
  const { projects, total } = allProjects?.result.detail;
  const [filteredProjects, setFilteredProjects] =
    React.useState<Project[]>(projects);
  const [pagination, setPagination] = React.useState({
    skip: 0,
    take: takeNum,
    total,
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
      let page;

      if (
        selectedCategories.category_id.length > 0 ||
        selectedCategories.subCategory_id.length > 0 ||
        selectedCategories.tag_ids.length > 0
      ) {
        page = {
          skip: pagination.skip.toString(),
          take: pagination.take.toString(),
          category_id: categoryQueryParam,
          subCategory_id: subCategoryQueryParam,
          tag_ids: tagsQueryParam,
          status: "approved",
        };
      } else {
        page = {
          skip: pagination.skip.toString(),
          take: pagination.take.toString(),
          status: "approved",
        };
      }

      const res = await getAllProjects(page);

      if (res.result.statusCode === 200) {
        setFilteredProjects(res.result.detail.projects);

        setPagination((prevPagination) => ({
          ...prevPagination,
          total: res.result.detail.total,
        }));
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSearchQuery = async () => {
    const page = {
      skip: pagination.skip.toString(),
      take: pagination.take?.toString(),
      query,
      status: "approved",
    };

    const res = await getAllProjects(page);

    if (res.result.statusCode === 200) {
      setFilteredProjects(res.result.detail.projects);

      setPagination((prevPagination) => ({
        ...prevPagination,
        total: res.result.detail.total,
      }));
    }
  };

  useEffect(() => {
    toGetAllProjects();
  }, [pagination.currentPage, selectedCategories]);

  return (
    <VStack
      mt={{ base: "100px", md: "160px" }}
      minH={"100vh"}
      mx={{ base: 4, md: 12 }}
    >
      <HStack align="left" mb="18px" w={{ base: "100%", lg: "4xl" }}>
        {showFilterBtn && (
          <FilterCheckbox
            categories={categories.result.detail.categories}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        )}

        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Search2Icon />
          </InputLeftElement>
          <Input
            borderWidth={2}
            placeholder="search"
            onChange={(e) => setQuery(e.target.value)}
          />
        </InputGroup>

        <Stack
          w={"80px"}
          h={"40px"}
          alignItems={"center"}
          justifyContent={"center"}
          rounded={5}
          bg={"gray.400"}
          shadow={"md"}
          onClick={handleSearchQuery}
          cursor={"pointer"}
        >
          <Search2Icon color={"white"} />
        </Stack>
      </HStack>

      <HStack
        minH={"100%"}
        w={"100%"}
        my={12}
        gap={{ base: 4, md: 8, lg: 12 }}
        align={"flex-start"}
        flexDir={{ base: "column", lg: "row" }}
      >
        {!showFilterBtn && (
          <Flex h={"100%"} align={"flex-start"} w={""}>
            <Flex h={"100%"}>
              <VStack
                borderColor={"gray.300"}
                minW={"250px"}
                py={4}
                px={4}
                flexDir={{ base: "row", lg: "column" }}
                flexWrap={{ base: "wrap", md: "nowrap" }}
              >
                <HStack w={"full"} justify={"space-between"}>
                  <Text
                    textStyle={"md"}
                    fontWeight={600}
                    textAlign={"left"}
                    w={"full"}
                  >
                    Category
                  </Text>
                  <Button
                    onClick={() => {
                      setSelectedCategories({
                        category_id: [],
                        subCategory_id: [],
                        tag_ids: [],
                      });
                      setQuery("");
                    }}
                    cursor="pointer"
                    size={"sm"}
                    fontSize={"12px"}
                    fontWeight={"400"}
                    variant={"text"}
                    px={0}
                  >
                    <RxReset size={20} color={"secondary.800"} />
                  </Button>
                </HStack>

                <PublicCustomFilter
                  categories={categories.result.detail.categories}
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                />
              </VStack>
            </Flex>
          </Flex>
        )}

        <VStack
          p={0}
          m={0}
          w={"100%"}
          minH={"100vh"}
          justify={"space-between"}
          gap={12}
        >
          <Wrap
            w={"full"}
            spacing={{ base: 16, sm: 6 }}
            justify={"space-evenly"}
          >
            {filteredProjects?.length > 0 ? (
              filteredProjects.map((project) => {
                return (
                  <Flex key={project.id}>
                    <PublicProjectCard
                      projectId={project.id}
                      company_name={project.company?.company_name || "company"}
                      company_profile={
                        project.company?.company_profile_url || ""
                      }
                      status={project.status}
                      project_name={project.project_name}
                      category_name={project.category?.category_name || ""}
                      subCategory_name={
                        project.subCategory?.subCategory?.subCategory_name || ""
                      }
                      tags={project.tagsOnProjects || []}
                      excerpt={project.excerpt}
                      updated_at={project.updated_at}
                      cover_image={project.cover_image}
                      color={project.category?.color}
                    />
                  </Flex>
                );
              })
            ) : (
              <Flex justify={"center"} w={"full"}>
                <Text textAlign={"center"}>Sorry, no results found.</Text>
              </Flex>
            )}
          </Wrap>

          <CustomPagination
            pagination={pagination}
            setPagination={setPagination}
          />
        </VStack>
      </HStack>
    </VStack>
  );
}

export default Marketplace;
