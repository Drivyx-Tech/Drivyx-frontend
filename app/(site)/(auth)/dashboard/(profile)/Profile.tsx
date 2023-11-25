"use client";

import ProfileHeader from "@/components/Profile/ProfileHeader";
import ProfileInformation from "@/components/Profile/ProfileInformation";
import { Company, User } from "@/services/endpoints/type";
import { getUser } from "@/services/endpoints/user";
import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function Profile() {
  return (
    <Flex direction="column" mx={12}>
      <ProfileHeader
      // companyName={data?.company.company_name}
      // industry={data?.company.industry}
      />
      <ProfileInformation
      // user={data?.user}
      // company={data?.company}
      // setData={setData}
      />
    </Flex>
  );
}

export default Profile;
