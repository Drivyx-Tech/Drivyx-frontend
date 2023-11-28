"use client";

import { HOWTO_ITEMS } from "@/constants/HOWTO_ITEMS";
import SectionContainer from "@/ui/SectionContainer";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Container,
  Flex,
  Heading,
  Highlight,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { MdCheckCircle } from "react-icons/md";

function HowTo() {
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
          <Heading fontSize={"3xl"}>
            How to Use Drivyx: A Step-by-Step Guide
          </Heading>
          <Text color={"gray.600"} fontSize={"xl"}>
            Welcome to Drivyx, your gateway to a sustainable future! Follow
            these easy steps to make the most of our double-sided marketplace,
            connecting investors with impactful sustainability projects.
          </Text>
        </Stack>

        <VStack w={"full"}>
          {HOWTO_ITEMS.map((item, index) => {
            return (
              <VStack
                key={index}
                w={{ sm: "100%", md: "80%", lg: "60%" }}
                justify={"center"}
                textAlign={"left"}
                mb={10}
              >
                <Heading mb={4} fontSize={"2xl"} w={"full"}>
                  {item.title}
                </Heading>

                <List w={"full"} spacing={5}>
                  {item.listItems.map((list, index) => {
                    return (
                      <ListItem key={index}>
                        <ListIcon as={MdCheckCircle} color="secondary.500" />{" "}
                        {list}
                      </ListItem>
                    );
                  })}
                </List>
              </VStack>
            );
          })}
        </VStack>

        <Stack
          spacing={4}
          as={Container}
          maxW={"3xl"}
          textAlign={"center"}
          my={24}
        >
          <Text color={"gray.600"} fontSize={"xl"} mb={10}>
            Thank you for being part of the Drivyx community. Your contributions
            play a vital role in driving sustainability forward. Together, we
            can build a greener, more sustainable future.
          </Text>
          <Text as="i" fontWeight={300} color={"gray.600"} fontSize={"lg"}>
            For additional assistance, please contact us at support@drivyx.com
          </Text>
        </Stack>
      </SectionContainer>
    </div>
  );
}

export default HowTo;
