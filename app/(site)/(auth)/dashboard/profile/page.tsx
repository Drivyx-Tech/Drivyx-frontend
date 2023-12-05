"use client";

import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Link,
  Text,
  VStack,
  useDisclosure,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { createCompany } from "@/services/endpoints/company";
import { useAppDispatch, useAppSlector } from "@/services/redux/hooks";
import { tmpStoreAction } from "@/services/redux/tmpStore.reducer";
import CustomInput from "@/ui/Form/CustomInput";
import CustomSelection from "@/ui/Form/CustomSelection";
import { INDUSTRY_ITEMS } from "@/constants/INDUSTRY_ITEMS";
import { COMPANY_SIZE } from "@/constants/COMPANY_SIZE";
import { ANNUAL_REVENUE } from "@/constants/ANNUAL_REVENUE";
import CustomTextarea from "@/ui/Form/CustomTextarea";
import { FaRegEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";

function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSlector((state) => state.tmpStore.user);
  const company = useAppSlector((state) => state.tmpStore.company);
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      company_name: company?.company_name,
      industry: company?.industry,
      contact_number: company?.contact_number,
      company_size: company?.company_size,
      annual_revenue: company?.annual_revenue,
      website_url: company?.website_url,
      location: company?.location,
      description: company?.description,
      company_profile_url: company?.company_profile_url,
    },
    onSubmit: async (values) => {
      onClose();
      try {
        const res = await createCompany(values);
        if (res.result.statusCode === 200) {
          dispatch(
            tmpStoreAction.setState((state) => {
              state.company = res.result.detail;

              return state;
            })
          );

          toast({
            title: "Account updated.",
            description: res.result.message,
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  // const handle

  return (
    <Flex direction="column" mx={12}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onOpen();
        }}
      >
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Save Changes</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Do you want to save those changes?</Text>
            </ModalBody>

            <ModalFooter>
              <Button
                variant="ghost"
                mr={3}
                onClick={() => {
                  formik.resetForm();
                  onClose();
                }}
              >
                No
              </Button>
              <Button
                colorScheme="blue"
                onClick={() => {
                  formik.handleSubmit();
                }}
              >
                Yes
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Flex
          w={{ sm: "100%", md: "50%", lg: "auto" }}
          justify="start"
          ml={10}
          mb={10}
        >
          <Button
            type="submit"
            color={"white"}
            bg="secondary.500"
            border="1px solid gray.200"
            cursor="pointer"
            transition={"all .3s ease"}
            _hover={{
              bg: "secondary.600",
            }}
            leftIcon={<FaRegEdit />}
            size={"sm"}
            fontSize={"12px"}
            fontWeight={"400"}
          >
            Save
          </Button>
        </Flex>

        <Card
          boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
          border="2px solid"
          borderColor={"white"}
          px="16px"
          mb={4}
          h={"100%"}
        >
          <CardBody>
            <VStack>
              <Text
                w={"100%"}
                fontSize="xl"
                color={"gray.700"}
                fontWeight="bold"
                mb={6}
              >
                Organization Information
              </Text>
              <Grid templateColumns="repeat(2, 1fr)" gap={6} w={"100%"}>
                <CustomInput
                  id="company_name"
                  title="Organization name:"
                  placeholder={"Organization name"}
                  onChange={formik.handleChange}
                  value={formik.values.company_name}
                />

                <VStack spacing={5} mb="18px">
                  <FormControl isRequired={true}>
                    <FormLabel>Contact Number</FormLabel>

                    <Input
                      id="contact_number"
                      name="contact_number"
                      type="tel"
                      placeholder="Phone number"
                      onChange={formik.handleChange}
                      value={formik.values.contact_number}
                      flex={"2"}
                      h={"40px"}
                      px={4}
                      isRequired
                    />
                  </FormControl>
                </VStack>
              </Grid>
            </VStack>

            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <CustomSelection
                id="industry"
                title="Profile type:"
                placeholder="---"
                onChange={formik.handleChange}
                value={formik.values.industry}
                optionItems={INDUSTRY_ITEMS}
              />
              <CustomSelection
                id="company_size"
                title="Organization size:"
                placeholder="---"
                onChange={formik.handleChange}
                value={formik.values.company_size}
                optionItems={COMPANY_SIZE}
              />
            </Grid>

            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <CustomSelection
                id="annual_revenue"
                title="Annual:"
                placeholder="---"
                onChange={formik.handleChange}
                value={formik.values.annual_revenue}
                optionItems={ANNUAL_REVENUE}
              />

              <CustomInput
                id="website_url"
                title="Website:"
                placeholder="website address"
                onChange={formik.handleChange}
                value={formik.values.website_url}
                style={{ flex: "5.5" }}
              />
            </Grid>
            <CustomInput
              id="location"
              title="Location:"
              placeholder="location"
              onChange={formik.handleChange}
              value={formik.values.location}
              style={{ flex: "5.5" }}
            />

            <CustomTextarea
              id="description"
              title="Organization description:"
              placeholder="Description of your organization"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </CardBody>

          <Checkbox
            px="16px"
            mb={4}
            size="md"
            colorScheme="blue"
            isRequired
            defaultChecked={true}
          >
            agree to the{" "}
            <Link
              fontWeight={"bold"}
              color={"secondary.600"}
              href={"/terms-and-conditions"}
              target="_blank"
            >
              terms and conditions
            </Link>
          </Checkbox>
        </Card>
      </form>
    </Flex>
  );
}

export default Profile;
