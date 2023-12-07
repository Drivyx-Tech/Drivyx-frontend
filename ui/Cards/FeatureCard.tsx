"use client";

import { Text, Image, VStack, Button, Link } from "@chakra-ui/react";
import { FeatureType } from "@/constants/FEATURE_ITEMS";
import blackLogo from "../../public/logo-black-72.png";

const FeatureCard = ({ heading, content }: FeatureType) => {
  return (
    <VStack
      px={4}
      rounded="lg"
      textAlign="center"
      pos="relative"
      h={{ base: "fit-content", md: "380px" }}
      w={{ base: "100%", md: "300px" }}
    >
      <VStack gap={4} h={"full"} justify={"space-between"}>
        <VStack gap={4}>
          <Image src={blackLogo.src} alt="drixyv logo" />
          <Text textStyle={"subheading"} fontWeight="semibold">
            {heading}
          </Text>
          <Text textStyle={"context"} fontSize="md">
            {content}
          </Text>
        </VStack>

        <Link href={"/how-to"}>
          <Button
            textStyle={"context"}
            variant={"link"}
            color={"secondary.400"}
            size={"md"}
          >
            Learn more
          </Button>
        </Link>
      </VStack>
    </VStack>
  );
};

export default FeatureCard;
