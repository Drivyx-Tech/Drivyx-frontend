"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import DashboardLayoutRoot from "./page";
import { ChevronRightIcon } from "@chakra-ui/icons";

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
