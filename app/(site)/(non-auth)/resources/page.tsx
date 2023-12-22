import SectionContainer from "@/ui/SectionContainer";
import {
  VStack,
  Text,
  Image,
  Stack,
  HStack,
  Link,
  Box,
} from "@chakra-ui/react";
import React from "react";
import heroRightImg from "public/images/role.jpeg";
import evImg from "public/images/ev-img.jpeg";
import chainImg from "public/images/chain-img.jpeg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drivyx ESG | Resources",
  description:
    "Explore the Drivyx latest Blogs. Stay updated with the latest industry trends and insights.",
};

function Resources() {
  return (
    <SectionContainer my={{ base: 14, lg: 10 }}>
      <VStack w={"100%"} align={"center"} gap={4} mb={12}>
        <Text maxW={800} textStyle={"heading"}>
          Explore the Our Blogs
        </Text>
        <Text textStyle={"context"}>
          Stay updated with the latest industry trends and insights.
        </Text>
      </VStack>

      <VStack w={"100%"} gap={6}>
        <HStack
          shadow={"lg"}
          flexDir={{ base: "column", md: "row" }}
          p={4}
          spacing={8}
          h={{ base: "auto", md: "230px" }}
          align={"center"}
          justify={"center"}
        >
          <Box w={300} h={200} flex={1}>
            <Image
              width={300}
              height={200}
              objectFit={"cover"}
              src={heroRightImg.src}
              borderRadius="lg"
              alt={"drixyv"}
            />
          </Box>

          <Stack spacing="3" maxW={"500px"} flex={2}>
            <Link href={"/resources/join-drivyx"}>
              <Text textStyle={"smBold"} my="2">
                Join Drivyx: A New Era in Accelerating Global Regeneration
              </Text>
            </Link>

            <Text noOfLines={3} textStyle={"xsContext"}>
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
          shadow={"lg"}
          flexDir={{ base: "column", md: "row" }}
          p={4}
          spacing={8}
          h={{ base: "auto", md: "230px" }}
          align={"center"}
          justify={"center"}
        >
          <Box w={300} h={200} flex={1}>
            <Image
              width={300}
              height={200}
              objectFit={"cover"}
              src={evImg.src}
              borderRadius="lg"
              alt={"drixyv"}
            />
          </Box>
          <Stack spacing="3" maxW={"500px"} flex={2}>
            <Link href="/resources/revolutionizing-esg-investment">
              <Text textStyle={"smBold"} my="2">
                Drivyx: Revolutionizing ESG Investment Opportunities for a
                Sustainable Future
              </Text>
            </Link>

            <Text noOfLines={3} textStyle={"xsContext"}>
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
          shadow={"lg"}
          flexDir={{ base: "column", md: "row" }}
          p={4}
          spacing={8}
          h={{ base: "auto", md: "230px" }}
          align={"center"}
          justify={"center"}
        >
          <Box w={300} maxH={200} flex={1}>
            <Image
              width={300}
              height={200}
              objectFit={"cover"}
              src={chainImg.src}
              borderRadius="lg"
              alt={"drixyv"}
            />
          </Box>
          <Stack spacing="3" maxW={"500px"} flex={2}>
            <Link href="/resources/drivyx-beta-launch">
              <Text textStyle={"smBold"} my="2">
                Drivyx Beta Launch: Paving the Way for Blockchain and AI
                Integration in 2024
              </Text>
            </Link>

            <Text noOfLines={3} textStyle={"xsContext"}>
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

export default Resources;
