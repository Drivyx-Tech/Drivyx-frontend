"use client";

import { ArrowBackIcon } from "@chakra-ui/icons";
import { HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  text: string;
  navTo?: string;
  colorTheme: "light" | "dark";
};

function GoBackButton({ text, navTo, colorTheme }: Props) {
  const router = useRouter();

  return (
    <HStack
      w={"fit-content"}
      cursor={"pointer"}
      onClick={() => {
        navTo ? router.push(navTo) : router.back();
      }}
    >
      <ArrowBackIcon
        color={colorTheme === "light" ? "white" : "secondary.800"}
        w={6}
        h={6}
      />
      <Text
        fontSize={"md"}
        color={colorTheme === "light" ? "white" : "secondary.800"}
      >
        {text}
      </Text>
    </HStack>
  );
}

export default GoBackButton;
