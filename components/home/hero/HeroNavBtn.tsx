"use client";

import NavButton from "@/ui/Button/NavButton";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { useAppSlector } from "@/services/redux/hooks";
import { ROUTE_PATH } from "@/constants/ROUTE_PATH";

function HeroNavBtn() {
  const accessToken = useAppSlector((state) => state.tokens.currentToken);

  return (
    <Flex direction={"row"} gap={"4"}>
      <NavButton
        variant="solid"
        colorMode="secondary"
        text="Learn More"
        navTo={ROUTE_PATH.NON_AUTH.HOW_TO}
      />

      <NavButton
        variant="solid"
        colorMode="primary"
        text={!accessToken ? "Sign Up" : "Create a Project"}
        navTo={
          !accessToken ? ROUTE_PATH.AUTH.SIGNUP : ROUTE_PATH.DASHBOARD.PROJECT
        }
      />
    </Flex>
  );
}

export default HeroNavBtn;
