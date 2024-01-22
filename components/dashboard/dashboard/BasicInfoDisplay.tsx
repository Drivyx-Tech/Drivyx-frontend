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
import UserProfileCard from "./UserProfileCard";
import CardContainer from "@/ui/Cards/CardContainer";

function BasicInfoDisplay() {
  const router = useRouter();
  const user = useAppSlector((state) => state.tmpStore.user);
  const { company } = user;

  return (
    <VStack w={"full"} h={"full"} gap={{ base: 8 }} flex={1}>
      <UserProfileCard />

      <CardContainer>
        {!company.company_name ? (
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
                  src={
                    process.env.NEXT_PUBLIC_S3_USER_BUCKET +
                      company.company_profile_url ||
                    "https://bit.ly/broken-link"
                  }
                  w="80px"
                  h="80px"
                  borderRadius={5}
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
                        href={company.website_url || "#"}
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

                  <Text
                    fontSize={"sm"}
                    cursor={"pointer"}
                    textDecoration={"underline"}
                    onClick={() => router.push(ROUTE_PATH.DASHBOARD.PROFILE)}
                  >
                    Edit organization profile
                  </Text>
                </VStack>
              </HStack>
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
      </CardContainer>
    </VStack>
  );
}

export default BasicInfoDisplay;
