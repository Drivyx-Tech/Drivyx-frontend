"use client";

import React from "react";
import { Flex, Text, Highlight, Image } from "@chakra-ui/react";
import heroImage from "public/images/hero-img.jpeg";
import { useAppSlector } from "@/services/redux/hooks";
import NavButton from "@/ui/Button/NavButton";

const Hero = () => {
  const accessToken = useAppSlector((state) => state.tokens.currentToken);

  return (
    <Flex
      pos={"relative"}
      justify={"left"}
      align={"center"}
      height={"100vh"}
      w={"100%"}
      overflow={"hidden"}
    >
      <Flex
        pos={"absolute"}
        w={"100%"}
        h={"100%"}
        bg={"black"}
        opacity={"0.3"}
      ></Flex>
      <Image
        src={heroImage.src}
        alt="drivyx ESG"
        w={"100%"}
        h={"100%"}
        loading={"lazy"}
        objectFit={"cover"}
      />

      <Flex
        pos={"absolute"}
        maxWidth={"900px"}
        direction={"column"}
        gap={"8"}
        marginTop={"65px"}
        mx={{ base: 10, md: 16, lg: 20 }}
      >
        <Text textStyle={"heroTitle"}>
          <Highlight
            query="Sustainability"
            styles={{ textColor: "primary.600" }}
          >
            Steering the Future of Sustainability
          </Highlight>
        </Text>

        <Flex
          direction={"column"}
          align={"left"}
          alignItems={{ base: "center", lg: "flex-start" }}
          gap={4}
        >
          <Text textColor={"text.white"} textStyle={"context"} mb={"13px"}>
            Experience Drivyx ESG: A Trailblazing Double-Sided Marketplace,
            Dedicated to Biodiversity, Sustainability, Circular Economy, and
            Regenerative Design.
          </Text>

          <Flex direction={"row"} gap={"4"}>
            <NavButton
              variant="solid"
              colorMode="secondary"
              text="Learn More"
              navTo={"/how-to"}
            />

            <NavButton
              variant="solid"
              colorMode="primary"
              text={!accessToken ? "Sign Up" : "Create a Project"}
              navTo={!accessToken ? "/signup" : "/dashboard/project"}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
