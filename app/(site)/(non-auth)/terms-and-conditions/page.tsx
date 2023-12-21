import { TERMS_ITEMS } from "@/constants/TERMS_ITEMS";
import SectionContainer from "@/ui/SectionContainer";
import {
  Container,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";

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
          <Text textStyle="heading">Terms and Conditions</Text>
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
                <Text textStyle={"smBold"} w={"full"} textAlign={"left"}>
                  {item.term}
                </Text>
                <UnorderedList textAlign={"left"} px={8}>
                  {item.content.map((term, index) => {
                    return (
                      <ListItem key={index} mb={2}>
                        <Text textStyle={"smContext"}>{term}</Text>
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
