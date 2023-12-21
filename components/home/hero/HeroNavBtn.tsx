"use client";

import NavButton from "@/ui/Button/NavButton";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { useAppSlector } from "@/services/redux/hooks";

function HeroNavBtn() {
  const accessToken = useAppSlector((state) => state.tokens.currentToken);

  return (
    <Flex direction={"row"} gap={"4"}>
      <NavButton
        variant="solid"
        colorMode="secondary"
        text="Learn More"
        navTo={"/how-to"}
      />

      <NavButton
        variant="solid"
        colorMode="primary"
        text={!accessToken ? "Sign Up" : "Create a Project"}
        navTo={!accessToken ? "/signup" : "/dashboard/project"}
      />
    </Flex>
  );
}

export default HeroNavBtn;
