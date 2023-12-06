/* eslint-disable react/no-unescaped-entities */
import SectionContainer from "@/ui/SectionContainer";
import {
  Container,
  Heading,
  Highlight,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const POLICY = [
  {
    policy: "1. Introduction",
    content:
      "Thank you for visiting Drivyx's website. This Privacy Policy outlines how we collect, use, disclose, and manage your personal information in accordance with the Australian Privacy Principles (APPs) set out in the Privacy Act 1988 (Cth).",
    includes: [],
  },
  {
    policy: "2. Collection of Personal Information",
    content:
      "We may collect personal information from you in various ways, including when you visit our website, register for an account, make a purchase, or communicate with us. The types of personal information we may collect include:",
    includes: [
      "Name",
      "Contact information (address, email, phone number)",
      "Payment details",
      "Demographic information",
    ],
  },
  {
    policy: "3. Use of Personal Information",
    content:
      "We use the personal information we collect for the purposes for which it was provided and for related purposes, including:",
    includes: [
      "Providing products or services you have requested",
      "Processing transactions",
      "Communicating with you",
      "Marketing and promotional activities",
    ],
  },
  {
    policy: "4. Disclosure of Personal Information",
    content:
      "We may disclose your personal information to third parties for the purposes outlined in Section 3, including:",
    includes: [
      "Service providers (e.g., payment processors)",
      "Business partners",
      "Regulatory authorities as required by law",
    ],
  },
  {
    policy: "5. Security of Personal Information",
    content:
      "We take reasonable steps to protect the personal information we hold from misuse, interference, loss, and unauthorized access. Our security measures include encryption, access controls, and regular security assessments.",
    includes: [],
  },
  {
    policy: "6. Access and Correction",
    content:
      "You have the right to access the personal information we hold about you and request corrections. To access or correct your information, please contact us at support@drivyx.com.",
    includes: [],
  },
  {
    policy: "7. Cookies and Tracking Technologies",
    content:
      "We may use cookies and similar technologies to enhance your experience on our website. You can adjust your browser settings to disable cookies, but this may affect your ability to access certain features of our site.",
    includes: [],
  },
  {
    policy: "8. Changes to this Privacy Policy",
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our practices. The most current version will be available on our website.",
    includes: [],
  },
  {
    policy: "9. Contact Us",
    content:
      "If you have any questions or concerns about our Privacy Policy, please contact us at support@drivyx.com.",
    includes: [],
  },
];

function Privacy() {
  return (
    <SectionContainer my={{ base: 10, lg: 16 }}>
      <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"left"} mb={20}>
        <Heading mb={8} fontSize={"3xl"}>
          Privacy Policy
        </Heading>
      </Stack>

      {POLICY.map((item, index) => (
        <Stack
          key={index}
          spacing={4}
          as={Container}
          maxW={"5xl"}
          textAlign={"left"}
          mb={20}
        >
          <Heading mb={8} fontSize={"2xl"}>
            {item.policy}
          </Heading>

          <Text color={"gray.600"} fontSize={"xl"}>
            {item.content}
          </Text>

          <UnorderedList spacing={6} pl={6}>
            {item.includes.map((include, index) => (
              <ListItem key={index} color={"gray.600"} fontSize={"xl"}>
                {include}
              </ListItem>
            ))}
          </UnorderedList>
        </Stack>
      ))}
      <Stack
        spacing={4}
        as={Container}
        maxW={"5xl"}
        textAlign={"center"}
        mb={20}
      >
        <Text as="i" fontWeight={300} color={"gray.600"} fontSize={"lg"}>
          Date of Last Update: 18/11/2023
        </Text>
      </Stack>
    </SectionContainer>
  );
}

export default Privacy;
