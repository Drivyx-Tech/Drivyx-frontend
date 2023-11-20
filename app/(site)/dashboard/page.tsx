"use client";

import { Flex, Grid } from "@chakra-ui/react";
import { User } from "@/services/endpoints/type";
import { getUser } from "@/services/endpoints/user";
import React from "react";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import avatar4 from "@/public/img/avatars/avatar4.png";
import ProfileInformation from "@/components/Profile/ProfileInformation";

async function Dashboard() {
  // const [user, setUser] = useState<User>();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const user = await getUser();
  //     // Check if window is defined before accessing localStorage
  //     if (typeof window !== "undefined") {
  //       console.log("user info", user.result);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <Flex direction="column">
      <ProfileHeader
        avatarImage={avatar4.src}
        name={"Esthera Jackson"}
        email={"esthera@simmmple.com"}
      />
      <Grid templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }} gap="22px">
        <ProfileInformation />
      </Grid>
    </Flex>
  );
}

export default Dashboard;
