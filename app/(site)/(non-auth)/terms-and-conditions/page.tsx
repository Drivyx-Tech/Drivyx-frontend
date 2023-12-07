"use client";

import { HOWTO_ITEMS } from "@/constants/HOWTO_ITEMS";
import { TERMS_ITEMS } from "@/constants/TERMS_ITEMS";
import SectionContainer from "@/ui/SectionContainer";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Container,
  Flex,
  HStack,
  Heading,
  Highlight,
  List,
  ListIcon,
  ListItem,
  OrderedList,
  Stack,
  Text,
  UnorderedList,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { MdCheckCircle } from "react-icons/md";

function Terms() {
  return (
    <div style={{ marginTop: "70px" }}>
      <SectionContainer my={{ base: 6, lg: 10 }}>
        <Stack
          spacing={4}
          as={Container}
          maxW={"3xl"}
          textAlign={"center"}
          mb={24}
        >
          <Heading fontSize={"3xl"}>Terms and Conditions</Heading>
        </Stack>

        <VStack w={"full"} justify="center" align={"center"}>
          {TERMS_ITEMS.map((item, index) => {
            return (
              <VStack
                key={index}
                mb={8}
                w={"full"}
                maxWidth={{ base: "100%", md: "90%", lg: "70%" }}
              >
                <Heading fontSize={"lg"} w={"full"} textAlign={"left"}>
                  {item.term}
                </Heading>
                <UnorderedList w={"full"} textAlign={"left"} px={8}>
                  {item.content.map((term, index) => {
                    return (
                      <ListItem key={index}>
                        <Text fontSize={"md"}>{term}</Text>
                      </ListItem>
                    );
                  })}
                </UnorderedList>
              </VStack>
            );
          })}
        </VStack>
      </SectionContainer>
    </div>
  );
}

export default Terms;
