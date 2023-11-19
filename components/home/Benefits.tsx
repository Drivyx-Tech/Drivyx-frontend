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
import esg from "public/images/esg.jpg";
import SectionContainer from "@/ui/SectionContainer";

const Benefits = () => {
  return (
    <SectionContainer my={10}>
      <HStack gap={10}>
        <VStack flex={1} gap={10}>
          <Text textStyle={"heading"} textAlign={"left"}>
            <Highlight query="Advantages" styles={{ textColor: "primary.600" }}>
              Discover the Advantages of Drivyx ESG
            </Highlight>
          </Text>
          <Text textStyle={"context"}>
            Drivyx ESG offers a host of benefits for both project owners and
            investors. Investors can easily find sustainable products and
            services, while project owners connect with a broader audience of
            environmentally conscious consumers.
          </Text>

          {/* temp hide */}
          {/* <HStack align="start" gap={4}>
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
          </HStack> */}
        </VStack>

        <Flex justifyContent={"center"} flex={1}>
          <Image h={"600px"} src={esg.src} alt={"Drivyx ESG"} />
        </Flex>
      </HStack>
    </SectionContainer>
  );
};

export default Benefits;
