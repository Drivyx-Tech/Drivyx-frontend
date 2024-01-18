"use client";

import { Text, Flex, VStack, Icon, Button, Image } from "@chakra-ui/react";
import { FeatureType } from "@/constants/FEATURE_ITEMS";
import { useRouter } from "next/navigation";
import AnimatedTextButton from "../Button/AnimatedTextButton";

const SimpleCard = ({
  heading,
  icon,
  content,
  CTAbtn,
  directTo,
  maxW,
}: FeatureType) => {
  const router = useRouter();

  return (
    <VStack
      p={6}
      rounded="lg"
      align="flex-start"
      justify={"space-between"}
      h={"100%"}
      minH={{ base: "auto", lg: "520px" }}
      maxW={maxW}
    >
      <VStack gap={4} h={"full"}>
        <Flex p={2} rounded="md" marginInline="auto" align="left" w={"100%"}>
          <Image src={icon.src} alt="icon" w={12} h={12} textColor={"red"} />
        </Flex>
        <Text w={"full"} textStyle={"subheading"} mt={6}>
          {heading}
        </Text>
        <Text textStyle={"context"} mt={4}>
          {content}
        </Text>
      </VStack>

      <AnimatedTextButton
        navTo={directTo}
        text={"explore more"}
        arrowDir={"right"}
      />
    </VStack>
  );
};

export default SimpleCard;
