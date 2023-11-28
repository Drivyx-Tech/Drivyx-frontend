"use client";

import { Box, Flex, Link, Stack, Text, HStack, Button } from "@chakra-ui/react";
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
        w={"275px"}
        justifyContent={"center"}
        alignContent={"center"}
        h={"100%"}
      >
        <Box pos={"fixed"}>
          <Box w={"100%"} mb={"60px"}>
            <Link href={`/`} target="_blank" display="flex">
              <LogoFullWhite />
            </Link>
          </Box>
          <Stack direction="column" mb="40px" px={2}>
            {NAV_DASHBOARD.map((prop, key) => {
              return (
                <Flex
                  as={Button}
                  key={key}
                  w={"100%"}
                  h={"100%"}
                  px={6}
                  py={2}
                  my={2}
                  rounded={"full"}
                  backgroundColor={"secondary.800"}
                  _hover={{
                    backgroundColor: "secondary.700",
                    transition: "0.2s ease-in-out",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setSideNav(prop.breadcrumbPath[1]);
                    router.push(prop.href);
                  }}
                >
                  <HStack>
                    <Flex mr={4}>{prop.icon}</Flex>
                    <Text fontSize="16px" color={"white"}>
                      {prop.name.toUpperCase()}
                    </Text>
                  </HStack>
                </Flex>
              );
            })}
          </Stack>
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
