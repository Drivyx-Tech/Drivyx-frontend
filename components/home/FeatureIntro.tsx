import React from "react";
import { Flex, Text, Wrap } from "@chakra-ui/react";
import SectionContainer from "@/ui/SectionContainer";
import { FEATURE_ITEMS } from "@/constants/FEATURE_ITEMS";
import FeatureCard from "@/ui/Cards/FeatureCard";

const FeatureIntro = () => {
  return (
    <SectionContainer mt={10}>
      <Flex direction={"column"} align={"center"} justify={"center"} w={"full"}>
        <Text
          maxW={"800px"}
          textStyle={"heading"}
          textAlign={"center"}
          mb={{ base: 8, md: 16 }}
        >
          Discover a Sustainable Future with Drivyx ESG Marketplace
          {/* <Text
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
          </Text> */}
        </Text>

        <Flex
          flexDir={{ base: "column", md: "row" }}
          width={"full"}
          h={"full"}
          align={"flex-start"}
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
