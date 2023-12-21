import SectionContainer from "@/ui/SectionContainer";
import {
  Container,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { POLICY_ITEMS } from "@/constants/POLICY_ITEMS";

function Privacy() {
  return (
    <SectionContainer my={{ base: 10, lg: 16 }}>
      <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"left"} mb={20}>
        <Text mb={8} textStyle={"heading"}>
          Privacy Policy
        </Text>
      </Stack>

      {POLICY_ITEMS.map((item, index) => (
        <Stack
          key={index}
          spacing={4}
          as={Container}
          maxW={"5xl"}
          textAlign={"left"}
          mb={20}
        >
          <Text textStyle={"smBold"} w={"full"}>
            {item.policy}
          </Text>

          <Text textStyle={"smContext"}>{item.content}</Text>

          <UnorderedList spacing={2} pl={6}>
            {item.includes.map((include, index) => (
              <ListItem key={index} textStyle={"smContext"}>
                {include}
              </ListItem>
            ))}
          </UnorderedList>
        </Stack>
      ))}
      <Stack
        spacing={4}
        as={Container}
        maxW={"5xl"}
        textAlign={"center"}
        mb={20}
      >
        <Text as="i" fontWeight={300} color={"gray.600"} fontSize={"lg"}>
          Date of Last Update: 18/11/2023
        </Text>
      </Stack>
    </SectionContainer>
  );
}

export default Privacy;
