import {
  Flex,
  Text,
  Box,
  Image,
  Highlight,
  HStack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import heroRightImg from "public/images/feature.jpeg";
import SectionContainer from "@/ui/SectionContainer";

const Benefits = () => {
  return (
    <SectionContainer my={10}>
      <HStack gap={10}>
        <VStack flex={1} gap={10}>
          <Text textStyle={"heading"} textAlign={"left"}>
            <Highlight query="Benefits" styles={{ textColor: "red" }}>
              Discover the Benefits of Drivyx ESG Double Sided Marketplace
            </Highlight>
          </Text>
          <Text textStyle={"context"}>
            Drivyx ESG double sided Marketplace offers a range of benefits for
            both buyers and sellers. With our platform, buyers can easily find
            sustainable products and services, while sellers can connect with a
            larger audience of environmentally conscious consumers.
          </Text>

          <HStack align="start" gap={4}>
            <Box flex={1}>
              <Text textStyle={"heading"}>50% Off</Text>
              <Text textStyle={"smContext"}>
                Save on Sustainable Products and Services with Drivyx ESG
              </Text>
            </Box>
            <Box flex={1}>
              <Text textStyle={"heading"}>50% Off</Text>
              <Text textStyle={"smContext"}>
                Connect with Environmentally Conscious Consumers on Drivyx ESG
              </Text>
            </Box>
          </HStack>
        </VStack>

        <Flex justifyContent={"center"} flex={1}>
          <Image h={"700px"} src={heroRightImg.src} alt={"Drivyx ESG"} />
        </Flex>
      </HStack>
    </SectionContainer>
  );
};

export default Benefits;
