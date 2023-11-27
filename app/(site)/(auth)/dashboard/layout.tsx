"use client";

import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayoutRoot from "./page";

export default function Layout() {
  return (
    <Grid
      templateAreas={`"nav header"
                      "nav main"
                      "nav footer"`}
      gridTemplateRows={"120px 1fr 30px"}
      gridTemplateColumns={"275px 1fr"}
    >
      <DashboardLayoutRoot />
      <GridItem area={"footer"}>Footer</GridItem>
    </Grid>
  );
}
