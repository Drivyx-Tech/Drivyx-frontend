import React from "react";
import { Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";
import SectionContainer from "@/ui/SectionContainer";
import NavButton from "@/ui/Button/NavButton";
import { ROUTE_PATH } from "@/constants/ROUTE_PATH";
import CustomSolidButton from "@/ui/Button/CustomSolidButton";
import CustomVariantButton from "@/ui/Button/CustomVariantButton";

const Revolutionary = () => {
  return (
    <SectionContainer my={{ base: 10, lg: 16 }}>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        placeItems="space-between"
        spacing={10}
        mb={4}
        minH={"300px"}
      >
        <VStack flex={1} align={"left"} justify={"space-between"}>
          <VStack spacing={{ base: 4 }} align={"left"}>
            <Text textStyle={"heading"} textTransform={"uppercase"}>
              Join, explore, transact:
            </Text>
            <Text textStyle={"headingContext"} maxW={"500px"}>
              Drivyx ESG Marketplace awaits your contribution to a sustainable
              future
            </Text>
          </VStack>

          <HStack>
            <CustomSolidButton
              text="Get Started"
              navTo={ROUTE_PATH.NON_AUTH.MARKETPLACE.HOME}
              colorTheme="tertiary"
            />
            <CustomVariantButton
              text="Learn More"
              navTo={ROUTE_PATH.NON_AUTH.HOW_TO}
              colorTheme="secondary"
            />
          </HStack>
        </VStack>

        <VStack flex={1} w={"full"} h={"full"} justify="space-around" px={4}>
          <HStack w={"full"}>
            <VStack textAlign={"left"} align="left" gap={0}>
              <Text textStyle={"subheading"}>Join Now</Text>
              <Text textStyle={"context"}>
                Become a part of Drivyx ESG Marketplace and shape a sustainable
                future.
              </Text>
            </VStack>
          </HStack>

          <HStack w={"full"}>
            <VStack textAlign={"left"} align="left" gap={0}>
              <Text textStyle={"subheading"}>Browse Projects</Text>
              <Text textStyle={"context"}>
                Explore a diverse range of sustainable projects and find your
                perfect fit.
              </Text>
            </VStack>
          </HStack>

          <HStack w={"full"}>
            <VStack textAlign={"left"} align="left" gap={0}>
              <Text textStyle={"subheading"}>Market Transactions</Text>
              <Text textStyle={"context"}>
                Effortlessly make secure transactions, supporting sustainable
                initiatives worldwide.
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </SimpleGrid>
    </SectionContainer>
  );
};

export default Revolutionary;
