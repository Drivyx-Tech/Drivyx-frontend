"use client";

import ProfileInformation from "@/components/profile/ProfileInformation";
import React from "react";
import { Avatar, Flex, Text } from "@chakra-ui/react";

function Profile() {
  return (
    <Flex direction="column" mx={12}>
      <ProfileInformation />
    </Flex>
  );
}

export default Profile;
