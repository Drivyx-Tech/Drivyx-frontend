import React, { useState } from "react";
import {
  Avatar,
  Button,
  Divider,
  Flex,
  HStack,
  Text,
  VStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSlector } from "@/services/redux/hooks";
import { MdEmail } from "react-icons/md";
import CardContainer from "@/ui/Cards/CardContainer";
import UserPhotoUpload from "../uploadFile/UserPhotoUpload";
import CustomInput from "@/ui/Form/CustomInput";
import { useFormik } from "formik";
import { updateUser, updateUserIcon } from "@/services/endpoints/user";
import { tmpStoreAction } from "@/services/redux/tmpStore.reducer";
import { ImgFile } from "@/services/endpoints/type";

function UserProfileCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const user = useAppSlector((state) => state.tmpStore.user);
  const toast = useToast();
  const [userImagFile, setUserImagFile] = useState<ImgFile>({
    name: "",
    type: "",
    size: "",
    base64: "",
    ext: "",
  });

  const formik = useFormik({
    initialValues: {
      given_name: user.given_name,
      family_name: user.family_name,
      job_title: user.job_title,
      email: user.email,
      profile_url: user?.profile_url,
    },
    onSubmit: async (values) => {
      const payload = {
        given_name: values.given_name,
        family_name: values.family_name,
        job_title: values.job_title,
        profile_url: user?.profile_url,
      };

      try {
        const res = await updateUserIcon({
          file: userImagFile,
        });

        if (res.statusCode !== 200) return;

        payload.profile_url = res.detail.profile_url;
        const userUpdatedRes = await updateUser(payload);

        if (userUpdatedRes.result.statusCode !== 200) return;

        console.log(userUpdatedRes);

        const { given_name, family_name, job_title, profile_url } =
          userUpdatedRes.result.detail;

        dispatch(
          tmpStoreAction.setState((state) => {
            state.user.given_name = given_name;
            state.user.family_name = family_name;
            state.user.job_title = job_title;
            state.user.profile_url = profile_url;
            return state;
          })
        );

        onClose();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <CardContainer>
      <Avatar
        src={
          process.env.NEXT_PUBLIC_S3_USER_BUCKET + user?.profile_url ||
          "https://bit.ly/broken-link"
        }
        w="80px"
        h="80px"
        borderRadius={5}
        overflow={"hidden"}
        rounded={"full"}
      />
      <VStack justify={"center"} w={"full"} align="left">
        <HStack align={"flex-end"}>
          <Text fontSize={"md"} fontWeight={"bold"} textColor={"secondary.800"}>
            {user?.given_name + " " + user?.family_name}
          </Text>
          <Text fontSize={"sm"} color={"gray.500"}>
            {user?.job_title || ""}
          </Text>
        </HStack>

        <HStack gap={1}>
          <Flex align={"center"} gap={1} color={"gray.500"}>
            <MdEmail />
          </Flex>
          <Text fontSize={"sm"} color={"gray.500"}>
            {user?.email}
          </Text>
        </HStack>

        <Text
          fontSize={"sm"}
          cursor={"pointer"}
          textDecoration={"underline"}
          onClick={onOpen}
        >
          Edit profile
        </Text>
      </VStack>

      <Modal
        blockScrollOnMount={false}
        size={"xl"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User profile</ModalHeader>
          <ModalCloseButton />
          <Divider mb={6} />
          <ModalBody>
            <UserPhotoUpload
              userImagFile={userImagFile}
              setUserImagFile={setUserImagFile}
            />
            <Divider my={8} />
            <HStack w={"full"} gap={4}>
              <CustomInput
                id="given_name"
                title="First name:"
                placeholder={"First name"}
                onChange={formik.handleChange}
                value={formik.values.given_name}
              />
              <CustomInput
                id="family_name"
                title="Last name:"
                placeholder={"Last name"}
                onChange={formik.handleChange}
                value={formik.values.family_name}
              />
            </HStack>

            <CustomInput
              id="email"
              title="Email:"
              placeholder={"User email"}
              onChange={() => {}}
              isReadOnly={true}
              value={formik.values.email}
              isRequired={false}
            />
            <CustomInput
              id="job_title"
              title="Job title:"
              placeholder={"For example: Project Manager at Drivyx"}
              onChange={formik.handleChange}
              value={formik.values.job_title}
              isRequired={false}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={formik.isSubmitting}
              colorScheme="blue"
              mr={3}
              onClick={() => formik.handleSubmit()}
            >
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </CardContainer>
  );
}

export default UserProfileCard;
