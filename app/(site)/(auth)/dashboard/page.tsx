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
import UploadImage from "@/components/UploadImage";
import GeneralProjectCard from "@/ui/Cards/GeneralProjectCard";
import { getCategories } from "@/services/endpoints/category";
import { CustomPagination } from "@/components/CustomPagination";

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
    <Grid
      templateAreas={`"header header"
    "profile main"
   `}
      gridTemplateRows={"1fr 6fr"}
      gridTemplateColumns={"1fr 1.5fr"}
      h={"92.3vh"}
      border={"1px"}
      borderColor={"gray.200"}
      borderBottomColor={"transparent"}
    >
      <GridItem ml={12} area={"header"} w={"100%"}>
        <HStack h={"full"} justify={"space-between"}>
          <Flex>
            <Avatar
              src={company?.company_profile_icon || defaultAvatar.src}
              w="80px"
              h="80px"
              borderRadius="full"
              mr={6}
            />
            <VStack justify={"center"} w={"fit-content"} align="left">
              <Text fontSize={"lg"} fontWeight={"bold"}>
                Contact Name
              </Text>
              <Text>Email</Text>
            </VStack>
          </Flex>

          <Flex pr={12} h={"full"} align={"end"} gap={6} mr={12}>
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
        </HStack>
      </GridItem>

      <GridItem
        px={12}
        area={"profile"}
        pt={8}
        border={"1px"}
        borderColor={"gray.200"}
        borderLeftColor={"transparent"}
        borderRightColor={"transparent"}
        borderBottomColor={"transparent"}
      >
        <VStack w={"full"} h={"full"} gap={8}>
          <VStack align={"left"} w={"full"}>
            <Text fontSize="lg" fontWeight={"bold"} mb={4}>
              Contact Profile
            </Text>

            <Flex w={"full"} mb="18px" gap={4}>
              <Text>Contact: {user.given_name + " " + user.family_name}</Text>
            </Flex>
            <Flex w={"full"} mb="18px" gap={4}>
              <Text>Email: {user.email}</Text>
              <Text>Contact number: {company.contact_number}</Text>
            </Flex>
          </VStack>
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
              <Text w={"full"}>{company.description} </Text>
            </VStack>
          </VStack>
        </VStack>
      </GridItem>

      <VStack p={0} m={0}>
        <GridItem
          area={"main"}
          w={"full"}
          h={"100%"}
          pt={8}
          px={8}
          border={"1px"}
          borderColor={"gray.200"}
          borderRightColor={"transparent"}
          borderBottomColor={"transparent"}
        >
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={6}
            placeItems="center"
            mb={4}
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
        </GridItem>
        <CustomPagination
          pagination={pagination}
          setPagination={setPagination}
        />
      </VStack>
    </Grid>
  );
}

export default DashboardHome;
