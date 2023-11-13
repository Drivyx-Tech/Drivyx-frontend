"use client";

import React from "react";
import { VStack, useBreakpointValue } from "@chakra-ui/react";

export const ProjectContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const containerW = useBreakpointValue({
    lg: "904px",
    xl: "1180px",
    "2xl": "1280px",
  });

  return (
    <VStack py={{ base: 10, md: 20 }}>
      <VStack w={containerW}>{children} </VStack>{" "}
    </VStack>
  );
};
