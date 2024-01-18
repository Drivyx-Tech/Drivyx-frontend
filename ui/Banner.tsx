"use client";

import { Button, Flex, Center, Text, Highlight } from "@chakra-ui/react";
import React from "react";
import SectionContainer from "./SectionContainer";
import colorBg from "public/svg/color-bg.svg";
import CustomSolidButton from "./Button/CustomSolidButton";
import { ROUTE_PATH } from "@/constants/ROUTE_PATH";
import CustomVariantButton from "./Button/CustomVariantButton";

interface IProps {
  bgColor?: string;
  text: string;
  highlightText?: string;
  btnText: string;
  btnURL?: string;
}

const Banner = ({ text, highlightText, btnText, btnURL }: IProps) => {
  return (
    <Center
      // backgroundImage={colorBg.src}
      // backgroundPosition="center"
      // backgroundRepeat="no-repeat"
      // backgroundSize="cover"
      bg={"tertiary.50"}
    >
      <SectionContainer my={8}>
        <Flex
          z-index={10}
          maxW={"1100px"}
          textAlign={"center"}
          direction={"column"}
          gap={6}
        >
          <Text fontWeight={600} fontSize={{ base: "xl", md: "3xl" }}>
            <Highlight
              query={highlightText as string}
              styles={{
                background: "-webkit-linear-gradient(left, #fdbb2d, #22c1c3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "600",
              }}
            >
              {text}
            </Highlight>
          </Text>
          <Center>
            <CustomVariantButton
              colorTheme="tertiary"
              text={btnText}
              navTo={ROUTE_PATH.AUTH.SIGNUP}
            />
          </Center>
        </Flex>
      </SectionContainer>
    </Center>
  );
};

export default Banner;
