import { Utiles } from "@/services/utils";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";

function ProjectCoverUpload() {
  const inputRef = useRef<any>();
  const [base64Value, setBase64Value] = useState("");

  const handleImgChange = async (e: any) => {
    const file = e.target.files;
    const base64 = await Utiles.getBase64(file[0]);
    setBase64Value(base64 as string);
  };

  return (
    <VStack h={"100%"} w={"100%"} display={"none"}>
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
          onClick={(e) => {
            e.preventDefault();
            // inputRef.current.click();
            alert("under developing, not implemented yet");
          }}
        >
          <Flex direction="column" justifyContent="center" align="center">
            <Icon as={FaPlus} fontSize="lg" mb="12px" />
            <Text fontSize="lg" fontWeight="bold">
              Add Cover Image
            </Text>
          </Flex>
        </Button>
        <Input
          type="file"
          onChange={handleImgChange}
          ref={inputRef}
          display="none"
        />
      </FormControl>
    </VStack>
  );
}

export default ProjectCoverUpload;
