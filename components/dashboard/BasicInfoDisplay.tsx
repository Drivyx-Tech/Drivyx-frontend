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
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useAppSlector } from "@/services/redux/hooks";
import Organization from "@/ui/SVG/Organization";
import { ROUTE_PATH } from "@/constants/ROUTE_PATH";
import CustomSolidButton from "@/ui/Button/CustomSolidButton";
import CustomIconButton from "@/ui/Button/CustomIconButton";

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
          w="100px"
          h="100px"
          borderRadius={5}
          // bgColor={"white"}
          overflow={"hidden"}
          rounded={"full"}
        />
        <VStack justify={"center"} w={"full"} align="left">
          <Text fontSize={"md"} fontWeight={"bold"} textColor={"secondary.800"}>
            {user?.given_name + " " + user?.family_name}
          </Text>
          <HStack>
            {/* <MdEmail /> */}
            <Text fontSize={"sm"} color={"gray.500"}>
              Project Manager
            </Text>
            {/* <Text>{user?.email}</Text> */}
          </HStack>
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
        gap={4}
        bgColor={"white"}
        p={8}
        rounded={30}
        shadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
      >
        <VStack justify={"center"} w={"full"} align="left">
          <Text fontSize={"md"} fontWeight={"bold"} textColor={"secondary.800"}>
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
      </Flex>

      {/* <VStack
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
          <Text>Organization: {company?.company_name}</Text>
        </Flex>
        <HStack>
          <FaPhone />
          <Text>{company?.contact_number}</Text>
        </HStack>
        <Flex w={"full"}>
          <Text>Website: {company?.website_url} </Text>
        </Flex>

        <Flex w={"full"}>
          <Text>Profile Type: {company?.industry} </Text>
        </Flex>
        <Flex w={"full"}>
          <Text>Organization size: {company?.company_size} </Text>
        </Flex>
        <Flex w={"full"}>
          <Text>Annual revenue: {company?.annual_revenue} </Text>
        </Flex>
        <Flex w={"full"}>
          <Text>Location: {company?.location} </Text>
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
            {company?.description}
          </Text>
        </VStack>
      </VStack> */}
    </VStack>
  );
}

export default BasicInfoDisplay;
