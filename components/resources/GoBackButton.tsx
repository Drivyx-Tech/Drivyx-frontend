"use client";

import { ArrowBackIcon } from "@chakra-ui/icons";
import { HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  text: string;
  navTo: string;
};

function GoBackButton({ text, navTo }: Props) {
  const router = useRouter();

  return (
    <HStack
      w={"fit-content"}
      cursor={"pointer"}
      onClick={() => router.push(navTo)}
    >
      <ArrowBackIcon color={"white"} w={6} h={6} />
      <Text fontSize={"md"} color={"white"}>
        Blog overview
      </Text>
    </HStack>
  );
}

export default GoBackButton;
