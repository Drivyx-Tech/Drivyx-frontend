import React from "react";
import { Flex, Text, Button, Box, Highlight, Link } from "@chakra-ui/react";
import heroImage from "public/images/hero-img.jpeg";

const Hero = () => {
  return (
    <Flex
      backgroundImage={heroImage.src}
      backgroundPosition={"center"}
      pos={"relative"}
      justify={"left"}
      align={"center"}
      direction="row"
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
        zIndex={2}
      ></Flex>
      <Flex
        maxWidth={"900px"}
        direction={"column"}
        gap={"8"}
        marginTop={"65px"}
        paddingX={20}
        zIndex={2}
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
            <Link href={"/overview"}>
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"md"}
                fontWeight={600}
                variant={"solid"}
                color={"white"}
                bg={"secondary.500"}
                _hover={{
                  bg: "secondary.default",
                }}
                transition={"all .25s ease-in-out"}
              >
                Learn More
              </Button>
            </Link>

            <Link href={"/signup"}>
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"md"}
                fontWeight={600}
                bg="primary.default"
                variant="filled"
                _hover={{ bg: "primary.600" }}
                transition={"all .25s ease-in-out"}
              >
                Sign Up
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
