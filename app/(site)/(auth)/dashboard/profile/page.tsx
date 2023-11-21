import ProfileHeader from "@/components/Profile/ProfileHeader";
import ProfileInformation from "@/components/Profile/ProfileInformation";
import { Flex } from "@chakra-ui/react";
import React from "react";

export type ProfileInformationProps = {
  given_name?: string;
  family_name?: string;
  company_name?: string;
  contact_number?: string;
  location?: string;
  annual_revenue?: string;
  company_size?: string;
  company_profile_icon?: string;
  website_url?: string;
  description?: string;
  industry?: string;
};

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
    <Flex direction="column">
      <ProfileHeader companyName={""} industry={""} companyIcon={""} />
      <ProfileInformation />
    </Flex>
  );
}

export default Profile;
