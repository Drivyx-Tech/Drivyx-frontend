import { Button, Flex, Center, Text, Highlight } from "@chakra-ui/react";
import React from "react";
import SectionContainer from "./SectionContainer";

interface IProps {
  bgColor: string;
  text: string;
  highlightText?: string;
  btnText: string;
  btnURL?: string;
}

const Banner = ({ bgColor, text, highlightText, btnText, btnURL }: IProps) => {
  return (
    <Center bgGradient="linear(to-r, #fdbb2d, #22c1c3)" bgColor={bgColor}>
      <SectionContainer my={0}>
        <Flex
          maxW={"1100px"}
          textAlign={"center"}
          direction={"column"}
          gap={10}
        >
          <Text fontSize={"3xl"} fontWeight="bold" color={"gray.700"}>
            <Highlight
              query={highlightText as string}
              styles={{ color: "white" }}
            >
              {text}
            </Highlight>
          </Text>
          <Center>
            <Button
              as={"a"}
              href={btnURL}
              target={"_blank"}
              variant={"filledSqBtn"}
              bg={"white"}
              color={"primary.800"}
              transition={"0.2s ease-in-out"}
              _hover={{
                boxShadow: "md",
              }}
              shadow={"lg"}
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
