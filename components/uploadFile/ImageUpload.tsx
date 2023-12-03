import { updateIcon } from "@/services/endpoints/company";
import { IconFile } from "@/services/endpoints/type";
import { Avatar, Button, Flex, Image, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import defaultAvatar from "public/svg/person-circle-auth.svg";
import { EditIcon } from "@chakra-ui/icons";
import Router from "next/router";
import { useRouter } from "next/navigation";

export function ImageUpload() {
  const router = useRouter();
  const inputRef = useRef<any>();
  const [iconFile, setIconFile] = useState<IconFile>();
  const [imagePreview, setImagePreview] = useState("");

  console.log("iconFile---->", iconFile);

  const getBase64 = (file: any) => {
    const base = new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      console.log("reader", reader);

      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

    return base;
  };

  const handleSelectImage = async (e: any) => {
    const file = e.target.files;
    console.log("file", file[0]);

    const base64 = await getBase64(file[0]);

    setIconFile({
      name: file[0].name,
      type: file[0].type,
      size: file[0].size.toString(),
      base64: base64 as string,
      ext: file[0].type.split("/")[1],
    });

    console.log("the whole icon file:", iconFile);
  };

  const handleUpload = async () => {
    try {
      if (!iconFile) return;
      const res = await updateIcon({
        iconFile: iconFile,
      });

      console.log("res", res);
    } catch (error) {}
  };

  return (
    <Flex>
      <Flex w={"fit-content"} position={"relative"} h={"80px"}>
        <Avatar
          src={
            `https://drixyv-users.s3.ap-southeast-2.amazonaws.com/65b82c33-7c29-4e0c-90ab-dbfec8d4f2f3/company/profile.png` ||
            defaultAvatar.src
          }
          w="80px"
          h="80px"
          borderRadius="full"
          mr={6}
        />
        <Flex
          _hover={{ cursor: "pointer" }}
          position={"absolute"}
          bottom={0}
          right={"20px"}
          bg={"white"}
          p={1}
          w={"fit-content"}
          h={"fit-content"}
          borderRadius="full"
          border={`1px solid black`}
        >
          <EditIcon
            w={"15px"}
            h={"15px"}
            onClick={(e) => {
              e.preventDefault();
              inputRef.current.click();
            }}
          />
        </Flex>
      </Flex>

      <Input
        type="file"
        ref={inputRef}
        onChange={handleSelectImage}
        display="none"
      />
    </Flex>
  );
}
