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
import { useEffect, useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSlector } from "@/services/redux/hooks";
import { tmpStoreAction } from "@/services/redux/tmpStore.reducer";

export function ImageUpload() {
  const dispatch = useAppDispatch();
  const company = useAppSlector((state) => state.tmpStore.company);
  const router = useRouter();
  const cropRef = useRef<any>();
  const [slideValue, setSlideValue] = useState(10);
  const [base64Value, setBase64Value] = useState("");
  const [iconFile, setIconFile] = useState<IconFile>();
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

  // handle Change
  const handleImgChange = async (e: any) => {
    const file = e.target.files;
    const base64 = await getBase64(file[0]);
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
            state.company.company_profile_icon = res.detail.company_profile_url;
            return state;
          })
        );

        onClose();
        // Reload the page after a successful upload
        router.refresh();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Flex>
      <Avatar
        src={
          `https://drixyv-users.s3.ap-southeast-2.amazonaws.com/` +
          company.company_profile_icon
        }
        w="80px"
        h="80px"
        borderRadius="full"
        mr={6}
      />
      <input type="file" onChange={handleImgChange} />

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
