"use client";

import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { ArrowRightIcon } from "@chakra-ui/icons";

type Props = {
  text: string;
  navTo: string;
};

function LinkButton({ text, navTo }: Props) {
  const router = useRouter();

  return (
    <Button
      textStyle={"context"}
      variant={"link"}
      color={"secondary.500"}
      size={"xs"}
      _hover={{ textDecoration: "none" }}
      rightIcon={<ArrowRightIcon width={2} height={2} />}
      onClick={() => router.push(navTo)}
    >
      {text.toUpperCase()}
    </Button>
  );
}

export default LinkButton;
