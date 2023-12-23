"use client";

import { GridItem, Grid } from "@chakra-ui/react";
import { useState } from "react";
import Sidebar from "@/components/menu/Sidebar";
import InfoAlert from "@/ui/Alert/InfoAlert";
import { useAppSlector } from "@/services/redux/hooks";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const user = useAppSlector((state) => state.tmpStore.user);
  const { company } = user;

  return (
    <Grid
      templateAreas={`"nav header"
                      "nav main"
                      `}
      gridTemplateRows={"50px 1fr"}
      gridTemplateColumns={`${isCollapsed ? "80px" : "230px"}  1fr`}
    >
      <GridItem area={"header"}>
        {/* notification */}
        {company.status === "inactive" && pathname === "/dashboard/profile" && (
          <InfoAlert />
        )}
      </GridItem>

      <GridItem area={"nav"} w={"auto"}>
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </GridItem>

      <GridItem area={"main"} w={"100%"} minH={"83.8vh"} overflow={"hidden"}>
        {children}
      </GridItem>
    </Grid>
  );
}
