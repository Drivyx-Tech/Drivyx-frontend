"use client";

import React from "react";
import { Button, Text, VStack, HStack, Icon, Link } from "@chakra-ui/react";
import SectionContainer from "@/ui/SectionContainer";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { FaCube } from "react-icons/fa";

const Revolutionary = () => {
  return (
    <SectionContainer my={{ base: 10, lg: 16 }}>
      <HStack gap={12}>
        <VStack flex={1} align={"left"} gap={4}>
          <Text
            textTransform={"uppercase"}
            color={"secondary.400"}
            fontWeight={600}
            fontSize={"md"}
            py={1}
            px={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Revolutionary
          </Text>
          <Text
            fontSize={["50px"]}
            fontWeight="900"
            lineHeight="125%"
            textColor="text.darkest"
          >
            Join, Browse, and Transact: The Drivyx ESG Marketplace
          </Text>

          <HStack>
            <Link href={process.env.NEXT_PUBLIC_BASE_URL + "marketplace"}>
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"md"}
                fontWeight={600}
                bg="primary.default"
                variant="filled"
                _hover={{ bg: "primary.600" }}
                transition={"all .25s ease-in-out"}
              >
                Get Started
              </Button>
            </Link>
            <Link href={process.env.NEXT_PUBLIC_BASE_URL + "marketplace"}>
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"md"}
                variant="outline"
                textColor="secondary.default"
                borderColor="secondary.default"
                _hover={{ bg: "secondary.500", color: "white" }}
                transition={"all .25s ease-in-out"}
              >
                Learn More
                <ChevronRightIcon />
              </Button>
            </Link>
          </HStack>
        </VStack>

        <VStack flex={1} gap={8}>
          <HStack gap={12}>
            <Icon as={FaCube} w={12} h={12} />

            <VStack textAlign={"left"} align="left" spacing={4}>
              <Text textStyle={"subheading"} color="brand.primary">
                Join Now
              </Text>
              <Text>
                Become part of the Drivyx ESG Marketplace and contribute to a
                sustainable future.
              </Text>
            </VStack>
          </HStack>

          <HStack gap={12}>
            <Icon as={FaCube} w={12} h={12} />
            <VStack textAlign={"left"} align="left" spacing={4}>
              <Text textStyle={"subheading"} color="brand.primary">
                Browse Projects
              </Text>
              <Text>
                Explore a wide range of sustainable projects and find the
                perfect fit for you.
              </Text>
            </VStack>
          </HStack>

          <HStack gap={12}>
            <Icon as={FaCube} w={12} h={12} />
            <VStack textAlign={"left"} align="left" spacing={4}>
              <Text textStyle={"subheading"} color="brand.primary">
                Market Transactions
              </Text>
              <Text>
                Effortlessly make secure transactions and support sustainable
                initiatives around the world.
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </HStack>
    </SectionContainer>
  );
};

export default Revolutionary;
