"use client";

import React from "react";
import { Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { ProfileIconUpload } from "./uploadFile/ProfileIconUpload";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useAppSlector } from "@/services/redux/hooks";
import Organization from "@/ui/SVG/Organization";
import { ROUTE_PATH } from "@/constants/ROUTE_PATH";

function BasicInfoDisplay() {
  const router = useRouter();
  const user = useAppSlector((state) => state.tmpStore.user);
  const { company } = user;

  return (
    <VStack
      w={"full"}
      h={"full"}
      gap={{ base: 8 }}
      flex={1}
      bgColor={"white"}
      px={20}
      py={16}
      rounded={5}
      shadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
    >
      <Flex w={"full"}>
        <ProfileIconUpload />
        <VStack justify={"center"} w={"full"} align="left">
          <Text fontSize={"lg"} fontWeight={"bold"} textColor={"secondary.800"}>
            {user?.given_name + " " + user?.family_name}
          </Text>
          <HStack>
            <MdEmail />
            <Text>{user?.email}</Text>
          </HStack>
          <HStack>
            <FaPhone />
            <Text>{company?.contact_number}</Text>
          </HStack>
        </VStack>

        <Button
          onClick={() => router.push(ROUTE_PATH.DASHBOARD.PROFILE)}
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
        {/* <Text fontSize="lg" fontWeight={"bold"}>
          Organization Profile
        </Text> */}
        <Flex w={"full"}>
          <Text>Organization: {company?.company_name}</Text>
        </Flex>
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
      </VStack>
    </VStack>
  );
}

export default BasicInfoDisplay;
