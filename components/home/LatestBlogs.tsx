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
} from "@chakra-ui/react";
import React from "react";
import heroRightImg from "public/images/role.jpeg";
import evImg from "public/images/ev-img.jpeg";
import chainImg from "public/images/chain-img.jpeg";

export default function LatestBlogs() {
  return (
    <SectionContainer my={{ base: 10, lg: 16 }}>
      <VStack gap={16}>
        <VStack w={"100%"} align={"left"} gap={4}>
          <Text
            textTransform={"uppercase"}
            color={"primary.700"}
            fontWeight={600}
            fontSize={"md"}
            py={1}
            px={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Latest
          </Text>
          <Text maxW={800} textStyle={"heading"}>
            Explore the Latest Blog Posts
          </Text>
          <Text textStyle={"Context"}>
            Stay updated with the latest industry trends and insights.
          </Text>
        </VStack>

        <HStack
          wrap={"wrap"}
          flexDir={{ base: "column", md: "row" }}
          w={"100%"}
          justify={"space-evenly"}
          gap={6}
        >
          <LinkBox
            as="article"
            maxW="sm"
            p="5"
            borderWidth="1px"
            rounded="md"
            h={"100%"}
            minH={"570px"}
          >
            <Image
              width={400}
              height={300}
              src={chainImg.src}
              borderRadius="lg"
              alt={"drixyv"}
            />
            <Stack mt="6" spacing="3">
              <Badge w={"fit-content"} variant="subtle" colorScheme="red">
                NEW
              </Badge>
              <Heading size="sm" my="2">
                <LinkOverlay href="/resources/drivyx-beta-launch">
                  Drivyx Beta Launch: Paving the Way for Blockchain and AI
                  Integration in 2024
                </LinkOverlay>
              </Heading>

              <Text noOfLines={3} fontSize={"sm"}>
                We are thrilled to announce that Drivyx has officially entered
                its beta phase! As we embark on this journey, our platform is
                set to revolutionize the ESG investment landscape. While we
                currently open our doors to projects showcasing their impactful
                work, we're excited to share that Drivyx's roadmap for 2024
                includes groundbreaking advancements in blockchain and AI
                technologies.
              </Text>

              <Text>04/12/2023</Text>
            </Stack>
          </LinkBox>
        </HStack>

        {/* <Button
          rightIcon={<ArrowForwardIcon />}
          bg="primary.default"
          variant="filled"
          _hover={{ bg: "primary.600" }}
        >
          View All
        </Button> */}
      </VStack>
    </SectionContainer>
  );
}
