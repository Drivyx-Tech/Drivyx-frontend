import React from "react";
import { Card, CardBody, CardHeader, Flex, Text } from "@chakra-ui/react";

type CustomCardContainerProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

function CustomCardContainer({
  title,
  description,
  children,
}: CustomCardContainerProps) {
  return (
    <Flex w={"100%"} h={"fit-content"}>
      <Card
        p="16px"
        mx={12}
        my="24px"
        boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
        border="2px solid"
        borderColor={"white"}
        w={"100%"}
      >
        <CardHeader p="12px 5px" mb="12px">
          <Flex direction="column">
            <Text fontSize="lg" color={"gray.700"} fontWeight="bold">
              {title}
            </Text>
            <Text fontSize="sm" color="gray.500" fontWeight="400">
              {description}
            </Text>
          </Flex>
        </CardHeader>
        <CardBody px="5px">{children}</CardBody>
      </Card>
    </Flex>
  );
}

export default CustomCardContainer;
