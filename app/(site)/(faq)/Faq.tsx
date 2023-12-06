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
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { MdCheckCircle } from "react-icons/md";

function Faq() {
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

        <Flex minH={"100vh"} justify="center">
          <Accordion
            allowMultiple
            minWidth={{ base: "100%", md: "90%", lg: "70%" }}
            maxW="lg"
            rounded="lg"
          >
            {HOWTO_ITEMS.map((item, index) => {
              return (
                <AccordionItem key={index}>
                  <AccordionButton
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    p={4}
                  >
                    <Text fontSize="md">{item.title}</Text>
                    <ChevronDownIcon fontSize="24px" />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <List spacing={3}>
                      {item.listItems.map((list, index) => {
                        return (
                          <ListItem key={index}>
                            <ListIcon as={MdCheckCircle} color="green.500" />
                            {list}
                          </ListItem>
                        );
                      })}
                    </List>
                  </AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Flex>

        <Stack
          spacing={4}
          as={Container}
          maxW={"3xl"}
          textAlign={"center"}
          mb={24}
        >
          <Heading mb={10} fontSize={"3xl"}>
            Enjoy Your Drivyx Experience!
          </Heading>

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

export default Faq;
