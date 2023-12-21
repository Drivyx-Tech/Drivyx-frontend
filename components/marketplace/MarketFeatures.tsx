import SectionContainer from "@/ui/SectionContainer";
import SimpleCard from "@/ui/Cards/SimpleCard";
import { VStack, Text, SimpleGrid, Wrap } from "@chakra-ui/react";
import React from "react";
import brightness from "@/public/icon/brightness.svg";
import connection from "@/public/icon/connection.svg";
import sustainable from "@/public/icon/sustainable-green.svg";

export default function MarketFeatures() {
  return (
    <SectionContainer my={{ base: 6, lg: 10 }}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        py={6}
        placeItems="center"
        mb={20}
        spacing={10}
      >
        <VStack flex={1} align={"left"}>
          <Text textStyle={"headingContext"} fontWeight={"900"}>
            Explore a Sustainable Tomorrow Through Our Leading-Edge Marketplace
          </Text>
        </VStack>
        <VStack flex={1} align={"left"}>
          <Text textStyle={"context"}>
            Drivyx ESG is dedicated to leading the charge towards a sustainable
            future. Our state-of-the-art marketplace is equipped with advanced
            search features, well-defined project categories, and user-friendly
            options, empowering you to discover bespoke sustainable solutions
            tailored to your company’s specific needs. Join us today in shaping
            a greener and more environmentally conscious tomorrow.
          </Text>
        </VStack>
      </SimpleGrid>

      <Wrap
        w={"100%"}
        flexDir={{ base: "row", md: "column" }}
        justify={{ base: "center", md: "space-around" }}
        placeItems="center"
        spacing={10}
        mb={4}
      >
        <SimpleCard
          heading={"Your Ideal Sustainable Solution Awaits"}
          content={
            "Our marketplace showcases a diverse range of sustainable projects and products. Whether you're interested in renewable energy, eco-friendly infrastructure, or climate tech solutions, Drivyx ESG has the ideal solution that aligns with your values and requirements."
          }
          icon={brightness}
          CTAbtn={"Explore >"}
          directTo="/marketplace"
          maxW={{ base: "auto", lg: "400px" }}
        />
        <SimpleCard
          heading={"Connect with a Sustainable Community"}
          content={
            "Join our marketplace and engage with a vibrant community of individuals and organizations who share your passion for sustainability. Together, we can create a better future by fostering collaboration and sharing knowledge."
          }
          icon={connection}
          CTAbtn={"Join >"}
          directTo="/signup"
          maxW={{ base: "auto", lg: "400px" }}
        />
        <SimpleCard
          heading={"Make a Difference with Every Project"}
          content={
            "Every project funded through our marketplace contributes to a more sustainable future. Invest in sustainable projects and be an active part of the positive change we are driving together."
          }
          icon={sustainable}
          CTAbtn={"Shop >"}
          directTo="/marketplace"
          maxW={{ base: "auto", lg: "400px" }}
        />
      </Wrap>
    </SectionContainer>
  );
}
