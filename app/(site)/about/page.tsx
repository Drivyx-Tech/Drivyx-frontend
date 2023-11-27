/* eslint-disable react/no-unescaped-entities */
"use client";

import Banner from "@/ui/Banner";
import SectionContainer from "@/ui/SectionContainer";
import {
  HStack,
  VStack,
  Text,
  SimpleGrid,
  Flex,
  Highlight,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { TbUrgent } from "react-icons/tb";
import { FaConnectdevelop } from "react-icons/fa";
import SimpleCard from "@/ui/Cards/SimpleCard";
import esg from "public/images/esg.jpg";
import colorBg from "public/svg/color-bg.svg";

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
        >
          <VStack flex={1} align={"left"} w={"1100px"}>
            <Text textStyle={"heading"} textAlign="center">
              Driving Change: Why Solutions Like Drivyx Are Crucial for a
              Sustainable Future
            </Text>
          </VStack>
          <VStack flex={1} align={"left"} w={"1100px"}>
            <Text textStyle={"subheading"} fontWeight={"400"}>
              In a world facing unprecedented environmental challenges, the need
              for innovative solutions to drive sustainability has never been
              more apparent. Drivyx, a pioneering double-sided marketplace,
              stands as a beacon of hope in the quest for a greener and more
              sustainable future.
            </Text>
          </VStack>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={10}
          mb={40}
          textAlign={"left"}
          justifyContent={"left"}
          justifySelf={"left"}
          alignItems={"baseline"}
        >
          <SimpleCard
            heading={"The Urgency of Sustainability"}
            content={
              "Our planet is grappling with climate change, biodiversity loss, and resource depletion. Traditional business models often contribute to these issues, emphasizing the urgency for transformative approaches. Drivyx addresses this urgency by focusing on biodiversity, sustainability, circular economy, and regenerative design."
            }
            icon={TbUrgent}
            CTAbtn={"Explore >"}
            directTo="/marketplace"
          />
          <SimpleCard
            heading={"Connecting Investors and Projects"}
            content={
              "Drivyx plays a vital role in connecting investors with project owners, fostering collaboration that makes it easier to support environmentally friendly initiatives. This seamless connection is a powerful catalyst for change, enabling a swift and effective response to the pressing challenges of our time."
            }
            icon={FaConnectdevelop}
            CTAbtn={"Explore >"}
            directTo="/marketplace"
          />
        </SimpleGrid>

        <HStack gap={10}>
          <Flex justifyContent={"center"} flex={1}>
            <Image h={"600px"} src={esg.src} alt={"Drivyx ESG"} />
          </Flex>

          <VStack flex={1} gap={10}>
            <Text textStyle={"heading"} textAlign={"left"}>
              Diverse Projects, One Goal: Positive Change:
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
        </HStack>
      </SectionContainer>

      <SectionContainer my={{ base: 6, lg: 10 }}>
        <HStack py={16} px={8} gap={8}>
          <VStack flex={1} align={"left"}>
            <Text textStyle={"heading"} textAlign="center">
              Aligning Values with Investments
            </Text>
          </VStack>
          <VStack flex={1} align={"left"}>
            <Text textStyle={"subheading"} fontWeight={"400"}>
              At Drivyx, the belief in the power of sustainability is at the
              core of the platform. The marketplace empowers users to align
              their values with their investments, offering a unique opportunity
              to make a positive impact while achieving financial goals. This
              alignment creates a win-win situation, where individuals can
              contribute to a sustainable future while making sound investment
              decisions.
            </Text>
          </VStack>
        </HStack>

        <HStack py={16} px={8} gap={8}>
          <VStack flex={1} align={"left"}>
            <Text textStyle={"subheading"} fontWeight={"400"}>
              The Drivyx ESG double-sided Marketplace is designed to benefit
              both buyers and sellers. Buyers gain easy access to sustainable
              products and services, while sellers connect with a larger
              audience of environmentally conscious consumers. This symbiotic
              relationship accelerates the shift towards sustainable practices
              and products in the marketplace.
            </Text>
          </VStack>
          <VStack flex={1} align={"left"}>
            <Text textStyle={"heading"} textAlign="center">
              Benefits for Buyers and Sellers
            </Text>
          </VStack>
        </HStack>
      </SectionContainer>
      <Banner
        bgColor={"primary.300"}
        text={
          "Become a part of Drivyx ESG Marketplace and shape a sustainable future."
        }
        highlightText={"Drivyx ESG Marketplace"}
        btnText={"Sign Up"}
        btnURL={"/signup"}
      />

      <SectionContainer my={{ base: 6, lg: 10 }}>
        <VStack py={16} px={8} gap={8}>
          <VStack flex={1} align={"left"}>
            <Text textStyle={"heading"} textAlign="center">
              Drivyx - Your Sustainability Partner
            </Text>
          </VStack>
          <VStack flex={1} align={"left"}>
            <Text textStyle={"subheading"} fontWeight={"400"}>
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
        </VStack>
      </SectionContainer>
    </div>
  );
}

export default About;
