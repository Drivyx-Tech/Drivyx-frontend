/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { ProjectCard } from "@/components/project/ProjectCard";
import {
  Avatar,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import imageArchitect1 from "public/images/role.jpeg";
import defaultAvatar from "public/svg/person-circle-auth.svg";
import { useAppSlector } from "@/services/redux/hooks";
import Link from "next/link";
import { getProjectByUserId } from "@/services/endpoints/project";
import { Category, Project } from "@/services/endpoints/type";
import { AddIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import GeneralProjectCard from "@/ui/Cards/GeneralProjectCard";
import { getCategories } from "@/services/endpoints/category";
import { CustomPagination } from "@/components/CustomPagination";
import { ImageUpload } from "@/components/uploadFile/ImageUpload";

function DashboardHome() {
  const router = useRouter();
  const user = useAppSlector((state) => state.tmpStore.user);
  const company = useAppSlector((state) => state.tmpStore.company);
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [pagination, setPagination] = React.useState({
    skip: 0,
    take: 4,
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
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    userProjects();
  }, [pagination.currentPage]);

  return (
    <HStack
      h={"92.3vh"}
      border={"1px"}
      borderColor={"gray.200"}
      borderBottomColor={"transparent"}
      pt={4}
    >
      <VStack w={"full"} h={"full"} gap={8} flex={1} ml={12} pr={4}>
        <Flex w={"full"}>
          <Avatar
            src={company?.company_profile_icon || defaultAvatar.src}
            w="80px"
            h="80px"
            borderRadius="full"
            mr={6}
          />
          <ImageUpload />
          <VStack justify={"center"} w={"full"} align="left">
            <Text fontSize={"lg"} fontWeight={"bold"}>
              {user.given_name + " " + user.family_name}
            </Text>
            <Flex w={"full"} mb="18px" gap={4}>
              <Text>Email: {user.email}</Text>
            </Flex>
            <Flex w={"full"} mb="18px" gap={4}>
              <Text>Contact number: {company.contact_number}</Text>
            </Flex>
          </VStack>

          <Button
            onClick={() => router.push("/dashboard/profile")}
            w={"100px"}
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
          >
            Edit Profile
          </Button>
        </Flex>

        <VStack align={"left"} w={"full"} gap={2}>
          <Text fontSize="lg" fontWeight={"bold"} mb={4}>
            Company Profile
          </Text>
          <Flex w={"full"} mb="18px" gap={4}>
            <Text>Company: {company.company_name}</Text>
          </Flex>
          <Flex w={"full"} mb="18px" gap={4}>
            <Text>Website: {company.website_url} </Text>
          </Flex>

          <Flex w={"full"} mb="18px" gap={4}>
            <Text>Industry:{company.industry} </Text>
          </Flex>
          <Flex w={"full"} mb="18px" gap={4}>
            <Text>Company size: {company.company_size} </Text>
          </Flex>
          <Flex w={"full"} mb="18px" gap={4}>
            <Text>Annual revenue: {company.annual_revenue} </Text>
          </Flex>
          <Flex w={"full"} mb="18px" gap={4}>
            <Text>Location: {company.location} </Text>
          </Flex>
          <VStack w={"full"} mb="18px" gap={4}>
            <Text w={"full"}>Description: </Text>
            <Text
              w={"full"}
              h={"200px"}
              border={"1px"}
              borderColor={"gray.300"}
              rounded={"6px"}
              py={2}
              px={4}
            >
              {company.description}
            </Text>
          </VStack>
        </VStack>
      </VStack>

      <VStack
        flex={1.5}
        h={"full"}
        mr={12}
        pl={4}
        border={"1px"}
        borderColor={"transparent"}
        borderLeftColor={"gray.100"}
      >
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
            columns={{ base: 1, lg: 2 }}
            spacing={6}
            placeItems="center"
            my={4}
          >
            {projects.length > 0 ? (
              projects.map((project, index) => {
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
    </HStack>
  );
}

export default DashboardHome;
