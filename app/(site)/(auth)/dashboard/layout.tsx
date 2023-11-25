"use client";

import Sidebar from "@/components/Profile/Sidebar";
import {
  Box,
  Text,
  Grid,
  GridItem,
  HStack,
  Portal,
  VStack,
} from "@chakra-ui/react";
import { NAV_DASHBOARD } from "@/constants/NAV_DASHBOARD";
import Dashboard from "./page";
import Profile from "./(profile)/Profile";
import Projects from "./(projects)/Projects";
import { useEffect, useState } from "react";
import { getUser } from "@/services/endpoints/user";
import { Company, User } from "@/services/endpoints/type";

// export const metadata = {
//   title: "Drixyv | Dashboard",
//   // description: "Generated by Next + Sanity",
// };

export default function Layout() {
  const [sideNav, setSideNav] = useState("");

  const renderMain = () => {
    switch (sideNav) {
      case "dashboard":
        return <Dashboard />;
      case "profile":
        return <Profile />;
      case "projects":
        return <Projects />;
      default:
        return <Dashboard />;
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
      <GridItem area={"header"}>
        <Box
          bgColor={"secondary.800"}
          w="100%"
          h="120px"
          borderRadius="0 0 65px 65px"
          bgPosition="50%"
          bgRepeat="no-repeat"
          display="flex"
          justifyContent="center"
          position={"relative"}
        >
          <Text color="white">Dashboard</Text>
        </Box>
      </GridItem>
      <GridItem area={"nav"}>
        <Sidebar setSideNav={setSideNav} />
      </GridItem>
      <GridItem area={"main"} bgColor={"gray.50"}>
        {renderMain()}
      </GridItem>
      <GridItem area={"footer"}>Footer</GridItem>
    </Grid>
  );
}
