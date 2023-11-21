"use client";

import { ProfileInformationProps } from "@/app/(site)/(auth)/dashboard/profile/page";
// Chakra imports
import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ProfileBgImage from "../../public/img/ProfileBackground.png";
import defaultAvatar from "../../public/svg/person-circle-auth.svg";

const ProfileHeader = ({
  companyName = "Company Name",
  industry = "Industry",
  companyIcon = defaultAvatar.src,
}: {
  companyName?: string;
  industry?: string;
  companyIcon?: string;
}) => {
  return (
    <Box
      mb={{ sm: "195px", md: "65px", xl: "60px" }}
      borderRadius="0 0 35px 35px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Box
        bgImage={ProfileBgImage.src}
        w="100%"
        h="80px"
        borderRadius="0 0 35px 35px"
        bgPosition="50%"
        bgRepeat="no-repeat"
        display="flex"
        justifyContent="center"
        position={"relative"}
      >
        <Flex
          direction={{ sm: "column", md: "row" }}
          mx="1.5rem"
          maxH="300px"
          w={{ sm: "90%", xl: "95%" }}
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
          top={"15px"}
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
              src={companyIcon}
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
                {companyName}
              </Text>

              <Text
                fontSize={{ sm: "sm", md: "md" }}
                color={"gray.400"}
                fontWeight="semibold"
              >
                {industry}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProfileHeader;
