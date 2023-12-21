import { HOWTO_ITEMS } from "@/constants/HOWTO_ITEMS";
import CopyClip from "@/ui/CopyClip/CopyClip";
import SectionContainer from "@/ui/SectionContainer";
import {
  Container,
  Heading,
  Highlight,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function HowTo() {
  return (
    <div style={{ marginTop: "70px" }}>
      <SectionContainer my={{ base: 6, lg: 10 }}>
        <Stack
          spacing={10}
          as={Container}
          maxW={"4xl"}
          textAlign={"center"}
          mb={24}
        >
          <Text textStyle={"heading"}>
            <Highlight
              query="How to Use Drivyx:"
              styles={{ fontWeight: "bold", color: "primary.600" }}
            >
              How to Use Drivyx: A Step-by-Step Guide
            </Highlight>
          </Text>
          <Text textStyle={"context"}>
            Welcome to Drivyx, your gateway to a sustainable future! Follow
            these easy steps to make the most of our double-sided marketplace,
            connecting investors with impactful sustainability projects.
          </Text>
        </Stack>

        <VStack w={"full"} justify="center" align={"center"}>
          {HOWTO_ITEMS.map((item, index) => {
            return (
              <VStack
                key={index}
                w={"full"}
                maxWidth={{ base: "100%", md: "90%", lg: "70%" }}
                mb={8}
                alignItems={"left"}
              >
                <Text textStyle={"smBold"} w={"full"} textAlign={"left"}>
                  {item.title}
                </Text>

                <UnorderedList px={8}>
                  {item.listItems.map((list, index) => {
                    return (
                      <ListItem key={index} mb={2}>
                        <Text textStyle={"smContext"}>{list}</Text>
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
          <Text textColor={"gray.600"} textStyle={"context"} mb={10}>
            Thank you for being part of the Drivyx community. Your contributions
            play a vital role in driving sustainability forward. Together, we
            can build a greener, more sustainable future.
          </Text>

          <Text as="i" textColor={"gray.600"} textStyle={"smContext"}>
            For additional assistance, please contact us at{" "}
            <CopyClip email="support@drivyx.com" />
          </Text>
        </Stack>
      </SectionContainer>
    </div>
  );
}

export default HowTo;
