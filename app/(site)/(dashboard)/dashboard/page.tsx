import { HStack } from "@chakra-ui/react";
import React from "react";
import BasicInfoDisplay from "@/components/dashboard/BasicInfoDisplay";
import ListCreatedProjects from "@/components/dashboard/ListCreatedProjects";

function DashboardHome() {
  return (
    <HStack
      minH={"92.3vh"}
      w={"full"}
      h={"full"}
      spacing={{ base: 14, lg: 14 }}
      borderTop={"1px"}
      borderTopColor={"gray.200"}
      pt={4}
      flexDir={{ base: "column", xl: "row" }}
      px={8}
    >
      <BasicInfoDisplay />
      <ListCreatedProjects />
    </HStack>
  );
}

export default DashboardHome;
