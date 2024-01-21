import { updateIcon } from "@/services/endpoints/company";
import {
  Avatar,
  Button,
  Flex,
  Text,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
  Image,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Input,
  useToast,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import { useAppDispatch, useAppSlector } from "@/services/redux/hooks";
import { tmpStoreAction } from "@/services/redux/tmpStore.reducer";
import { EditIcon } from "@chakra-ui/icons";
import { Utiles } from "@/services/utils";
import Organization from "@/ui/SVG/Organization";

export function CompanyIconUpload() {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const company = useAppSlector((state) => state.tmpStore.user?.company);
  const inputRef = useRef<any>();
  const cropRef = useRef<any>();
  const [slideValue, setSlideValue] = useState(10);
  const [base64Value, setBase64Value] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const profileUrl =
    process.env.NEXT_PUBLIC_S3_USER_BUCKET + `${company?.company_profile_url}`;

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
            state.user.company.company_profile_url =
              res.detail.company_profile_url;
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
    } finally {
      // refresh e.target.file if i select the same file
      inputRef.current.value = "";

      setBase64Value("");
      // clean cache of profile icon
      const cacheBuster = Date.now().toString();
      dispatch(
        tmpStoreAction.setState((state) => {
          state.user.company.company_profile_url =
            state.user.company.company_profile_url + "?" + cacheBuster;
          return state;
        })
      );
    }
  };

  return (
    <Flex>
      <HStack w={"fit-content"} justify={"center"} align={"center"}>
        <Avatar
          src={profileUrl}
          icon={<Organization style={{ width: 60, height: 60 }} />}
          w="100px"
          h="100px"
          borderRadius={5}
          bgColor={"#e9e9e9"}
          overflow={"hidden"}
        />

        <VStack align={"left"}>
          <Text>Upload organization logo</Text>
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
            // bgColor={"secondary.900"}
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
                // bg="transparent"
                // cursor="pointer"
                // color={"white"}
                transition={"all .3s ease"}
                // _hover={{}}
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
                // bg="transparent"
                // cursor="pointer"
                // color={"white"}
                // transition={"all .3s ease"}
                // _hover={{}}
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
