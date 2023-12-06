/* eslint-disable react/no-unescaped-entities */
"use client";

import Banner from "@/ui/Banner";
import SectionContainer from "@/ui/SectionContainer";
import {
  VStack,
  Text,
  Image,
  Stack,
  Badge,
  LinkBox,
  Heading,
  LinkOverlay,
  HStack,
  Button,
  Link,
} from "@chakra-ui/react";
import React from "react";
import heroRightImg from "public/images/role.jpeg";
import evImg from "public/images/ev-img.jpeg";
import chainImg from "public/images/chain-img.jpeg";

function About() {
  return (
    <SectionContainer my={{ base: 6, lg: 10 }}>
      <VStack w={"100%"} align={"center"} gap={4} mb={12}>
        <Text maxW={800} textStyle={"heading"}>
          Explore the Our Blogs
        </Text>
        <Text textStyle={"Context"}>
          Stay updated with the latest industry trends and insights.
        </Text>
      </VStack>

      <VStack w={"100%"} justify={"space-evenly"} gap={6}>
        <HStack
          p={4}
          spacing={8}
          h={"230px"}
          align={"center"}
          justify={"center"}
        >
          <Image
            width={300}
            height={200}
            src={heroRightImg.src}
            borderRadius="lg"
            alt={"drixyv"}
          />

          <Stack spacing="3" maxW={"500px"}>
            <Link href={"/resources/join-drivyx"}>
              <Heading size="md" my="2">
                Join Drivyx: A New Era in Accelerating Global Regeneration
              </Heading>
            </Link>

            <Text noOfLines={3} fontSize={"md"}>
              In a world grappling with environmental challenges, the need for
              trusted sustainable solutions has never been greater. At Drivyx,
              we believe in the power of collaboration and innovation to drive
              positive change. Our platform is more than just a marketplace;
              it's a community dedicated to connecting impactful ESG projects
              with vital funding opportunities.
            </Text>

            <Text fontSize={"12px"} color={"gray.600"} fontWeight="medium">
              04/12/2023
            </Text>
          </Stack>
        </HStack>

        <HStack
          p={4}
          spacing={8}
          h={"230px"}
          align={"center"}
          justify={"center"}
        >
          <Image
            width={300}
            height={200}
            src={evImg.src}
            borderRadius="lg"
            alt={"drixyv"}
          />
          <Stack spacing="3" maxW={"500px"}>
            <Link href="/resources/revolutionizing-esg-investment">
              <Heading size="md" my="2">
                Drivyx: Revolutionizing ESG Investment Opportunities for a
                Sustainable Future
              </Heading>
            </Link>

            <Text noOfLines={3} fontSize={"md"}>
              In today’s rapidly evolving economic landscape, venture
              capitalists and impact investors are increasingly looking towards
              investments that not only yield financial returns but also drive
              positive environmental and social change. At Drivyx, we recognize
              this shift and have created a platform that aligns perfectly with
              the aspirations of forward-thinking investors. Our mission: to
              connect you with a diverse array of ESG projects worldwide,
              thereby accelerating global regeneration.
            </Text>

            <Text fontSize={"12px"} color={"gray.600"} fontWeight="medium">
              04/12/2023
            </Text>
          </Stack>
        </HStack>

        <HStack
          p={4}
          spacing={8}
          h={"230px"}
          align={"center"}
          justify={"center"}
        >
          <Image
            width={300}
            height={200}
            src={chainImg.src}
            borderRadius="lg"
            alt={"drixyv"}
          />
          <Stack spacing="3" maxW={"500px"}>
            <Link href="/resources/drivyx-beta-launch">
              <Heading size="md" my="2">
                Drivyx Beta Launch: Paving the Way for Blockchain and AI
                Integration in 2024
              </Heading>
            </Link>

            <Text noOfLines={3} fontSize={"md"}>
              We are thrilled to announce that Drivyx has officially entered its
              beta phase! As we embark on this journey, our platform is set to
              revolutionize the ESG investment landscape. While we currently
              open our doors to projects showcasing their impactful work, we're
              excited to share that Drivyx's roadmap for 2024 includes
              groundbreaking advancements in blockchain and AI technologies.
            </Text>

            <Text fontSize={"12px"} color={"gray.600"} fontWeight="medium">
              04/12/2023
            </Text>
          </Stack>
        </HStack>
      </VStack>
    </SectionContainer>
  );
}

export default About;
