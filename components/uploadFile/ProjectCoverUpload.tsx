import { ImgFile } from "@/services/endpoints/type";
import { Utiles } from "@/services/utils";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Text,
  VStack,
  Image,
  Stack,
  HStack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";

type Props = {
  coverFile: ImgFile;
  setCoverFile: React.Dispatch<React.SetStateAction<ImgFile>>;
};

function ProjectCoverUpload({ coverFile, setCoverFile }: Props) {
  const inputRef = useRef<any>();
  const [file, setFile] = useState<any>();

  const handleImgChange = async (e: any) => {
    const file = e.target.files;
    console.log("file", file);
    setFile(file);
    const base64 = await Utiles.getBase64(file[0]);

    setCoverFile({
      type: file[0].type,
      size: file[0].size.toString(),
      base64: base64 as string,
      ext: file[0].type.split("/")[1],
    });
  };

  return (
    <VStack h={"100%"} w={"100%"}>
      <FormControl isRequired={false} h={"100%"} w={"100%"}>
        <FormLabel>Upload a Cover Image:</FormLabel>
        <Stack
          p={8}
          bg="gray.200"
          color="gray.400"
          border="1px solid"
          borderColor={"gray.200"}
          borderRadius="15px"
          h={"80%"}
          w={"100%"}
        >
          <Flex
            direction="column"
            justifyContent="center"
            align="center"
            h={"full"}
            w={"100%"}
            borderRadius="15px"
            border="1px dashed "
            borderColor={"secondery.200"}
          >
            {coverFile?.base64 ? (
              <VStack px={8}>
                <Image src={coverFile?.base64} alt={"project cover image"} />
                <HStack>
                  <Text>{file[0].name}</Text>
                  <DeleteIcon
                    _hover={{ cursor: "pointer" }}
                    onClick={() => {
                      // setCoverFile();
                      setFile(null);
                    }}
                  />
                </HStack>
              </VStack>
            ) : (
              <>
                <Icon as={FaPlus} fontSize="lg" mb="12px" />
                <Text fontSize="lg" fontWeight="bold">
                  Drag & drop any image file here
                </Text>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    inputRef.current.click();
                  }}
                  fontSize="lg"
                  fontWeight="bold"
                >
                  or browse file from device
                </Button>
              </>
            )}
          </Flex>

          <Input
            type="file"
            onChange={handleImgChange}
            ref={inputRef}
            display="none"
          />
        </Stack>
      </FormControl>
    </VStack>
  );
}

export default ProjectCoverUpload;
