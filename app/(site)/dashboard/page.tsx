import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { User } from "@/services/endpoints/type";
import { getUser } from "@/services/endpoints/user";
import React from "react";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import avatar4 from "@/public/img/avatars/avatar4.png";

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
        // backgroundHeader={ProfileBgImage}
        // backgroundProfile={bgProfile}
        avatarImage={avatar4.src}
        name={"Esthera Jackson"}
        email={"esthera@simmmple.com"}
        // tabs={[
        //   {
        //     name: "OVERVIEW",
        //     icon: <FaCube w="100%" h="100%" />,
        //   },
        //   {
        //     name: "TEAMS",
        //     icon: <IoDocumentsSharp w="100%" h="100%" />,
        //   },
        //   {
        //     name: "PROJECTS",
        //     icon: <FaPenFancy w="100%" h="100%" />,
        //   },
        // ]}
      />
      {/* <Grid templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }} gap="22px">
        <ProfileInformation
          title={"Profile Information"}
          description={
            "Hi, I’m Esthera Jackson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
          }
          name={"Esthera Jackson"}
          mobile={"(44) 123 1234 123"}
          email={"esthera@simmmple.com"}
          location={"United States"}
        />
      </Grid> */}
      {/* <Projects title={"Projects"} description={"Architects design houses"} /> */}
    </Flex>
  );
}

export default Dashboard;
