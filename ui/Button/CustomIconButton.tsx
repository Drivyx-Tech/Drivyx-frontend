"use client";

import { AddIcon } from "@chakra-ui/icons";
import { Text, Stack, Button, Box, Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  text: string;
  navTo?: string;
  icon?: any;
  handleOnClick?: () => void;
};

const CustomIcon = () => {
  return (
    <Flex
      bg={"secondary.800"}
      w={5}
      h={5}
      rounded={"full"}
      justify={"center"}
      align="center"
    >
      <Text
        fontSize={"xl"}
        fontWeight={400}
        p={0}
        lineHeight={0}
        color={"tertiary.500"}
      >
        +
      </Text>
    </Flex>
  );
};

function CustomIconButton({ text, navTo, icon, handleOnClick }: Props) {
  const router = useRouter();

  return (
    <Flex
      justify={"center"}
      align="center"
      rounded={"reset"}
      bg={"tertiary.300"}
      _hover={{
        bg: "tertiary.500",
      }}
      color={"secondary.800"}
      cursor={"pointer"}
      py={3}
      px={6}
      w={"fit-content"}
      fontWeight={600}
      onClick={navTo ? () => router.push(navTo) : handleOnClick}
      gap={2}
      fontSize={"sm"}
    >
      <CustomIcon />
      {text}
    </Flex>
  );
}

export default CustomIconButton;
