import ProfileHeader from "@/components/Profile/ProfileHeader";
import ProfileInformation from "@/components/Profile/ProfileInformation";
import { Flex } from "@chakra-ui/react";
import React from "react";

function Profile() {
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
    <Flex direction="column" h={"100vh"}>
      <ProfileHeader
        // avatarImage={avatar4.src}
        name={"Esthera Jackson"}
        email={"esthera@simmmple.com"}
      />
      <ProfileInformation />
    </Flex>
  );
}

export default Profile;
