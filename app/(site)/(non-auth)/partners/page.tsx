import CopyClip from "@/ui/CopyClip/CopyClip";
import SectionContainer from "@/ui/SectionContainer";
import { Container, Heading, Highlight, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { PARTNERS_ITEMS } from "@/constants/PARTNERS_ITEMS";

function Partners() {
  return (
    <SectionContainer my={{ base: 10, lg: 16 }}>
      <Stack
        spacing={10}
        as={Container}
        maxW={"5xl"}
        textAlign={"center"}
        mb={20}
      >
        <Text textStyle={"heading"}>
          <Highlight
            query="Partnership Opportunities:"
            styles={{ fontWeight: "bold", color: "primary.600" }}
          >
            Partnership Opportunities: Join Us in Funding ESG Initiatives
          </Highlight>
        </Text>
        <Text color={"gray.600"} fontSize={"xl"}>
          At Drivyx, we are actively seeking like-minded investment partners who
          share our commitment to Environmental, Social, and Governance (ESG)
          principles. Our mission is to drive positive change by supporting
          projects that prioritize sustainability, social responsibility, and
          ethical governance. If you are an investment partner looking to make a
          meaningful impact, we invite you to explore the opportunities that
          await you.
        </Text>
      </Stack>

      <Stack>
        {PARTNERS_ITEMS.map((item, index) => {
          return (
            <Stack
              key={index}
              spacing={4}
              as={Container}
              maxW={"5xl"}
              textAlign={"left"}
              mb={20}
            >
              <Heading mb={8} fontSize={"2xl"}>
                {item.title}
              </Heading>
              {item.content.map((content, index) => {
                return (
                  <Text key={index} color={"gray.600"} fontSize={"xl"}>
                    <Highlight
                      query={content.subTitle}
                      styles={{ fontWeight: "bold", color: "black" }}
                    >
                      {content.subContent}
                    </Highlight>
                  </Text>
                );
              })}
            </Stack>
          );
        })}
      </Stack>

      <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"left"} mb={20}>
        <Heading mb={8} fontSize={"2xl"}>
          Join Us in Shaping a Sustainable Future:
        </Heading>

        <Text color={"gray.600"} fontSize={"xl"}>
          If you are passionate about making a difference through your
          investments and want to be part of a movement that prioritizes
          sustainability, Drivix welcomes you. Together, let's contribute to a
          more sustainable and responsible future.
        </Text>

        <Text as="i" fontWeight={300} color={"gray.600"} fontSize={"lg"}>
          For partnership inquiries, please contact our team at{" "}
          <CopyClip email="partnerships@drivyx.com" />
        </Text>
      </Stack>
    </SectionContainer>
  );
}

export default Partners;
