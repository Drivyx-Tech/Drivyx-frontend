/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
"use client";

import {
  Button,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAppSlector } from "@/services/redux/hooks";
import Link from "next/link";
import { getProjectByUserId } from "@/services/endpoints/project";
import { Project } from "@/services/endpoints/type";
import { AddIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import GeneralProjectCard from "@/ui/Cards/GeneralProjectCard";
import { CustomPagination } from "@/components/CustomPagination";
import { ProfileIconUpload } from "@/components/uploadFile/ProfileIconUpload";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { getCompany } from "@/services/endpoints/company";

function DashboardHome() {
  const toast = useToast();
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

  const isCompanyExisted = async () => {
    const company = await getCompany();
    if (company.result.detail.company_name === null) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    const flag = isCompanyExisted();
    if (!flag) {
      toast({
        title: "Please create company profile first",
        description: "",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      router.push("/dashboard/profile");
    }
  }, []);

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
      <VStack
        w={"full"}
        h={"full"}
        gap={{ base: 8, lg: 16 }}
        flex={1}
        ml={12}
        pr={4}
      >
        <Flex w={"full"}>
          <ProfileIconUpload />
          <VStack justify={"center"} w={"full"} align="left">
            <Text fontSize={"lg"} fontWeight={"bold"}>
              {user.given_name + " " + user.family_name}
            </Text>
            <HStack>
              <MdEmail />
              <Text>{user.email}</Text>
            </HStack>
            <HStack>
              <FaPhone />
              <Text>{company.contact_number}</Text>
            </HStack>
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

        <VStack
          align={"left"}
          w={"full"}
          h={"full"}
          justifyContent={"space-around"}
          gap={{ base: 2 }}
        >
          <Text fontSize="lg" fontWeight={"bold"}>
            Organization Profile
          </Text>
          <Flex w={"full"}>
            <Text>Organization: {company.company_name}</Text>
          </Flex>
          <Flex w={"full"}>
            <Text>Website: {company.website_url} </Text>
          </Flex>

          <Flex w={"full"}>
            <Text>Industry: {company.industry} </Text>
          </Flex>
          <Flex w={"full"}>
            <Text>Organization size: {company.company_size} </Text>
          </Flex>
          <Flex w={"full"}>
            <Text>Annual revenue: {company.annual_revenue} </Text>
          </Flex>
          <Flex w={"full"}>
            <Text>Location: {company.location} </Text>
          </Flex>
          <VStack w={"full"} gap={{ base: 2 }}>
            <Text w={"full"}>Organization description: </Text>
            <Text
              w={"full"}
              minH={"200px"}
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
            columns={{ base: 1, md: 1, lg: 2 }}
            row={{ base: 1, lg: 2, xl: 3 }}
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
