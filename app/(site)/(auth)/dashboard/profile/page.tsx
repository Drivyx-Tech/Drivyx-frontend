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
  useToast,
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

function Profile() {
  const dispatch = useAppDispatch();
  const user = useAppSlector((state) => state.tmpStore.user);
  const company = useAppSlector((state) => state.tmpStore.company);
  const [isReadOnly, setIsReadOnly] = React.useState(true);
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
    },
    onSubmit: async (values) => {
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

          setIsReadOnly(true);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Flex direction="column" mx={12}>
      <form onSubmit={formik.handleSubmit}>
        <Card
          boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
          border="2px solid"
          borderColor={"white"}
          px="16px"
          mb={4}
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
                Contact Profile
              </Text>
              <Grid templateColumns="repeat(2, 1fr)" gap={6} w={"100%"}>
                <Flex align="center" mb="18px">
                  <Text
                    fontSize="md"
                    color={"gray.700"}
                    fontWeight="bold"
                    me="10px"
                    w={"150px"}
                    flex={"1"}
                  >
                    First Name:
                  </Text>
                  <Input
                    isReadOnly={true}
                    variant="unsyled"
                    placeholder="first name"
                    flex={"2"}
                    value={user?.given_name || ""}
                  />
                </Flex>
                <Flex align="center" mb="18px">
                  <Text
                    fontSize="md"
                    color={"gray.700"}
                    fontWeight="bold"
                    me="10px"
                    flex={"1"}
                  >
                    Last Name:{" "}
                  </Text>
                  <Input
                    isReadOnly={true}
                    variant="unsyled"
                    placeholder="last name"
                    flex={"2"}
                    value={user?.family_name || ""}
                  />
                </Flex>
              </Grid>
            </VStack>

            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color={"gray.700"}
                  fontWeight="bold"
                  me="10px"
                  flex={"1"}
                >
                  Email:{" "}
                </Text>
                <Input
                  isReadOnly={true}
                  id="email"
                  name="email"
                  type="email"
                  variant="unsyled"
                  placeholder="your email"
                  flex={"2"}
                  value={user?.email || ""}
                />
              </Flex>
            </Grid>
          </CardBody>
        </Card>

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
                Company Information
              </Text>
              <Grid templateColumns="repeat(2, 1fr)" gap={6} w={"100%"}>
                <CustomInput
                  id="company_name"
                  title="Company name:"
                  placeholder={company?.company_name || "Company name"}
                  isReadOnly={isReadOnly}
                  onChange={formik.handleChange}
                  value={formik.values.company_name}
                />

                <VStack spacing={5} mb="18px">
                  <FormControl isRequired={true}>
                    <FormLabel>Contact Number</FormLabel>

                    <Input
                      isReadOnly={isReadOnly}
                      id="contact_number"
                      name="contact_number"
                      type="tel"
                      // variant={isReadOnly ? "unstyled" : "filled"}
                      focusBorderColor={isReadOnly ? "gray.300" : "blue.500"}
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
                title="Industry:"
                placeholder="---"
                isReadOnly={isReadOnly}
                onChange={formik.handleChange}
                value={formik.values.industry}
                optionItems={INDUSTRY_ITEMS}
              />
              <CustomSelection
                id="company_size"
                title="Company size:"
                placeholder="---"
                isReadOnly={isReadOnly}
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
                isReadOnly={isReadOnly}
                onChange={formik.handleChange}
                value={formik.values.annual_revenue}
                optionItems={ANNUAL_REVENUE}
              />

              <CustomInput
                id="website_url"
                title="Website:"
                placeholder="website address"
                isReadOnly={isReadOnly}
                onChange={formik.handleChange}
                value={formik.values.website_url}
                style={{ flex: "5.5" }}
              />
            </Grid>
            <CustomInput
              id="location"
              title="Location:"
              placeholder="location"
              isReadOnly={isReadOnly}
              onChange={formik.handleChange}
              value={formik.values.location}
              style={{ flex: "5.5" }}
            />

            <CustomTextarea
              id="description"
              title="Description:"
              placeholder="Description of your company"
              onChange={formik.handleChange}
              value={formik.values.description}
              isReadOnly={isReadOnly}
            />
          </CardBody>

          <Checkbox px="16px" mb={4} size="md" colorScheme="blue" isRequired>
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

        <Flex
          direction={{ sm: "column", lg: "row" }}
          w={{ sm: "100%", md: "50%", lg: "auto" }}
          h={"100px"}
          justify="center"
          alignItems="center"
          gap={12}
          mb={12}
        >
          <Button
            onClick={() => setIsReadOnly(false)}
            display={isReadOnly ? "block" : "none"}
            w={{ sm: "100%", lg: "135px" }}
            color={"white"}
            bg="secondary.500"
            borderRadius="15px"
            py="10px"
            boxShadow="xl"
            border="1px solid gray.200"
            cursor="pointer"
            transition={"all .3s ease"}
            _hover={{
              bg: "secondary.600",
              boxShadow: "md",
            }}
            leftIcon={<FaRegEdit />}
          >
            Edit
          </Button>

          <Button
            type="submit"
            onClick={() => setIsReadOnly(false)}
            display={isReadOnly ? "none" : "block"}
            w={{ sm: "100%", lg: "135px" }}
            color={"white"}
            bg="secondary.500"
            borderRadius="15px"
            py="10px"
            boxShadow="xl"
            border="1px solid gray.200"
            cursor="pointer"
            transition={"all .3s ease"}
            _hover={{
              bg: "secondary.600",
              boxShadow: "md",
            }}
            leftIcon={<FaRegEdit />}
          >
            Save
          </Button>
        </Flex>
      </form>
    </Flex>
  );
}

export default Profile;
