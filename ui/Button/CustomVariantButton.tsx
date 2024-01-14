"use client";

import { Text, Stack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  text: string;
  navTo: string;
  colorTheme: "primary" | "secondary" | "tertiary";
};

function CustomVariantButton({ text, navTo, colorTheme }: Props) {
  const router = useRouter();

  return (
    <Stack
      onClick={() => router.push(navTo)}
      cursor={"pointer"}
      bg={"transparent"}
      border={`1px solid ${
        colorTheme === "primary"
          ? "#163B33"
          : colorTheme === "secondary"
          ? "#324620"
          : "#5B480B"
      }`}
      px={7}
      py={"9px"}
      textAlign={"center"}
      _hover={{
        bg:
          colorTheme === "primary"
            ? "#163B33"
            : colorTheme === "secondary"
            ? "#324620"
            : "#5B480B",
        textColor: "white",
      }}
      transition={"all 0.2s ease-in-out"}
      overflow={"hidden"}
      textColor={
        colorTheme === "primary"
          ? "#163B33"
          : colorTheme === "secondary"
          ? "#324620"
          : "#5B480B"
      }
      textDecoration={"none"}
    >
      <Text textDecoration={"none"} fontSize={"14px"}>
        {text}
      </Text>
    </Stack>
  );
}

export default CustomVariantButton;
