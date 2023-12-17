"use client";

import { Button } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  text: string;
  icon?: any;
  navTo: string;
  colorMode: "primary" | "secondary";
  variant: "solid" | "outline";
};

function NavButton({ text, navTo, variant, colorMode }: Props) {
  const router = useRouter();

  return (
    <Button
      size={{ base: "sm", sm: "sm", md: "md" }}
      fontSize={{ base: "sm", sm: "sm", md: "md" }}
      variant={variant === "solid" ? "solid" : "outline"}
      color={
        variant === "solid"
          ? colorMode === "primary"
            ? "text.darkest"
            : "white"
          : "secondary.default"
      }
      borderColor={variant === "solid" ? "none" : "secondary.default"}
      bg={
        variant === "solid"
          ? colorMode === "primary"
            ? "primary.default"
            : "secondary.500"
          : "none"
      }
      _hover={{
        bg:
          variant === "solid"
            ? colorMode === "primary"
              ? "primary.600"
              : "secondary.default"
            : "secondary.500",
        color:
          variant === "solid"
            ? colorMode === "primary"
              ? "text.darkest"
              : "white"
            : "white",
      }}
      transition={"all .3s ease-in-out"}
      onClick={() => router.push(navTo)}
    >
      {text}
    </Button>
  );
}

export default NavButton;
