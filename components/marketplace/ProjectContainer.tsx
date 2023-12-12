import React from "react";
import { VStack } from "@chakra-ui/react";

export const ProjectContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <VStack py={{ base: 10, md: 20 }} h={"100%"}>
      <VStack
        w={{
          base: "100%",
          sm: "100%",
          md: "100%",
          lg: "904px",
          xl: "1180px",
          "2xl": "1280px",
        }}
      >
        {children}{" "}
      </VStack>{" "}
    </VStack>
  );
};
