"use client";

import { Text, Flex, VStack, Icon, Button } from "@chakra-ui/react";
import { FeatureType } from "@/constants/FEATURE_ITEMS";

const SimpleCard = ({ heading, icon, content, CTAbtn }: FeatureType) => {
  return (
    <VStack
      p={6}
      rounded="lg"
      align="flex-start"
      justify={"space-between"}
      h={"450px"}
    >
      <VStack gap={4} mt={8}>
        <Flex p={2} rounded="md" marginInline="auto" align="left" w={"100%"}>
          <Icon as={icon} w={12} h={12} />
        </Flex>
        <Text fontWeight="semibold" fontSize="2xl" mt={6}>
          {heading}
        </Text>
        <Text fontSize="md" mt={4}>
          {content}
        </Text>
      </VStack>

      <Button
        variant={"link"}
        colorScheme={"blue"}
        size={"md"}
        onClick={() => {}}
      >
        {CTAbtn}
      </Button>
    </VStack>
  );
};

export default SimpleCard;
