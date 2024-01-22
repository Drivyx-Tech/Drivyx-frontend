"use client";

import { Text, Stack, Box } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  text: string;
  navTo: string;
  colorTheme: "primary" | "secondary";
};

function CustomSolidButton({ text, navTo, colorTheme }: Props) {
  const router = useRouter();

  return (
    <Stack
      onClick={() => router.push(navTo)}
      cursor={"pointer"}
      bg={colorTheme === "primary" ? "#1C4A40" : "#3C5427"}
      px={7}
      py={2.5}
      textAlign={"center"}
      _hover={{
        background: colorTheme === "primary" ? "#163B33" : "#324620",
      }}
      transition={"all 0.2s ease-in-out"}
      overflow={"hidden"}
    >
      <Text fontSize={"14px"} textColor={"white"} zIndex={1}>
        {text}
      </Text>
    </Stack>
  );
}

export default CustomSolidButton;
