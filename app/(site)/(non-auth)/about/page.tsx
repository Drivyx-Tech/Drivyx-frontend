import Banner from "@/ui/Banner";
import SectionContainer from "@/ui/SectionContainer";
import { VStack, Text, SimpleGrid, Divider } from "@chakra-ui/react";
import React from "react";

import SimpleCard from "@/ui/Cards/SimpleCard";
import colorBg from "public/svg/color-bg.svg";
import MarketFeatures from "@/components/marketplace/MarketFeatures";
import ShortIntroWithImg from "@/components/marketplace/ShortIntroWithImg";
import { ABOUT_ITEMS } from "@/constants/FEATURE_ITEMS";

function About() {
  return (
    <div style={{ marginTop: "70px" }}>
      <SectionContainer my={{ base: 6, lg: 10 }}>
        <VStack
          py={16}
          px={8}
          gap={8}
          backgroundImage={colorBg.src}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          mb={{ base: 20 }}
        >
          <VStack flex={1} align={"left"}>
            <Text textStyle={"heading"} textAlign="center">
              Driving Change: Why Solutions Like Drivyx Are Crucial for a
              Sustainable Future
            </Text>
          </VStack>
          <VStack flex={1} align={"left"}>
            <Text textStyle={"context"}>
              In a world facing unprecedented environmental challenges, the need
              for innovative solutions to drive sustainability has never been
              more apparent. Drivyx, a pioneering double-sided marketplace,
              stands as a beacon of hope in the quest for a greener and more
              sustainable future.
            </Text>
          </VStack>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={10}
          mb={{ base: 20, lg: 36 }}
          justifyItems={"center"}
        >
          {ABOUT_ITEMS.map((item, index) => {
            return (
              <SimpleCard
                key={index}
                heading={item.heading}
                content={item.content}
                icon={item.icon}
                CTAbtn={item.CTAbtn}
                directTo={item.directTo}
              />
            );
          })}
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 20 }} mb={20}>
          <VStack flex={1} gap={10}>
            <Text
              textStyle={"headingContext"}
              fontWeight={900}
              textAlign="center"
            >
              Diverse Projects, One Goal, Positive Change
            </Text>
            <Text textStyle={"context"}>
              One of Drivyx's key strengths lies in its diverse portfolio of
              projects, spanning from renewable energy initiatives to
              eco-friendly infrastructure. This diversity ensures that there is
              something for everyone looking to contribute to positive
              environmental change. By supporting these projects, individuals
              can actively participate in building a sustainable future.
            </Text>
          </VStack>

          <VStack flex={1} gap={10}>
            <Text
              textStyle={"headingContext"}
              fontWeight={900}
              textAlign="center"
            >
              Aligning Values with Investments
            </Text>
            <Text textStyle={"context"}>
              At Drivyx, the belief in the power of sustainability is at the
              core of the platform. The marketplace empowers users to align
              their values with their investments, offering a unique opportunity
              to make a positive impact while achieving financial goals. This
              alignment creates a win-win situation, where individuals can
              contribute to a sustainable future while making sound investment
              decisions.
            </Text>
          </VStack>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 20 }} mb={20}>
          <VStack flex={1} gap={10}>
            <Text
              textStyle={"headingContext"}
              fontWeight={900}
              textAlign="center"
            >
              Benefits for Buyers and Sellers
            </Text>
            <Text textStyle={"context"}>
              The Drivyx ESG double-sided Marketplace is designed to benefit
              both buyers and sellers. Buyers gain easy access to sustainable
              products and services, while sellers connect with a larger
              audience of environmentally conscious consumers. This symbiotic
              relationship accelerates the shift towards sustainable practices
              and products in the marketplace.
            </Text>
          </VStack>

          <VStack flex={1} gap={10}>
            <Text
              textStyle={"headingContext"}
              fontWeight={900}
              textAlign="center"
            >
              Drivyx - Your Sustainability Partner
            </Text>
            <Text textStyle={"context"}>
              In a world seeking solutions to pressing environmental challenges,
              Drivyx emerges as a powerful force for positive change. By
              connecting investors with impactful projects, fostering a diverse
              portfolio, and aligning values with investments, Drivyx is not
              just a marketplace; it's a catalyst for a sustainable future. As
              we drive towards a greener world, platforms like Drivyx play a
              crucial role in shaping the transformative change our planet
              desperately needs.
            </Text>
          </VStack>
        </SimpleGrid>
      </SectionContainer>

      <Banner
        text={
          "Become a part of Drivyx ESG Marketplace and shape a sustainable future."
        }
        highlightText={"Drivyx ESG Marketplace"}
        btnText={"Sign Up"}
        btnURL={"/signup"}
      />

      <MarketFeatures />

      <ShortIntroWithImg />

      <Divider h={12} />
    </div>
  );
}

export default About;
