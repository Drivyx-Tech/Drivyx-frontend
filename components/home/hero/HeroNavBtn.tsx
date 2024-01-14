"use client";

import NavButton from "@/ui/Button/NavButton";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { useAppSlector } from "@/services/redux/hooks";
import { ROUTE_PATH } from "@/constants/ROUTE_PATH";
import CustomVariantButton from "@/ui/Button/CustomVariantButton";
import CustomSolidButton from "@/ui/Button/CustomSolidButton";
import CustomGradientButton from "@/ui/Button/CustomGradientButton";

function HeroNavBtn() {
  const accessToken = useAppSlector((state) => state.tokens.currentToken);

  return (
    <Flex direction={"row"} gap={"4"}>
      <CustomSolidButton
        navTo={ROUTE_PATH.NON_AUTH.HOW_TO}
        text="Learn More"
        colorTheme={"primary"}
      />
      <CustomGradientButton
        text={!accessToken ? "Sign Up" : "Create Project"}
        navTo={
          !accessToken ? ROUTE_PATH.AUTH.SIGNUP : ROUTE_PATH.DASHBOARD.PROJECT
        }
      />
    </Flex>
  );
}

export default HeroNavBtn;
