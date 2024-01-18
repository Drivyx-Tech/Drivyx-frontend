"use client";

import { Text, Stack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { css } from "@emotion/react";

type Props = {
  text: string;
  navTo: string;
};

function CustomGradientButton({ text, navTo }: Props) {
  const router = useRouter();

  return (
    <Stack
      px={7}
      py={2.5}
      cursor={"pointer"}
      background="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)) padding-box"
      css={css({
        border: "1px solid",
        borderImage: "linear-gradient(to left, #fdbb2d, #22c1c3)",
        borderImageSlice: 1,
        transition: "all ease-in-out .5s",
        "&:hover": {
          background:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)) padding-box",
        },
      })}
      transition="all ease-in-out .5s"
      onClick={() => router.push(navTo)}
    >
      <Text
        fontSize={"14px"}
        bgGradient="linear(to-l, #fdbb2d, #22c1c3)"
        bgClip="text"
        zIndex={1}
        fontWeight={600}
      >
        {text}
      </Text>
    </Stack>
  );
}

export default CustomGradientButton;
