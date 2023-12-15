import { IStep } from "@/app/(site)/(dashboard)/dashboard/project/page";
import { ImgFile } from "@/services/endpoints/type";
import { useAppDispatch, useAppSlector } from "@/services/redux/hooks";
import { tmpStoreAction } from "@/services/redux/tmpStore.reducer";
import { Utiles } from "@/services/utils";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DeleteIcon,
} from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormControl,
  Input,
  Text,
  VStack,
  Image,
  Stack,
  HStack,
  Link,
  Spinner,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

function UploadMediaForm({
  step,
  setStep,
  setProgress,
  isLoading,
  setIsLoading,
}: IStep) {
  const dispatch = useAppDispatch();
  const project = useAppSlector((state) => state.tmpStore.project);
  const inputRef = useRef<any>();
  const [files, setFiles] = useState<ImgFile[]>(project.imageFiles || []);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleImgChange = (e: any) => {
    const uploadedFiles = e.target.files;
    const newFiles = Array.from(uploadedFiles);

    newFiles.map(async (file: any) => {
      const compressedBase64 = await Utiles.compressImage(file);
      const newFile = {
        type: file.type,
        size: file.size.toString(),
        base64: compressedBase64 as string,
        ext: file.type.split("/")[1],
        name: file.name,
      };

      setFiles((prevFiles) => [...prevFiles, newFile]);
    });
  };

  return (
    <Stack>
      <Text
        w={"100%"}
        fontSize="xl"
        color={"gray.700"}
        fontWeight="bold"
        mb={6}
        pl={6}
      >
        Create a New Project - upload project images
      </Text>

      <VStack h={"100%"} w={"100%"} pb={4}>
        <FormControl
          isRequired={false}
          h={"100%"}
          w={{ base: "100%", lg: "80%" }}
        >
          <Text mb={4}>Upload Project Images (limits to 6 images):</Text>
          <Stack
            p={{ base: 2, md: 4, lg: 8 }}
            color="gray.400"
            border="1px solid"
            borderColor={"gray.200"}
            borderRadius="15px"
            h={"450px"}
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
              onDragOver={(e: React.DragEvent<HTMLDivElement>) => {
                e.preventDefault();
                setIsDragOver(true);
              }}
              onDragLeave={() => {
                setIsDragOver(false);
              }}
              //   onDrop={handleDrop}
            >
              <Stack textAlign={"center"} padding={4} w={"full"} h={"full"}>
                <HStack wrap={"wrap"} gap={4}>
                  {files?.map((file, index) => (
                    <HStack key={index}>
                      <Image
                        maxH={"50px"}
                        src={file.base64}
                        alt={"project cover image"}
                      />
                      <Text>{file.name}</Text>
                      <HStack justify={"center"}>
                        <DeleteIcon
                          _hover={{ cursor: "pointer" }}
                          onClick={() => {
                            setFiles(files.filter((_, i) => i !== index));
                          }}
                        />
                      </HStack>
                    </HStack>
                  ))}
                </HStack>
                <Stack>
                  {/* <Text textStyle={"context"} color="gray.400">
                    Drag & drop any image file here
                  </Text> */}
                  <Text textStyle={"context"} color="gray.400">
                    to
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
                </Stack>
              </Stack>
            </Flex>

            <Input
              type="file"
              onChange={handleImgChange}
              ref={inputRef}
              display="none"
              multiple
            />
          </Stack>
        </FormControl>

        <Flex justify="start" mx={10} mb={10} gap={4}>
          <Button
            color={"white"}
            bg="secondary.500"
            border="1px solid gray.200"
            cursor="pointer"
            transition={"all .3s ease"}
            _hover={{
              bg: "secondary.600",
            }}
            leftIcon={<ChevronLeftIcon />}
            size={"sm"}
            fontSize={"12px"}
            fontWeight={"400"}
            onClick={() => {
              setStep(step - 1);
              setProgress(25);
              // setIsLoading(true);
            }}
          >
            Back
          </Button>
          <Button
            color={"white"}
            bg="secondary.500"
            border="1px solid gray.200"
            cursor="pointer"
            transition={"all .3s ease"}
            _hover={{
              bg: "secondary.600",
            }}
            rightIcon={<ChevronRightIcon />}
            size={"sm"}
            fontSize={"12px"}
            fontWeight={"400"}
            onClick={() => {
              dispatch(
                tmpStoreAction.setState((state) => {
                  state.project.imageFiles = files;
                  return state;
                })
              );
              setStep(step + 1);
              setProgress(75);
            }}
          >
            Next
          </Button>
        </Flex>
      </VStack>
    </Stack>
  );
}

export default UploadMediaForm;
