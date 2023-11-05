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
            Invest in Sustainability
          </Text>
        </VStack>

        <VStack flex={1} align="left" gap={4}>
          <Text>
            Discover and invest in projects promoting biodiversity,
            sustainability.circular economy, and regenerative design on the
            Drivyx ESG double sidedMarketplace.
          </Text>
          <HStack>
            <Link href={process.env.NEXT_PUBLIC_BASE_URL + "marketplace"}>
              <Button
                bg="primary.default"
                variant="filled"
                _hover={{ bg: "primary.600" }}
              >
                Explore
              </Button>
            </Link>
            <Link href={process.env.NEXT_PUBLIC_BASE_URL + "marketplace"}>
              <Button
                variant="outline"
                textColor="secondary.default"
                borderColor="secondary.default"
                _hover={{ bg: "secondary.600", color: "white" }}
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
