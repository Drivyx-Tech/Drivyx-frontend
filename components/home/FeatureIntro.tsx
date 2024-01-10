import React from "react";
import { Flex, Text, Wrap } from "@chakra-ui/react";
import SectionContainer from "@/ui/SectionContainer";
import { FEATURE_ITEMS } from "@/constants/FEATURE_ITEMS";
import FeatureCard from "@/ui/Cards/FeatureCard";

const FeatureIntro = () => {
  return (
    <SectionContainer my={{ base: 10, lg: 30 }}>
      <Flex direction={"column"} align={"center"} justify={"center"} w={"full"}>
        <Text maxW={"800px"} textStyle={"heading"} textAlign={"center"} mb={16}>
          Discover a Sustainable Future with {""}
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "primary.600",
              zIndex: -1,
            }}
          >
            Drivyx ESG Marketplace
          </Text>
        </Text>

        <Flex
          flexWrap={"wrap"}
          width={"full"}
          align={"center"}
          justify={{ base: "center", md: "space-around" }}
          gap={{ base: 8 }}
        >
          {FEATURE_ITEMS.map((feature, index) => {
            return <FeatureCard key={index} {...feature} />;
          })}
        </Flex>
      </Flex>
    </SectionContainer>
  );
};

export default FeatureIntro;
