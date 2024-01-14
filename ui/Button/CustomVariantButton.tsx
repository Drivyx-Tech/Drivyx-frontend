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
      position={"relative"}
      bg={"rgba(0, 0, 0, 0.2)"}
      border={"1px solid white"}
      px={7}
      py={2.5}
      textAlign={"center"}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background:
          colorTheme === "primary"
            ? "#163B33"
            : colorTheme === "secondary"
            ? "#324620"
            : "#5B480B",
        opacity: 0,
        transition: "opacity 0.2s ease-in-out",
        textDecoration: "none",
      }}
      _hover={{
        textDecoration: "none",
        _before: {
          opacity: 1,
        },
        border: `1px solid ${
          colorTheme === "primary"
            ? "#163B33"
            : colorTheme === "secondary"
            ? "#324620"
            : "#5B480B"
        }`,
      }}
      transition={
        "border-color 0.2s ease-in-out, text-decoration 0.2s ease-in-out"
      }
      overflow={"hidden"}
      textColor={"white"}
      textDecoration={"none"}
    >
      <Text textDecoration={"none"} fontSize={"14px"} zIndex={1}>
        {text}
      </Text>
    </Stack>
  );
}

export default CustomVariantButton;
