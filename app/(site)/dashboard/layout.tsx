// "use client";

import Sidebar from "@/components/Profile/Sidebar";
import { Box, Flex, Portal } from "@chakra-ui/react";
import { NAV_DASHBOARD } from "@/constants/NAV_DASHBOARD";

// export const metadata = {
//   title: "Drixyv | Dashboard",
//   // description: "Generated by Next + Sanity",
// };

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex
      w={"100%"}
      h={"100vh"}
      backgroundColor={"gray.100"}
      justify={"space-between"}
    >
      <Sidebar />
      <Box
        p={4}
        w={{
          base: "100%",
          xl: "calc(100% - 275px)",
        }}
      >
        {children}
      </Box>
    </Flex>
  );
}
