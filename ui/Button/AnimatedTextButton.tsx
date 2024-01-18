"use client";

import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  navTo: string;
  text: string;
  arrowDir: "left" | "right";
  color?: string;
};

function AnimatedTextButton({ navTo, text, arrowDir, color }: Props) {
  const router = useRouter();
  return (
    <HStack
      w={"fit-content"}
      cursor={"pointer"}
      onClick={() => router.push(navTo)}
      position={"relative"}
      overflow={"hidden"}
      _before={{
        content: '""',
        position: "absolute",
        bottom: 0,
        left: arrowDir === "right" && 0,
        right: arrowDir === "left" && 0,
        width: "0%",
        borderBottom: `2px solid ${color ? "white" : "#1264a3"}`,
        transition: "width 0.4s ease-in-out",
      }}
      _hover={{
        _before: {
          width: "95%",
        },
      }}
    >
      {arrowDir === "left" && (
        <ArrowBackIcon color={color ? "white" : "#1264a3"} w={6} h={6} />
      )}
      <Text color={color ? "white" : "#1264a3"} textStyle={"Context"}>
        {text}
      </Text>
      {arrowDir === "right" && (
        <ArrowForwardIcon color={color ? "white" : "#1264a3"} w={6} h={6} />
      )}
    </HStack>
  );
}

export default AnimatedTextButton;
