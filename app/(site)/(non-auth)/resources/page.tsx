import SectionContainer from "@/ui/SectionContainer";
import { VStack, Text } from "@chakra-ui/react";
import React from "react";
import { Metadata } from "next";
import { getAllPosts } from "@/services/endpoints/sanity";
import BlogCard from "@/components/resources/BlogCardSanity";
import Navbar from "@/components/menu/WithSubnavigation";

export const metadata: Metadata = {
  title: "Drivyx ESG | Resources",
  description:
    "Explore the Drivyx latest Blogs. Stay updated with the latest industry trends and insights.",
};

async function Resources() {
  const posts = await getAllPosts();

  return (
    <div>
      <Navbar navTheme="dark" />
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
          {posts.map((post, index) => {
            return <BlogCard key={index} post={post} />;
          })}
        </VStack>
      </SectionContainer>
    </div>
  );
}

export default Resources;
