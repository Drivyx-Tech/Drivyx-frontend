"use client";

import React from "react";
import {
  Button,
  Card,
  CardBody,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Text,
  VStack,
  HStack,
  Stack,
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
import { createCompany, updateIcon } from "@/services/endpoints/company";
import { useAppDispatch, useAppSlector } from "@/services/redux/hooks";
import { tmpStoreAction } from "@/services/redux/tmpStore.reducer";
import CustomInput from "@/ui/Form/CustomInput";
import CustomSelection from "@/ui/Form/CustomSelection";
import { INDUSTRY_ITEMS } from "@/constants/INDUSTRY_ITEMS";
import { COMPANY_SIZE } from "@/constants/COMPANY_SIZE";
import { ANNUAL_REVENUE } from "@/constants/ANNUAL_REVENUE";
import CustomTextarea from "@/ui/Form/CustomTextarea";
import { FaRegEdit } from "react-icons/fa";
import TermsAndPrivacyCheckbox from "@/components/TermsAndPrivacyCheckbox";
import { CompanyIconUpload } from "@/components/dashboard/uploadFile/CompanyIconUpload";

function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const company = useAppSlector((state) => state.tmpStore.user.company);
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
      companyImgFile: {
        name: "",
        type: "",
        size: "",
        base64: "",
        ext: "",
      },
    },
    onSubmit: async (values) => {
      const payload = {
        company_name: values.company_name,
        industry: values.industry,
        contact_number: values.contact_number,
        company_size: values.company_size,
        annual_revenue: values.annual_revenue,
        website_url: values.website_url,
        location: values.location,
        description: values.description,
        company_profile_url: company?.company_profile_url,
      };

      try {
        const res = await updateIcon({
          iconFile: formik.values.companyImgFile,
        });

        payload.company_profile_url = res.detail.company_profile_url;

        const companyUpdated = await createCompany(payload);

        if (companyUpdated.result.statusCode === 200) {
          toast({
            title: "Update account",
            description: "Organization information updated successfully",
          });
        } else {
          toast({
            title: "Error",
            description: "Error in account update.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }

        const {
          company_name,
          industry,
          contact_number,
          company_size,
          annual_revenue,
          website_url,
          location,
          description,
          company_profile_url,
        } = companyUpdated.result.detail;
        dispatch(
          tmpStoreAction.setState((state) => {
            state.user.company.company_name = company_name;
            state.user.company.industry = industry;
            state.user.company.contact_number = contact_number;
            state.user.company.company_size = company_size;
            state.user.company.annual_revenue = annual_revenue;
            state.user.company.website_url = website_url;
            state.user.company.location = location;
            state.user.company.description = description;
            state.user.company.company_profile_url =
              company_profile_url + "?" + Date.now().toString();
            return state;
          })
        );
        onClose();
      } catch (error) {
        toast({
          title: "Error",
          description: "Error in account update.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    },
  });

  return (
    <Flex
      direction="column"
      mx={12}
      h={"full"}
      w={"full"}
      justify={"center"}
      align={"center"}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onOpen();
        }}
      >
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
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
                isLoading={formik.isSubmitting}
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

        <Card
          boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
          border="2px solid"
          borderColor={"white"}
          h={"100%"}
          w={"100%"}
          justifyContent="center"
          justify={"center"}
          pt={16}
          pb={8}
          px={20}
        >
          <CardBody p={0} w={"4xl"}>
            <Stack mb={8}>
              <CompanyIconUpload
                companyImgFile={formik.values.companyImgFile}
                setCompanyImgFile={(newCompanyImg) =>
                  formik.setFieldValue("companyImgFile", newCompanyImg)
                }
              />
            </Stack>

            <Grid templateColumns="repeat(2, 1fr)" gap={24} w={"100%"}>
              <CustomInput
                id="company_name"
                title="Organization name:"
                placeholder={"Organization name"}
                onChange={formik.handleChange}
                value={formik.values.company_name}
              />

              <VStack spacing={5} mb="18px">
                <FormControl isRequired={true}>
                  <FormLabel>Contact number</FormLabel>

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

            <Grid templateColumns="repeat(2, 1fr)" gap={24}>
              <CustomSelection
                id="industry"
                title="Type of organization:"
                placeholder="---"
                onChange={formik.handleChange}
                value={formik.values.industry}
                optionItems={INDUSTRY_ITEMS}
              />
              <CustomSelection
                id="company_size"
                title="Organization size:"
                placeholder="Select number of employees"
                onChange={formik.handleChange}
                value={formik.values.company_size}
                optionItems={COMPANY_SIZE}
              />
            </Grid>

            <Grid templateColumns="repeat(2, 1fr)" gap={24}>
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
              placeholder="A short description of what your company does"
              onChange={formik.handleChange}
              value={formik.values.description}
            />

            <TermsAndPrivacyCheckbox isChecked={true} />
          </CardBody>

          <HStack w={"full"} justify={"flex-end"}>
            <Button
              type="submit"
              bg={"tertiary.300"}
              _hover={{
                bg: "tertiary.500",
              }}
              color={"secondary.800"}
              cursor="pointer"
              rounded={"reset"}
              transition={"all .3s ease"}
              leftIcon={<FaRegEdit />}
              size={"sm"}
              fontSize={"12px"}
              fontWeight={"600"}
              mt={4}
              h={"28px"}
            >
              Save
            </Button>
          </HStack>
        </Card>
      </form>
    </Flex>
  );
}

export default Profile;
