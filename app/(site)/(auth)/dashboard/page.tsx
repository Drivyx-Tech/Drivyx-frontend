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
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Dashboard from "./(dashboard)/Dashboard";
import Profile from "./(profile)/Profile";
import Projects from "./(projects)/Projects";

function DashboardLayoutRoot() {
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
    <>
      <GridItem area={"header"} bgColor={"gray.100"}>
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
          <Text color="white">Dashboard head with nav</Text>
        </Box>
      </GridItem>
      <GridItem area={"nav"}>
        <Sidebar setSideNav={setSideNav} />
      </GridItem>
      <GridItem area={"main"} w={"100%"} bgColor={"gray.100"}>
        {renderMain()}
      </GridItem>
    </>
  );
}

export default DashboardLayoutRoot;
