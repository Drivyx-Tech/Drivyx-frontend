"use client";

import {
  VStack,
  HStack,
  Text,
  Input,
  Box,
  useCheckboxGroup,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  filterProjects,
  getAllProjects,
  getAllTags,
  getAllCategories,
} from "@/sanity/sanity-utils";
import SectionContainer from "@/ui/SectionContainer";
import ProjectCard from "@/ui/Cards/ProjectCard";
import { Project } from "@/types/Project";
import { Category } from "@/types/category";
import { Tag } from "@/types/tag";
import CategoryCheckbox from "./CategoryCheckbox";
import TagCheckbox from "./TagCheckbox";
import { SubCategory } from "@/types/subCategory";

const Service = () => {
  const [query, setQuery] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>(
    []
  );
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const [projects, setProjects] = useState<Project[]>([]);
  const [category, setCategory] = useState<Category[]>([]);
  const [subCategory, setSubCategory] = useState<SubCategory[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    getAllCategories()
      .then((categories) => {
        console.log("categories", categories);
        setCategory(categories);
      })
      .catch((error) => {
        console.error("Error retrieving categories:", error);
      });

    getAllTags()
      .then((tags) => {
        setTags(tags);
      })
      .catch((error) => {
        console.error("Error retrieving tags:", error);
      });

    getAllProjects()
      .then((projects) => {
        console.log("projectggs", projects);
        setProjects(projects);
      })
      .catch((error) => {
        console.error("Error retrieving projects:", error);
      });
  }, []);

  useEffect(() => {
    filterProjects({
      query,
      categoryId: selectedCategories,
      tagId: selectedTags,
    })
      .then((projects) => {
        setProjects(projects);
      })
      .catch((error) => {
        console.error("Error retrieving projects:", error);
      });
  }, [query, selectedCategories, selectedTags]);

  return (
    <SectionContainer>
      <VStack>
        <Text textStyle={"heading"}>Service</Text>

        <HStack w={"100%"} gap={8} justify={"center"}>
          <Input
            maxW={"400px"}
            placeholder="search"
            size="md"
            onChange={(e) => setQuery(e.target.value)}
          />

          <CategoryCheckbox
            categories={category}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />

          <TagCheckbox
            tags={tags}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        </HStack>
        {/* <Text>Categories: {selectedCategories.join(" and ")}</Text>
        <Text>Tags: {selectedTags}</Text> */}
        <HStack
          w={"100%"}
          justify={"space-between"}
          align="left"
          border={"1px solid"}
          borderColor={"secondary.100"}
          h={"1000px"}
          backgroundColor={"gray.100"}
          overflowY="auto"
        >
          <Box w={"100%"}>
            {projects?.length > 0 ? (
              projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))
            ) : (
              <Text>no projects yet</Text>
            )}
          </Box>
        </HStack>
      </VStack>
    </SectionContainer>
  );
};

export default Service;
