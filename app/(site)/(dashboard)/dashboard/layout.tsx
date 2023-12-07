"use client";

import { GridItem, Grid } from "@chakra-ui/react";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sideNav, setSideNav] = useState("");

  return (
    <Grid
      templateAreas={`"nav header"
                      "nav main"
                      `}
      gridTemplateRows={"50px 1fr"}
      gridTemplateColumns={"230px 1fr"}
    >
      <GridItem area={"header"}></GridItem>

      <GridItem area={"nav"}>
        <Sidebar setSideNav={setSideNav} />
      </GridItem>

      <GridItem area={"main"} w={"100%"} minH={"83.8vh"} overflow={"hidden"}>
        {children}
      </GridItem>
    </Grid>
  );
}
