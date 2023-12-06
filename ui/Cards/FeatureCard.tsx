"use client";

import { Text, Image, VStack, Icon, Button, Link } from "@chakra-ui/react";
import { FeatureType } from "@/constants/FEATURE_ITEMS";
import blackLogo from "../../public/logo-black-72.png";

const FeatureCard = ({ heading, icon, content }: FeatureType) => {
  return (
    <VStack
      p={6}
      rounded="lg"
      textAlign="center"
      justify={"space-between"}
      pos="relative"
      h={"400px"}
    >
      <VStack gap={4}>
        <Image src={blackLogo.src} alt="drixyv logo" />
        <Text fontWeight="semibold" fontSize="2xl" mt={6}>
          {heading}
        </Text>
        <Text fontSize="md" mt={4}>
          {content}
        </Text>
      </VStack>

      <Link href={"/how-to"}>
        <Button variant={"link"} colorScheme={"blue"} size={"md"}>
          Learn more
        </Button>
      </Link>
    </VStack>
  );
};

export default FeatureCard;
