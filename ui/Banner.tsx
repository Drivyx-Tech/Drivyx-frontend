"use client";

import { Button, Flex, Center, Text, Highlight } from "@chakra-ui/react";
import React from "react";
import SectionContainer from "./SectionContainer";
import colorBg from "public/svg/color-bg.svg";

interface IProps {
  bgColor?: string;
  text: string;
  highlightText?: string;
  btnText: string;
  btnURL?: string;
}

const Banner = ({ bgColor, text, highlightText, btnText, btnURL }: IProps) => {
  return (
    <Center bgColor={"primary.900"}>
      <SectionContainer my={-4}>
        <Flex
          z-index={10}
          maxW={"1100px"}
          textAlign={"center"}
          direction={"column"}
          gap={6}
        >
          <Text textStyle={"subheading"} color={"white"}>
            <Highlight
              query={highlightText as string}
              styles={{
                background: "-webkit-linear-gradient(left, #fdbb2d, #22c1c3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {text}
            </Highlight>
          </Text>
          <Center>
            <Button
              as={"a"}
              href={btnURL}
              variant={"filledSqBtn"}
              bg={"white"}
              color={"primary.800"}
              transition={"0.2s ease-in-out"}
              _hover={{
                boxShadow: "md",
              }}
              shadow={"lg"}
              size={"sm"}
            >
              {btnText}
            </Button>
          </Center>
        </Flex>
      </SectionContainer>
    </Center>
  );
};

export default Banner;
