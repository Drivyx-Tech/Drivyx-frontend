import { ROUTE_PATH } from "@/constants/ROUTE_PATH";
import { useAppSlector } from "@/services/redux/hooks";
import CustomIconButton from "@/ui/Button/CustomIconButton";
import { Flex, VStack, Text, Divider } from "@chakra-ui/react";
import React from "react";

function ProjectInfoDisplay() {
  return (
    <VStack w={"full"} h={"full"} gap={{ base: 8 }} flex={1.5}>
      <Flex
        w={"full"}
        gap={4}
        bgColor={"white"}
        p={8}
        rounded={30}
        shadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
      >
        <VStack justify={"center"} w={"full"} align="left">
          <Text fontSize={"md"} fontWeight={"bold"} textColor={"secondary.800"}>
            Create a project
          </Text>

          <Divider />

          <Text fontSize={"sm"} color={"gray.500"} my={4}>
            Fill in project details, and get started.
          </Text>

          <CustomIconButton
            text={"Create a project"}
            navTo={ROUTE_PATH.DASHBOARD.PROJECT}
          />
        </VStack>
      </Flex>
    </VStack>
  );
}

export default ProjectInfoDisplay;
