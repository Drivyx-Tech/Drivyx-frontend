import { HStack } from "@chakra-ui/react";
import React from "react";
import BasicInfoDisplay from "@/components/dashboard/dashboard/BasicInfoDisplay";
import ProjectInfoDisplay from "@/components/dashboard/dashboard/ProjectInfoDisplay";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drivyx ESG | Dashboard",
  description: "Drivyx ESG Dashboard",
};

function DashboardHome() {
  return (
    <HStack
      minH={"92.3vh"}
      w={"full"}
      h={"full"}
      spacing={8}
      pb={4}
      flexDir={{ base: "column", xl: "row" }}
      px={8}
    >
      <BasicInfoDisplay />
      <ProjectInfoDisplay />
    </HStack>
  );
}

export default DashboardHome;
