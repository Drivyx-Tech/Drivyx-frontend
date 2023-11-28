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
  Tooltip,
  UnorderedList,
  VStack,
  useClipboard,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { MdCheckCircle } from "react-icons/md";

function HowTo() {
  const { hasCopied, onCopy } = useClipboard("support@drivyx.com");

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
            <Highlight
              query="How to Use Drivyx:"
              styles={{ fontWeight: "bold", color: "primary.600" }}
            >
              How to Use Drivyx: A Step-by-Step Guide
            </Highlight>
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

                <UnorderedList w={"full"} spacing={5}>
                  {item.listItems.map((list, index) => {
                    return (
                      <ListItem
                        ml={10}
                        key={index}
                        color={"gray.600"}
                        fontSize={"xl"}
                      >
                        {list}
                      </ListItem>
                    );
                  })}
                </UnorderedList>
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
            For additional assistance, please contact us at{" "}
            <Tooltip
              label={hasCopied ? "Email Copied!" : "Copy Email"}
              closeOnClick={false}
              hasArrow
            >
              <Text
                as="i"
                fontSize={"lg"}
                onClick={onCopy}
                color="primary.600"
                fontWeight={600}
                _hover={{
                  cursor: "pointer",
                }}
              >
                support@drivyx.com
              </Text>
            </Tooltip>
          </Text>
        </Stack>
      </SectionContainer>
    </div>
  );
}

export default HowTo;
