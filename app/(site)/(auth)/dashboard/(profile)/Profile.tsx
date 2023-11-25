"use client";

import ProfileInformation from "@/components/Profile/ProfileInformation";
import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import defaultAvatar from "public/svg/person-circle-auth.svg";
import { useAppSlector } from "@/services/redux/hooks";

function Profile() {
  const company = useAppSlector((state) => state.tmpStore.company);

  return (
    <Flex direction="column" mx={12}>
      <Flex
        mb={{ sm: "195px", md: "85px", xl: "100px" }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Flex
          direction={{ sm: "column", md: "row" }}
          mx="1.5rem"
          maxH="300px"
          minW={{ sm: "40%", xl: "60%" }}
          justifyContent={{ sm: "center", md: "space-between" }}
          align="center"
          backdropFilter="saturate(200%) blur(50px)"
          boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
          border="2px solid"
          borderColor={"white"}
          bg={"hsla(0,0%,100%,.8)"}
          px="24px"
          py="10px"
          borderRadius="20px"
          position={"absolute"}
          top={"75px"}
        >
          <Flex
            align="center"
            mb={{ sm: "10px", md: "0px" }}
            direction={{ sm: "column", md: "row" }}
            w={{ sm: "100%" }}
            textAlign={{ sm: "center", md: "start" }}
          >
            <Avatar
              me={{ md: "22px" }}
              src={company?.company_profile_icon || defaultAvatar.src}
              w="80px"
              h="80px"
              borderRadius="15px"
            />
            <Flex direction="column" maxWidth="100%" my={{ sm: "14px" }}>
              <Text
                fontSize={{ sm: "lg", lg: "xl" }}
                color={"gray.700"}
                fontWeight="bold"
                ms={{ sm: "8px", md: "0px" }}
              >
                {company?.company_name || "Company Name"}
              </Text>

              <Text
                fontSize={{ sm: "sm", md: "md" }}
                color={"gray.400"}
                fontWeight="semibold"
              >
                {company?.industry || "Industry"}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <ProfileInformation />
    </Flex>
  );
}

export default Profile;
