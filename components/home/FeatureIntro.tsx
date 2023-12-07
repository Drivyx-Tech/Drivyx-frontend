import React from "react";
import { Flex, Text, SimpleGrid, Wrap } from "@chakra-ui/react";
import SectionContainer from "@/ui/SectionContainer";
import { FEATURE_ITEMS } from "@/constants/FEATURE_ITEMS";
import FeatureCard from "@/ui/Cards/FeatureCard";

const FeatureIntro = () => {
  return (
    <SectionContainer my={{ base: 10, lg: 40 }}>
      <Flex direction={"column"} alignItems={"center"}>
        <Text maxW={1000} textStyle={"heading"} textAlign={"center"} mb={16}>
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

        <Wrap
          w={"100%"}
          justify={{ base: "center", md: "space-around" }}
          mb={4}
          spacing={{ base: 8, md: 4 }}
        >
          {FEATURE_ITEMS.map((feature, index) => {
            return <FeatureCard key={index} {...feature} />;
          })}
        </Wrap>
      </Flex>
    </SectionContainer>
  );
};

export default FeatureIntro;
