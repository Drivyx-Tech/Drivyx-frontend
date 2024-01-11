import React from "react";
import { Flex, Text, Highlight, Image, Stack } from "@chakra-ui/react";
import heroImage from "public/images/hero-img.jpeg";
import HeroNavBtn from "./HeroNavBtn";

const Hero = () => {
  return (
    <Flex
      pos={"relative"}
      justify={"left"}
      align={"center"}
      height={"80vh"}
      w={"100%"}
      overflow={"hidden"}
      top={-1}
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

      <Stack pos={"absolute"} w={"full"} justify="center" align="center">
        <Stack w={"full"} maxW={"1600px"}>
          <Flex
            maxWidth={"900px"}
            direction={"column"}
            gap={"8"}
            marginTop={"65px"}
            mx={{ base: 10, md: 16, lg: 20 }}
          >
            <Text
              fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
              fontWeight={"900"}
              textColor={"text.white"}
            >
              <Highlight
                query="Sustainability"
                styles={{ textColor: "primary.600" }}
              >
                Steering the Future of Sustainability
              </Highlight>
            </Text>

            <Flex direction={"column"} align={"left"} gap={4}>
              <Text textColor={"text.white"} textStyle={"context"} mb={"13px"}>
                Experience Drivyx ESG: A Trailblazing Double-Sided Marketplace,
                Dedicated to Biodiversity, Sustainability, Circular Economy, and
                Regenerative Design.
              </Text>

              <HeroNavBtn />
            </Flex>
          </Flex>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Hero;
