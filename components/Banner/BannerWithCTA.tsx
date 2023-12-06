"use client";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Text, HStack, VStack, Link } from "@chakra-ui/react";
import React from "react";
import SectionContainer from "../../ui/SectionContainer";

const BannerWithCTA = () => {
  return (
    <SectionContainer>
      <HStack mt={"75px"} py={16} px={8} gap={8}>
        <VStack flex={1} align={"left"}>
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
            Sustainable
          </Text>
          <Text textStyle={"heading"} textColor={"text.darkest"}>
            Invest in a Greener Future
          </Text>
        </VStack>

        <VStack flex={1} align="left" gap={4}>
          <Text>
            Embark on a journey of sustainable investments with Drivyx ESG.
            Explore and invest in projects that champion biodiversity,
            sustainability, circular economy, and regenerative design on our
            innovative double-sided marketplace. Join us in shaping a future
            where your investments contribute to positive environmental and
            social impact.
          </Text>
          <HStack>
            <Link href={"/"}>
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"md"}
                fontWeight={600}
                bg="primary.default"
                variant="filled"
                _hover={{ bg: "primary.600" }}
                transition={"all .25s ease-in-out"}
              >
                Explore
              </Button>
            </Link>
            <Link href={"/overview"}>
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
      </HStack>
    </SectionContainer>
  );
};

export default BannerWithCTA;
