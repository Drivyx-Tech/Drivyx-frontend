"use client";

import SectionContainer from "@/ui/SectionContainer";
import {
  VStack,
  Text,
  Image,
  Stack,
  Badge,
  LinkBox,
  Heading,
  LinkOverlay,
  HStack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import heroRightImg from "public/images/role.jpeg";
import evImg from "public/images/ev-img.jpeg";
import chainImg from "public/images/chain-img.jpeg";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function LatestBlogs() {
  return (
    <SectionContainer my={{ base: 10, lg: 16 }}>
      <VStack gap={16}>
        <VStack w={"100%"} align={"left"} gap={4}>
          <Text
            textTransform={"uppercase"}
            color={"primary.700"}
            fontWeight={600}
            fontSize={"md"}
            py={1}
            px={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Latest
          </Text>
          <Text maxW={800} textStyle={"heading"}>
            Explore the Latest Blog Posts
          </Text>
          <Text textStyle={"Context"}>
            Stay updated with the latest industry trends and insights.
          </Text>
        </VStack>

        <HStack
          wrap={"wrap"}
          flexDir={{ base: "column", md: "row" }}
          w={"100%"}
          justify={"space-evenly"}
          gap={6}
        >
          <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
            <Image
              width={400}
              height={300}
              src={evImg.src}
              borderRadius="lg"
              alt={"drixyv"}
            />
            <Stack mt="6" spacing="3">
              <Badge w={"fit-content"} variant="subtle" colorScheme="green">
                Trends
              </Badge>
              <Heading size="md" my="2">
                <LinkOverlay href="#">
                  The Future of Sustainable Transportation
                </LinkOverlay>
              </Heading>

              <Text textStyle={"smContext"}>
                Discover how Drivyx is revolutionizing the transportation
                industry with sustainable solutions.
              </Text>
            </Stack>
          </LinkBox>

          <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
            <Image
              width={400}
              height={300}
              src={heroRightImg.src}
              borderRadius="lg"
              alt={"drixyv"}
            />
            <Stack mt="6" spacing="3">
              <Badge w={"fit-content"} variant="subtle" colorScheme="blue">
                Technology
              </Badge>
              <Heading size="md" my="2">
                <LinkOverlay href="#">
                  The Role of Technology in Sustainable Transportation
                </LinkOverlay>
              </Heading>

              <Text textStyle={"smContext"}>
                Learn how technology is driving the shift towards sustainable
                transportation solutions.
              </Text>
            </Stack>
          </LinkBox>

          <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
            <Image
              width={400}
              height={300}
              src={chainImg.src}
              borderRadius="lg"
              alt={"drixyv"}
            />
            <Stack mt="6" spacing="3">
              <Badge w={"fit-content"} variant="subtle" colorScheme="yellow">
                Sustainability
              </Badge>
              <Heading size="md" my="2">
                <LinkOverlay href="#">
                  The Importance of Sustainable Supply Chains
                </LinkOverlay>
              </Heading>

              <Text textStyle={"smContext"}>
                Discover the benefits of sustainable supply chains and how they
                contribute to a greener future.
              </Text>
            </Stack>
          </LinkBox>
        </HStack>

        <Button
          rightIcon={<ArrowForwardIcon />}
          bg="primary.default"
          variant="filled"
          _hover={{ bg: "primary.600" }}
        >
          View All
        </Button>
      </VStack>
    </SectionContainer>
  );
}
