"use client";

import {
  GridItem,
  Grid,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { useState } from "react";
import Sidebar from "@/components/menu/Sidebar";
import InfoAlert from "@/ui/Alert/InfoAlert";
import { useAppSlector } from "@/services/redux/hooks";
import { usePathname } from "next/navigation";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Utiles } from "@/services/utils";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const breadcrumbPath = pathname.split("/").filter((path) => path !== "");

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
      bgColor={"gray.50"}
    >
      <GridItem area={"header"}>
        {/* notification */}
        {company.status === "inactive" && pathname === "/dashboard/profile" && (
          <InfoAlert />
        )}

        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
          mx={4}
          mt={2}
        >
          {breadcrumbPath.map((path, index) => {
            return (
              <BreadcrumbItem
                key={index}
                isCurrentPage={index === breadcrumbPath.length - 1}
              >
                <BreadcrumbLink
                  textDecor={"none"}
                  fontSize={"sm"}
                  fontWeight={500}
                  color={"gray.600"}
                  href={`/${path}`}
                >
                  {Utiles.toCapitalize(path)}
                </BreadcrumbLink>
              </BreadcrumbItem>
            );
          })}
        </Breadcrumb>
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
