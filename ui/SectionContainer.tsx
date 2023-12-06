"use client";
import { Box, Container, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

const SectionContainer = ({
  children,
  my,
  mt,
}: {
  children: React.ReactNode;
  my?: any;
  mt?: any;
}) => {
  const px = useBreakpointValue({
    base: "16px",
    sm: "20px",
    md: "50px",
    lg: "80px",
  });
  const py = useBreakpointValue({
    base: "34px",
    lg: "74px",
  });

  return (
    <Box w={"100wv"} px={px} py={py} mt={mt}>
      <Container maxW="1400px" p={"0"} my={my}>
        {children}
      </Container>
    </Box>
  );
};

export default SectionContainer;
