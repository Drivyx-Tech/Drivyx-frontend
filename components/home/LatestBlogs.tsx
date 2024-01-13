"use client";

import SectionContainer from "@/ui/SectionContainer";
import { VStack, Text, Container, HStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ChakraCarousel from "@/ui/ChakraCarousel";
import { getAllPosts, Post } from "@/services/endpoints/sanity";
import TopPostCard from "./TopPostCard";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { ROUTE_PATH } from "@/constants/ROUTE_PATH";
import AnimatedTextButton from "@/ui/Button/AnimatedTextButton";

export default function LatestBlogs() {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllPosts();
      setData(data);
    };
    fetchData();
  }, []);

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
            Resources
          </Text>
          <Text w={"fit-content"} textStyle={"heading"}>
            Things to know about Drivyx ESG platform
          </Text>
          <Text textStyle={"Context"}>
            Stay updated with the latest industry trends and insights.
          </Text>

          <AnimatedTextButton
            navTo={ROUTE_PATH.NON_AUTH.RESOURCES.HOME}
            text={"See more Drivyx ESG resources"}
            arrowDir={"right"}
          />
        </VStack>

        <Container
          py={8}
          px={0}
          maxW={{
            base: "100%",
            sm: "35rem",
            md: "43.75rem",
            lg: "57.5rem",
            xl: "75rem",
            xxl: "87.5rem",
          }}
        >
          <ChakraCarousel gap={32}>
            {data.map((post, index) => (
              <TopPostCard key={index} post={post} />
            ))}
          </ChakraCarousel>
        </Container>
      </VStack>
    </SectionContainer>
  );
}
