"use client";

import { Text, Flex, VStack, Icon, Button, Link } from "@chakra-ui/react";
import { FeatureType } from "@/constants/FEATURE_ITEMS";
import { GiWindTurbine } from "react-icons/gi";

const FeatureCard = ({ heading, icon, content }: FeatureType) => {
  return (
    <VStack
      // eslint-disable-next-line react-hooks/rules-of-hooks
      // bg={useColorModeValue('secondary.50', 'gray.700')}
      p={6}
      rounded="lg"
      textAlign="center"
      justify={"space-between"}
      pos="relative"
      h={"400px"}
    >
      <VStack gap={4}>
        <Icon as={GiWindTurbine} w={12} h={12} color={"black"} />
        <Text fontWeight="semibold" fontSize="2xl" mt={6}>
          {heading}
        </Text>
        <Text fontSize="md" mt={4}>
          {content}
        </Text>
      </VStack>

      <Link href={process.env.PROD_BASE_URL + "marketplace"}>
        <Button variant={"link"} colorScheme={"blue"} size={"md"}>
          Learn more
        </Button>
      </Link>
    </VStack>
  );
};

export default FeatureCard;
