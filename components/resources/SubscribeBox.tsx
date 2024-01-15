"use client";

import {
  Button,
  Flex,
  HStack,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import landscapeBg from "@/public/images/landscape-vector.jpg";
import { createVisitorQuery } from "@/services/endpoints/visitorQuery";

function SubscribeBox() {
  const toast = useToast();
  const [email, setEmail] = useState("");

  const handleSubscription = async () => {
    console.log(email);
    try {
      const res = await createVisitorQuery({
        email,
        phone: "",
        given_name: "",
        family_name: "",
        message: `a subscription from ${email}`,
      });

      if (res.result.statusCode === 200) {
        toast({
          title: "Success",
          description: "Subscribe Drivyx successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack
      shadow={
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      }
      w={"full"}
      minW={"300px"}
      h={"260px"}
      backgroundImage={landscapeBg.src}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      rounded={30}
      pos={"relative"}
      overflow={"hidden"}
      justify={"center"}
      align={"center"}
    >
      <Flex
        pos={"absolute"}
        top={0}
        left={0}
        w={"100%"}
        h={"100%"}
        backgroundImage={
          "linear-gradient(to top, rgba(18, 36, 0,0.7), rgba(18, 36, 0,0.1))"
        }
      />

      <Stack
        pos={"absolute"}
        top={0}
        left={0}
        w={"full"}
        h={"full"}
        justify={"center"}
        align={"center"}
        spacing={8}
        px={10}
      >
        <Text
          textAlign="center"
          w={"full"}
          fontSize={"2xl"}
          justifyContent={"center"}
          fontWeight={"bold"}
          color={"white"}
        >
          Stay up to date with Drivyx
        </Text>

        <HStack>
          <Input
            size={"sm"}
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
            rounded={"reset"}
            bg={"tertiary.300"}
            _hover={{
              bg: "tertiary.400",
            }}
            color={"white"}
            size={"sm"}
            w={"fit-content"}
            fontWeight={400}
            onClick={handleSubscription}
          >
            Join
          </Button>
        </HStack>
      </Stack>
    </Stack>
  );
}

export default SubscribeBox;
