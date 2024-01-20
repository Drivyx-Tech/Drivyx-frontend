"use client";

import React from "react";
import {
  Avatar,
  Button,
  Divider,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ProfileIconUpload } from "./uploadFile/ProfileIconUpload";
import { MdEmail, MdOutlineEdit } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useAppSlector } from "@/services/redux/hooks";
import Organization from "@/ui/SVG/Organization";
import { ROUTE_PATH } from "@/constants/ROUTE_PATH";
import CustomSolidButton from "@/ui/Button/CustomSolidButton";
import CustomIconButton from "@/ui/Button/CustomIconButton";
import { TbWorld } from "react-icons/tb";
import { Link } from "@chakra-ui/next-js";

function BasicInfoDisplay() {
  const router = useRouter();
  const user = useAppSlector((state) => state.tmpStore.user);
  const { company } = user;

  return (
    <VStack w={"full"} h={"full"} gap={{ base: 8 }} flex={1}>
      <Flex
        w={"full"}
        gap={4}
        bgColor={"white"}
        p={8}
        rounded={30}
        shadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
      >
        <Avatar
          src={"https://bit.ly/broken-link"}
          w="80px"
          h="80px"
          borderRadius={5}
          overflow={"hidden"}
          rounded={"full"}
        />
        <VStack justify={"center"} w={"full"} align="left">
          <HStack align={"flex-end"}>
            <Text
              fontSize={"md"}
              fontWeight={"bold"}
              textColor={"secondary.800"}
            >
              {user?.given_name + " " + user?.family_name}
            </Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              Project Manager
            </Text>
          </HStack>

          <Text fontSize={"sm"} color={"gray.500"}>
            {user?.email}
          </Text>

          <Text
            fontSize={"sm"}
            cursor={"pointer"}
            textDecoration={"underline"}
            onClick={() => {}}
          >
            Edit profile
          </Text>
        </VStack>
      </Flex>

      <Flex
        w={"full"}
        h={"full"}
        gap={4}
        bgColor={"white"}
        p={8}
        rounded={30}
        shadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
        align={"flex-start"}
      >
        {!company ? (
          <VStack justify={"center"} w={"full"} align="left">
            <Text
              fontSize={"md"}
              fontWeight={"bold"}
              textColor={"secondary.800"}
            >
              Add your organization
            </Text>

            <Divider />

            <Text fontSize={"sm"} color={"gray.500"} my={4}>
              Complete your company profile to unlock exclusive features and
              opportunities. Showcase your projects and connect with investors
              looking for impactful ventures.
            </Text>

            <CustomIconButton
              text={"Add your organization"}
              navTo={ROUTE_PATH.DASHBOARD.PROFILE}
            />
          </VStack>
        ) : (
          <VStack justify={"center"} w={"full"} align="left">
            <HStack justify={"space-between"} align="flex-end" mb={2}>
              <HStack spacing={4}>
                <Avatar
                  src={"https://bit.ly/broken-link"}
                  w="80px"
                  h="80px"
                  overflow={"hidden"}
                />
                <VStack align="left">
                  <HStack>
                    <Text
                      fontSize={"md"}
                      fontWeight={"bold"}
                      textColor={"secondary.800"}
                    >
                      {company.company_name}
                    </Text>
                    <Text fontSize={"sm"} color={"gray.500"}>
                      {company.type || company.industry}
                    </Text>
                  </HStack>

                  <HStack gap={3} w={"full"}>
                    <HStack gap={1}>
                      <Flex align={"center"} gap={1} color={"gray.500"}>
                        <TbWorld size={20} />
                      </Flex>
                      <Link
                        href={company.website_url}
                        color={"gray.500"}
                        w={"fit-content"}
                        fontSize={"sm"}
                      >
                        Website
                      </Link>
                    </HStack>

                    <HStack gap={1}>
                      <Flex align={"center"} gap={1} color={"gray.500"}>
                        <FaPhone />
                      </Flex>
                      <Text
                        color={"gray.500"}
                        w={"fit-content"}
                        fontSize={"sm"}
                      >
                        {company.contact_number}
                      </Text>
                    </HStack>
                  </HStack>
                </VStack>
              </HStack>

              <Flex
                gap={2}
                bg={"tertiary.300"}
                _hover={{
                  bg: "tertiary.500",
                }}
                px={2}
                py={"5px"}
                rounded={"reset"}
                cursor={"pointer"}
                color={"secondary.800"}
                onClick={() => router.push(ROUTE_PATH.DASHBOARD.PROFILE)}
              >
                <MdOutlineEdit />
                <Text fontWeight={600} fontSize={"xs"}>
                  Edit organization
                </Text>
              </Flex>
            </HStack>

            <Divider />

            <VStack mt={4} gap={4}>
              <VStack w={"full"} align={"left"} gap={1}>
                <Text fontSize={"sm"} textColor={"gray.500"}>
                  About organization
                </Text>
                <Text w={"full"}>{company?.description}</Text>
              </VStack>

              <VStack w={"full"} align={"left"} gap={1}>
                <Text fontSize={"sm"} textColor={"gray.500"}>
                  Organization size
                </Text>
                <Text w={"full"}>{company.company_size}</Text>
              </VStack>

              <VStack w={"full"} align={"left"} gap={1}>
                <Text fontSize={"sm"} textColor={"gray.500"}>
                  Annual revenue
                </Text>
                <Text w={"full"}>{company.annual_revenue}</Text>
              </VStack>

              <VStack w={"full"} align={"left"} gap={1}>
                <Text fontSize={"sm"} textColor={"gray.500"}>
                  Location
                </Text>
                <Text w={"full"}>{company.location} </Text>
              </VStack>
            </VStack>
          </VStack>
        )}
      </Flex>
    </VStack>
  );
}

export default BasicInfoDisplay;
