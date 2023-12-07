"use client";

import { Text, Flex, VStack, Icon, Button, Link } from "@chakra-ui/react";
import { FeatureType } from "@/constants/FEATURE_ITEMS";

const SimpleCard = ({
  heading,
  icon,
  content,
  CTAbtn,
  directTo,
  maxW,
}: FeatureType) => {
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
          <Icon as={icon} w={12} h={12} />
        </Flex>
        <Text w={"full"} textStyle={"subheading"} mt={6}>
          {heading}
        </Text>
        <Text textStyle={"context"} mt={4}>
          {content}
        </Text>
      </VStack>

      <Button
        as={Link}
        href={directTo}
        variant={"link"}
        textColor={"secondary.500"}
        size={"md"}
        textStyle={"context"}
      >
        {CTAbtn}
      </Button>
    </VStack>
  );
};

export default SimpleCard;
