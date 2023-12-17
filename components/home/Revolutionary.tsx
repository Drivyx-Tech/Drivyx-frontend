import React from "react";
import { Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";
import SectionContainer from "@/ui/SectionContainer";
import NavButton from "@/ui/Button/NavButton";

const Revolutionary = () => {
  return (
    <SectionContainer my={{ base: 10, lg: 16 }}>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        placeItems="space-between"
        spacing={10}
        mb={4}
        minH={"400px"}
      >
        <VStack flex={1} align={"left"} gap={4} justify={"space-between"}>
          <VStack spacing={{ base: 4, md: 8 }} align={"left"}>
            <Text textStyle={"heading"} textTransform={"uppercase"}>
              Join, explore, transact:
            </Text>
            <Text textStyle={"headingContext"} maxW={"500px"}>
              Drivyx ESG Marketplace awaits your contribution to a sustainable
              future
            </Text>
          </VStack>

          <HStack>
            <NavButton
              text="Get Started"
              navTo="/marketplace"
              colorMode="primary"
              variant="solid"
            />
            <NavButton
              text="Learn More"
              navTo="/how-to"
              colorMode="primary"
              variant="outline"
            />
          </HStack>
        </VStack>

        <VStack
          flex={1}
          gap={8}
          w={"full"}
          h={"full"}
          justify="space-around"
          px={4}
        >
          <HStack gap={12} w={"full"}>
            <VStack textAlign={"left"} align="left" spacing={4}>
              <Text textStyle={"subheading"} color="brand.primary">
                Join Now
              </Text>
              <Text>
                Become a part of Drivyx ESG Marketplace and shape a sustainable
                future.
              </Text>
            </VStack>
          </HStack>

          <HStack gap={12} w={"full"}>
            <VStack textAlign={"left"} align="left" spacing={4}>
              <Text textStyle={"subheading"} color="brand.primary">
                Browse Projects
              </Text>
              <Text>
                Explore a diverse range of sustainable projects and find your
                perfect fit.
              </Text>
            </VStack>
          </HStack>

          <HStack gap={12} w={"full"}>
            <VStack textAlign={"left"} align="left" spacing={4}>
              <Text textStyle={"subheading"} color="brand.primary">
                Market Transactions
              </Text>
              <Text>
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
