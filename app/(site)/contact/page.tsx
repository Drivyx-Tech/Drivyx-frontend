"use client";

import {
  Container,
  Stack,
  Heading,
  VStack,
  Flex,
  Text,
  Box,
  SimpleGrid,
  Icon,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import SectionContainer from "@/ui/SectionContainer";
import { ReactElement, useEffect, useState } from "react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import ContactForm from "@/ui/Form/ContactForm";
import { BsLinkedin, BsTwitter } from "react-icons/bs";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

function Contact() {
  return (
    <SectionContainer my={{ base: 10, lg: 16 }}>
      <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={10}>
        <VStack flex={1}>
          <Stack
            spacing={4}
            as={Container}
            maxW={"5xl"}
            textAlign={"center"}
            mb={20}
          >
            <Heading mb={8} fontSize={"3xl"}>
              Contact Us
            </Heading>
            <Text color={"gray.600"} fontSize={"xl"}>
              Thank you for your interest in Drivyx! We're here to assist you
              and welcome any inquiries, feedback, or collaboration
              opportunities. Please feel free to reach out to us through the
              following channels.
            </Text>
          </Stack>

          <Box p={4} mb={20}>
            <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={10}>
              <Feature
                icon={<Icon as={FcAssistant} w={10} h={10} />}
                title={"General Inquiries"}
                text={
                  "For general questions or information about Drivyx, please contact our dedicated support team at support@drivyx.com."
                }
              />
              <Feature
                icon={<Icon as={FcDonate} w={10} h={10} />}
                title={"Partnerships and Collaborations"}
                text={
                  "If you are interested in exploring partnership opportunities or collaborations with Drivyx, please reach out to our partnerships team at partnerships@drivyx.com."
                }
              />
              <Feature
                icon={<Icon as={FcInTransit} w={10} h={10} />}
                title={"Media and Press Inquiries"}
                text={
                  "For media inquiries, press releases, or interview requests, please contact our media relations team at media@drivyx.com."
                }
              />
            </SimpleGrid>
          </Box>
        </VStack>

        <ContactForm />
      </SimpleGrid>

      <SimpleGrid my={24} columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack
          spacing={4}
          as={Container}
          maxW={"5xl"}
          textAlign={"center"}
          mb={20}
        >
          <Heading mb={8} fontSize={"3xl"}>
            Career Opportunities
          </Heading>
          <Text color={"gray.600"} fontSize={"xl"}>
            To learn more about career opportunities at Drivyx, please visit our
            Careers page here.
          </Text>
        </Stack>

        <Stack
          spacing={4}
          as={Container}
          maxW={"5xl"}
          textAlign={"center"}
          mb={20}
        >
          <Heading mb={8} fontSize={"3xl"}>
            Social Media
          </Heading>
          <Text color={"gray.600"} fontSize={"xl"}>
            Stay connected with us on our social media channels for the latest
            updates, news, and insights:
          </Text>

          <Stack align="center" justify="center" direction={"row"} spacing={24}>
            <Box
              as="a"
              href="https://chat.openai.com/c/225913e5-7aa2-488c-a4ad-37bf94d636e9"
            >
              <IconButton
                aria-label="twitter"
                variant="ghost"
                size="lg"
                icon={<BsTwitter size="28px" />}
                _hover={{
                  bg: "primary.700",
                  color: "white",
                }}
                isRound
                transition={"all .3s ease"}
              />
            </Box>
            <Box
              as="a"
              href="https://chat.openai.com/c/225913e5-7aa2-488c-a4ad-37bf94d636e9"
            >
              <IconButton
                aria-label="linkedin"
                variant="ghost"
                size="lg"
                icon={<BsLinkedin size="28px" />}
                _hover={{
                  bg: "primary.700",
                  color: "white",
                }}
                isRound
                transition={"all .3s ease"}
              />
            </Box>
          </Stack>
        </Stack>
      </SimpleGrid>

      <Stack
        spacing={4}
        as={Container}
        maxW={"5xl"}
        // textAlign={"center"}
        mb={20}
      >
        <Heading textAlign={"center"} mb={8} fontSize={"3xl"}>
          Feedback
        </Heading>
        <Text color={"gray.600"} fontSize={"lg"}>
          Your feedback is invaluable to us. If you've had an experience with
          Drivyx and would like to share your thoughts, please fill out our form
          below.
        </Text>
        <Text color={"gray.600"} fontSize={"lg"}>
          We appreciate your interest in Drivyx and look forward to connecting
          with you!
        </Text>
        <Text mt={8} color={"gray.600"} fontSize={"lg"}>
          Best Regards,
        </Text>
        <Text color={"gray.600"} fontSize={"lg"}>
          The Drivyx Team
        </Text>
      </Stack>
    </SectionContainer>
  );
}

export default Contact;
