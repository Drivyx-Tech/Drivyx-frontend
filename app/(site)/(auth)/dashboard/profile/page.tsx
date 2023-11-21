"use client";

import ProfileHeader from "@/components/Profile/ProfileHeader";
import ProfileInformation from "@/components/Profile/ProfileInformation";
import { Company, User } from "@/services/endpoints/type";
import { getUser } from "@/services/endpoints/user";
import { Flex } from "@chakra-ui/react";
import React from "react";

export type ProfileInformationProps = {
  user: User;
  company: Company;
};

function Profile() {
  const [data, setData] = React.useState<ProfileInformationProps>();

  React.useEffect(() => {
    const fetchData = async () => {
      const user = await getUser();

      setData({
        user: user.result.detail.user,
        company: user.result.detail.company,
      });
    };

    fetchData();
  }, []);

  if (!data) return;

  return (
    <Flex direction="column">
      <ProfileHeader
        companyName={data.company.company_name}
        industry={data.company.industry}
      />
      <ProfileInformation
        user={data.user}
        company={data.company}
        setData={setData}
      />
    </Flex>
  );
}

export default Profile;
