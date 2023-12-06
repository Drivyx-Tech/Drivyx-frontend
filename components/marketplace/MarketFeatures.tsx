"use client";

import SectionContainer from "@/ui/SectionContainer";
import SimpleCard from "@/ui/Cards/SimpleCard";
import { HStack, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { GrShareOption } from "react-icons/gr";

export default function MarketFeatures() {
  return (
    <SectionContainer my={{ base: 6, lg: 10 }}>
      <HStack py={16} px={8} gap={8}>
        <VStack flex={1} align={"left"}>
          <Text textStyle={"heading"}>
            Explore a Sustainable Tomorrow Through Our Leading-Edge Marketplace
          </Text>
        </VStack>
        <VStack flex={1} align={"left"}>
          <Text textStyle={"smContext"}>
            Drivyx ESG is dedicated to leading the charge towards a sustainable
            future. Our state-of-the-art marketplace is equipped with advanced
            search features, well-defined project categories, and user-friendly
            options, empowering you to discover bespoke sustainable solutions
            tailored to your company’s specific needs. Join us today in shaping
            a greener and more environmentally conscious tomorrow.
          </Text>
        </VStack>
      </HStack>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        placeItems="center"
        spacing={10}
        mb={4}
      >
        <SimpleCard
          heading={"Your Ideal Sustainable Solution Awaits"}
          content={
            "Our marketplace showcases a diverse range of sustainable projects and products. Whether you're interested in renewable energy, eco-friendly infrastructure, or climate tech solutions, Drivyx ESG has the ideal solution that aligns with your values and requirements."
          }
          icon={MdOutlineTipsAndUpdates}
          CTAbtn={"Explore >"}
          directTo="/marketplace"
        />
        <SimpleCard
          heading={"Connect with a Sustainable Community"}
          content={
            "Join our marketplace and engage with a vibrant community of individuals and organizations who share your passion for sustainability. Together, we can create a better future by fostering collaboration and sharing knowledge."
          }
          icon={GrShareOption}
          CTAbtn={"Join >"}
          directTo="/signup"
        />
        <SimpleCard
          heading={"Make a Difference with Every Project"}
          content={
            "Every project funded through our marketplace contributes to a more sustainable future. Invest in sustainable projects and be an active part of the positive change we are driving together."
          }
          icon={TbShoppingBagCheck}
          CTAbtn={"Shop >"}
          directTo="/marketplace"
        />
      </SimpleGrid>
    </SectionContainer>
  );
}
