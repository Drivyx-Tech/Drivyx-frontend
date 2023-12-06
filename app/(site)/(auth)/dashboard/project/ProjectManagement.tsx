"use client";

import React, { useEffect } from "react";
import {
  Avatar,
  Button,
  Flex,
  Grid,
  Icon,
  Text,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  TableContainer,
  Tfoot,
  TableCaption,
  Link,
  Tag,
  TagLabel,
  WrapItem,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { FaPlus } from "react-icons/fa";
import CustomCardContainer from "@/ui/Cards/CustomCardContainer";
import { ProjectCard } from "@/components/project/ProjectCard";
import { useAppSlector } from "@/services/redux/hooks";
import { getProjectByUserId } from "@/services/endpoints/project";
import { Project } from "@/services/endpoints/type";

function ProjectManagement() {
  const [projects, setProjects] = React.useState<Project[]>([]);

  // const userProjects = async () => {
  //   try {
  //     const res = await getProjectByUserId({ skip: "0", take: "10" });
  //     if (res.result.statusCode === 200) setProjects(res.result.detail);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  // useEffect(() => {
  //   userProjects();
  // }, []);

  return (
    <VStack bgColor={"gray.100"} z-index={-1}>
      <CustomCardContainer
        title={"Project"}
        description={"some description of projects"}
      >
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>project</Th>
                <Th>status</Th>
                <Th>category</Th>
                <Th>subcategory</Th>
                <Th>tag</Th>
                <Th>created at</Th>
                <Th>actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {projects.map((project, index) => {
                return (
                  <Tr key={index}>
                    <Td>
                      <Link href={"#"} color={"blue"}>
                        {project.project_name}
                      </Link>
                    </Td>
                    <Td>
                      <Tag size={"md"} variant="subtle" colorScheme="cyan">
                        <TagLabel>{project.status}</TagLabel>
                      </Tag>
                    </Td>
                    <Td>{project.category?.category_name}</Td>
                    <Td>{project.subCategory?.subCategory_name}</Td>
                    <Td>
                      {project.tagsOnProjects?.map((tag, index) => {
                        return (
                          <Tag
                            key={index}
                            size={"sm"}
                            variant="subtle"
                            colorScheme="lime"
                            px={2}
                          >
                            <TagLabel>{tag.tag_name}</TagLabel>
                          </Tag>
                        );
                      })}
                    </Td>
                    <Td>{project.created_at}</Td>
                    <Td>
                      <HStack>
                        <Button size="sm" colorScheme="green">
                          Edit
                        </Button>
                      </HStack>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </CustomCardContainer>
    </VStack>
  );
}

export default ProjectManagement;
