/* eslint-disable react/no-unescaped-entities */
"use client";

import SectionContainer from "@/ui/SectionContainer";
import {
  Button,
  Container,
  HStack,
  Heading,
  Highlight,
  IconButton,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
  UnorderedList,
  VStack,
  useClipboard,
} from "@chakra-ui/react";
import { Span } from "next/dist/trace";
import Link from "next/link";
import React from "react";
import { MdCheckCircle, MdEmail } from "react-icons/md";

const PARTNERS = [
  {
    title: "Why Partner with Drivyx:",
    content: [
      {
        subTitle: "Impactful Investments:",
        subContent:
          "Impactful Investments: Be part of a community that prioritizes investments with a positive impact on the environment, society, and governance practices.",
      },
      {
        subTitle: "Diverse ESG Portfolio:",
        subContent:
          "Diverse ESG Portfolio: Access a diverse range of ESG projects, from renewable energy initiatives to sustainable infrastructure and beyond. Our carefully curated portfolio ensures a variety of investment options aligned with your values.",
      },

      {
        subTitle: "Innovation and Technology:",
        subContent:
          "Innovation and Technology: Join a platform that leverages cutting-edge technology, such as AI matching and blockchain integration, to enhance the transparency and efficiency of sustainable investing.",
      },
      {
        subTitle: "Global Reach:",
        subContent:
          "Global Reach: Drivyx is committed to global sustainability. Partnering with us opens doors to projects on a global scale, providing you with opportunities to contribute to positive change internationally.",
      },
      {
        subTitle: "Community Engagement:",
        subContent:
          "Community Engagement: Connect with a community of like-minded investors, project owners, and sustainability enthusiasts. Collaborate, share insights, and participate in the collective effort to drive sustainable innovation.",
      },
    ],
  },
  {
    title: "How to Become a Partner:",
    content: [
      {
        subTitle: "Explore Opportunities:",
        subContent:
          "Explore Opportunities: Browse through our platform to discover a wide array of ESG projects currently seeking investment.",
      },
      {
        subTitle: "Contact Us:",
        subContent:
          "Contact Us: Reach out to our partnership team to express your interest and discuss collaboration opportunities.",
      },
      {
        subTitle: "Customized Solutions:",
        subContent:
          "Customized Solutions: We understand that every investor is unique. Our team will work with you to tailor investment solutions that align with your specific goals and values.",
      },
      {
        subTitle: "Stay Informed:",
        subContent:
          "Stay Informed: Receive regular updates on the performance and impact of your investments. Stay informed about the latest trends and developments in the sustainable investing landscape.",
      },
    ],
  },
];

function Partners() {
  const { hasCopied, onCopy } = useClipboard("partnerships@drivyx.com");

  return (
    <SectionContainer my={{ base: 10, lg: 16 }}>
      <Stack
        spacing={4}
        as={Container}
        maxW={"5xl"}
        textAlign={"center"}
        mb={20}
      >
        <Heading mb={8} fontSize={"3xl"}>
          <Highlight
            query="Partnership Opportunities:"
            styles={{ fontWeight: "bold", color: "primary.600" }}
          >
            Partnership Opportunities: Join Us in Funding ESG Initiatives
          </Highlight>
        </Heading>
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
        {PARTNERS.map((item, index) => {
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
          <Tooltip
            label={hasCopied ? "Email Copied!" : "Copy Email"}
            closeOnClick={false}
            hasArrow
          >
            <Text
              as="i"
              fontSize={"lg"}
              onClick={onCopy}
              color="primary.600"
              fontWeight={600}
              _hover={{
                cursor: "pointer",
              }}
            >
              partnerships@drivyx.com
            </Text>
          </Tooltip>
        </Text>
      </Stack>
    </SectionContainer>
  );
}

export default Partners;
