import React, { useRef } from "react";
import { Avatar, Button, Text, Input, HStack, VStack } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { Utiles } from "@/services/utils";
import { ImgFile } from "@/services/endpoints/type";

type Props = {
  userImagFile: ImgFile;
  setUserImagFile: React.Dispatch<React.SetStateAction<ImgFile>>;
};

function UserPhotoUpload({ userImagFile, setUserImagFile }: Props) {
  const inputRef = useRef<any>();

  const handleImgChange = async (e: any) => {
    const file = e.target.files;
    const base64 = await Utiles.getBase64(file[0]);

    setUserImagFile({
      type: file[0].type,
      size: file[0].size.toString(),
      base64: base64 as string,
      ext: file[0].type.split("/")[1],
      name: file[0].name,
    });
  };

  return (
    <HStack w={"fit-content"} justify={"center"} align={"center"}>
      <Avatar
        src={userImagFile.base64}
        w="80px"
        h="80px"
        borderRadius={5}
        overflow={"hidden"}
        rounded={"full"}
      />

      <VStack align={"left"}>
        <Text>Upload your profile photo</Text>
        <Text fontSize={"12px"} color={"gray.500"}>
          Image should be in JPG, PNG or SVG format and not larger than 5MB
        </Text>
        <Button
          w="fit-content"
          leftIcon={<EditIcon />}
          size={"xs"}
          onClick={(e) => {
            e.preventDefault();
            inputRef.current.click();
          }}
        >
          Select file
        </Button>
      </VStack>

      <Input
        type="file"
        onChange={handleImgChange}
        ref={inputRef}
        display="none"
      />
    </HStack>
  );
}

export default UserPhotoUpload;
