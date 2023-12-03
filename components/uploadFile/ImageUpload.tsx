import { updateIcon } from "@/services/endpoints/company";
import { IconFile } from "@/services/endpoints/type";
import {
  Avatar,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  VStack,
  useDisclosure,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Input,
  Icon,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";

export function ImageUpload() {
  const cropRef = useRef<any>();
  const inputRef = useRef<any>();
  const [slideValue, setSlideValue] = useState(10);
  const [iconFile, setIconFile] = useState<IconFile>();
  const [imagePreview, setImagePreview] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      {/* <Button onClick={handleUpload}>upload</Button>
      <Flex>
        <Image
          src={imagePreview}
          alt={`Preview`}
          style={{ width: "200px", height: "auto" }}
        />
      </Flex> */}
      <input type="file" onChange={handleSelectImage} />

      <>
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          closeOnOverlayClick={false}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent
            width={"fit-content"}
            h={"fit-content"}
            bgColor={"secondary.900"}
            p={2}
            pb={0}
          >
            <ModalBody p={0}>
              <Flex direction="column" align="center">
                <AvatarEditor
                  ref={cropRef}
                  image={iconFile?.base64 || " "}
                  style={{ width: "100%", height: "100%" }}
                  border={0}
                  borderRadius={150}
                  color={[0, 0, 0, 0.72]}
                  scale={slideValue / 10}
                  rotate={0}
                />
              </Flex>
              <Slider
                value={slideValue}
                aria-label="slider-ex-1"
                defaultValue={slideValue}
                onChange={(value: any) => {
                  setSlideValue(value);
                }}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </ModalBody>
            <ModalFooter justifyContent={"center"} gap={8} p={4}>
              <Button
                w={"60px"}
                h={"30px"}
                bg="transparent"
                // border="1px solid white"
                cursor="pointer"
                color={"white"}
                transition={"all .3s ease"}
                _hover={{}}
                size={"sm"}
                fontSize={"12px"}
                fontWeight={"400"}
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                w={"60px"}
                h={"30px"}
                bg="transparent"
                // border="1px solid white"
                cursor="pointer"
                color={"white"}
                transition={"all .3s ease"}
                _hover={{}}
                size={"sm"}
                fontSize={"12px"}
                fontWeight={"400"}
                // onClick={handleOnSave}
              >
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </Flex>
  );
}
