"use client";

import {
  Box,
  Flex,
  Link,
  Stack,
  Text,
  HStack,
  Button,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { NAV_DASHBOARD } from "@/constants/NAV_DASHBOARD";
import LogoFullWhite from "./SVG/LogoFullWhite";
import { useRouter } from "next/navigation";

type Props = {
  setSideNav: React.Dispatch<React.SetStateAction<string>>;
};

function Sidebar({ setSideNav }: Props) {
  const router = useRouter();

  return (
    <HStack pos={"fixed"} h={"100%"} zIndex={10}>
      <Flex
        py={8}
        backgroundColor={"secondary.900"}
        w={"230px"}
        justifyContent={"center"}
        alignContent={"center"}
        h={"100%"}
      >
        <Box h={"100%"}>
          <Box w={"100%"} mb={"60px"}>
            <Link href={`/`} target="_blank" display="flex">
              <LogoFullWhite />
            </Link>
          </Box>

          <VStack>
            {NAV_DASHBOARD.map((prop, key) => {
              return (
                <Button
                  key={key}
                  px={6}
                  my={2}
                  w={"180px"}
                  justifyContent={"left"}
                  backgroundColor={"transparent"}
                  border={"1px"}
                  borderColor={"transparent"}
                  _hover={{
                    transition: "0.5s ease-in-out",
                    cursor: "pointer",
                    borderColor: "white",
                    backgroundColor: "transparent",
                  }}
                  onClick={() => {
                    setSideNav(prop.breadcrumbPath[1]);
                    router.push(prop.href);
                  }}
                >
                  <HStack>
                    <Flex mr={2}>{prop.icon}</Flex>
                    <Text fontSize="14px" fontWeight={400} color={"white"}>
                      {prop.name.toUpperCase()}
                    </Text>
                  </HStack>
                </Button>
              );
            })}
          </VStack>
        </Box>
      </Flex>

      <Box
        pos={"absolute"}
        // right={0}
        bgGradient="linear(to-b, #fdbb2d, #22c1c3)"
        h={"100%"}
        w={0.5}
      />
      <Box
        pos={"absolute"}
        right={0}
        bgGradient="linear(to-b, #fdbb2d, #22c1c3)"
        h={"100%"}
        w={0.5}
      />
    </HStack>
  );
}

export default Sidebar;
