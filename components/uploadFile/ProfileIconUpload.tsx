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
  useDisclosure,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import { useAppDispatch, useAppSlector } from "@/services/redux/hooks";
import { tmpStoreAction } from "@/services/redux/tmpStore.reducer";
import { EditIcon } from "@chakra-ui/icons";
import { Utiles } from "@/services/utils";

export function ProfileIconUpload() {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const company = useAppSlector((state) => state.tmpStore.company);
  const inputRef = useRef<any>();
  const cropRef = useRef<any>();
  const [slideValue, setSlideValue] = useState(10);
  const [base64Value, setBase64Value] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const profileUrl =
    process.env.NEXT_PUBLIC_S3_USER_BUCKET +
    `${company.company_profile_url}?timestamp=${Date.now()}`;

  // handle Change
  const handleImgChange = async (e: any) => {
    const file = e.target.files;
    const base64 = await Utiles.getBase64(file[0]);
    setBase64Value(base64 as string);

    onOpen();
  };

  const handleOnSave = async () => {
    try {
      const dataUrl = cropRef.current.getImage().toDataURL();
      const result = await fetch(dataUrl);
      const blob = await result.blob();

      const croped = {
        name: "iconFile",
        type: blob.type,
        size: blob.size.toString(),
        base64: dataUrl,
        ext: blob.type.split("/")[1],
      };

      const res = await updateIcon({
        iconFile: croped,
      });

      if (res.statusCode === 200) {
        dispatch(
          tmpStoreAction.setState((state) => {
            state.company.company_profile_url = res.detail.company_profile_url;
            return state;
          })
        );

        toast({
          title: "update profile icon successfully.",
          description: "",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        onClose();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Flex>
      <Flex w={"fit-content"} position={"relative"} h={"80px"}>
        <Avatar src={profileUrl} w="80px" h="80px" borderRadius="full" mr={6} />
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
        <Input
          type="file"
          onChange={handleImgChange}
          ref={inputRef}
          display="none"
        />
      </Flex>

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
                  image={base64Value || " "}
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
                cursor="pointer"
                color={"white"}
                transition={"all .3s ease"}
                _hover={{}}
                size={"sm"}
                fontSize={"12px"}
                fontWeight={"400"}
                onClick={handleOnSave}
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
