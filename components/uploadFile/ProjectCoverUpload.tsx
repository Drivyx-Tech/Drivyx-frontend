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
  Link,
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
  const [isDragOver, setIsDragOver] = useState(false);

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

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    const file = droppedFiles[0];
    setFile(file);
    const reader = new FileReader();

    reader.onload = async () => {
      const base64 = await Utiles.getBase64(file);
      setCoverFile({
        type: file.type,
        size: file.size.toString(),
        base64: base64 as string,
        ext: file.type.split("/")[1],
      });
    };

    reader.readAsDataURL(file);
  };

  return (
    <VStack h={"100%"} w={"100%"}>
      <FormControl isRequired={false} h={"100%"} w={"100%"}>
        <FormLabel>Upload a Cover Image:</FormLabel>
        <Stack
          p={16}
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
            border={"2px dashed "}
            borderColor={isDragOver ? "blue" : "gray.300"}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {coverFile?.base64 ? (
              <VStack px={8} h={"full"} justify={"center"} align="center''">
                <Image
                  maxH={"200px"}
                  src={coverFile?.base64}
                  alt={"project cover image"}
                />
                <HStack justify={"center"}>
                  <DeleteIcon
                    _hover={{ cursor: "pointer" }}
                    onClick={() => {
                      setCoverFile({
                        type: "",
                        size: "",
                        base64: "",
                        ext: "",
                      });
                      setFile({});
                    }}
                  />
                </HStack>
              </VStack>
            ) : (
              <>
                <Icon as={FaPlus} fontSize="lg" mb="12px" />
                <Text fontSize="lg">Drag & drop any image file here</Text>
                <Text fontSize="lg">
                  or
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      inputRef.current.click();
                    }}
                    fontSize="lg"
                    color={"blue"}
                  >
                    {" "}
                    browse{" "}
                  </Link>
                  file from device
                </Text>
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
