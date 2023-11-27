"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Sidebar from "@/components/profile/Sidebar";

// export const metadata = {
//   title: "Drixyv | Dashboard",
//   // description: "Generated by Next + Sanity",
// };

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sideNav, setSideNav] = useState("");

  const renderBreadcrumb = () => {
    switch (sideNav) {
      case "profile":
        return (
          <BreadcrumbItem isCurrentPage={true}>
            <BreadcrumbLink href={"/dashboard/profile"}>Profile</BreadcrumbLink>
          </BreadcrumbItem>
        );
      case "project":
        return (
          <BreadcrumbItem isCurrentPage={true}>
            <BreadcrumbLink href={"/dashboard/project"}>Project</BreadcrumbLink>
          </BreadcrumbItem>
        );
      case "example1":
        return (
          <BreadcrumbItem isCurrentPage={true}>
            <BreadcrumbLink href={"/dashboard/example1"}>
              Example
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      case "example2":
        return (
          <BreadcrumbItem isCurrentPage={true}>
            <BreadcrumbLink href={"/dashboard/example2"}>
              Example
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      case "example3":
        return (
          <BreadcrumbItem isCurrentPage={true}>
            <BreadcrumbLink href={"/dashboard/example3"}>
              Example
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
    }
  };

  return (
    <Grid
      templateAreas={`"nav header"
                      "nav main"
                      "nav footer"`}
      gridTemplateRows={"120px 1fr 30px"}
      gridTemplateColumns={"275px 1fr"}
    >
      <GridItem area={"header"} bgColor={"gray.100"}>
        <Breadcrumb
          mx={12}
          my={4}
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href={"/dashboard"} fontWeight={600}>
              Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
          {renderBreadcrumb()}
        </Breadcrumb>
      </GridItem>

      <GridItem area={"nav"}>
        <Sidebar setSideNav={setSideNav} />
      </GridItem>
      <GridItem area={"main"} w={"100%"} minH={"83.8vh"} bgColor={"gray.100"}>
        {children}
      </GridItem>
      <GridItem area={"footer"}>Footer</GridItem>
    </Grid>
  );
}
