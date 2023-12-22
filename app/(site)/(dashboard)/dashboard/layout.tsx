"use client";

import { GridItem, Grid } from "@chakra-ui/react";
import { useState } from "react";
import Sidebar from "@/components/menu/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Grid
      templateAreas={`"nav header"
                      "nav main"
                      `}
      gridTemplateRows={"50px 1fr"}
      gridTemplateColumns={`${isCollapsed ? "80px" : "230px"}  1fr`}
    >
      <GridItem area={"header"}></GridItem>

      <GridItem area={"nav"} w={"auto"}>
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </GridItem>

      <GridItem area={"main"} w={"100%"} minH={"83.8vh"} overflow={"hidden"}>
        {children}
      </GridItem>
    </Grid>
  );
}
