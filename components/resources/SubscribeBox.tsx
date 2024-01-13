"use client";

import { Button, Input, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { LeavesBg } from "@/ui/SVG/LeavesBg";

function SubscribeBox() {
  const [email, setEmail] = useState("");
  return (
    <Stack
      w={"full"}
      minW={"300px"}
      h={"260px"}
      bg={"secondary.500"}
      shadow={"lg"}
      rounded={30}
      px={6}
      py={12}
      pos={"relative"}
      z-index={-1}
    >
      <Stack
        pos={"absolute"}
        top={0}
        right={0}
        w={"full"}
        h={"100%"}
        zIndex={10}
      >
        <LeavesBg />
      </Stack>

      <Text fontSize={"2xl"} fontWeight={"bold"} color={"white"}>
        Stay up to date with Drivyx
      </Text>

      <Input
        id="email"
        type="email"
        name="email"
        placeholder="email"
        fontSize={"sm"}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        bg={"white"}
      />

      <Button
        bg={"transparent"}
        border={"1px solid"}
        borderColor={"primary.500"}
        color={"primary.500"}
        size={"sm"}
        w={"fit-content"}
        fontWeight={400}
      >
        Join
      </Button>
    </Stack>
  );
}

export default SubscribeBox;
