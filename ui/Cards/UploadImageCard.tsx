import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaPlus } from "react-icons/fa";

function UploadImageCard() {
  return (
    <VStack h={"100%"} w={"100%"}>
      <FormControl isRequired={false} h={"100%"} w={"100%"}>
        <FormLabel>Upload Project Cover Image:</FormLabel>
        <Button
          bg="transparent"
          color="gray.400"
          border="1px solid"
          borderColor={"gray.200"}
          borderRadius="15px"
          h={"80%"}
          w={"100%"}
        >
          <Flex direction="column" justifyContent="center" align="center">
            <Icon as={FaPlus} fontSize="lg" mb="12px" />
            <Text fontSize="lg" fontWeight="bold">
              Add Cover Image
            </Text>
          </Flex>
        </Button>
      </FormControl>
    </VStack>
  );
}

export default UploadImageCard;
