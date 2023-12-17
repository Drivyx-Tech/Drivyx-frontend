"use client";

import { Box, Container } from "@chakra-ui/react";
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
  return (
    <Box
      w={"100wv"}
      px={{
        base: "16px",
        sm: "20px",
        md: "50px",
        lg: "80px",
      }}
      py={{
        base: "34px",
        lg: "74px",
      }}
      mt={mt}
    >
      <Container maxW="1400px" p={"0"} my={my}>
        {children}
      </Container>
    </Box>
  );
};

export default SectionContainer;
