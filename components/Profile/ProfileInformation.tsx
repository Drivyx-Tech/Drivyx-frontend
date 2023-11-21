"use client";

import {
  Button,
  Card,
  CardBody,
  Flex,
  Grid,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";
import React from "react";
import { useFormik } from "formik";
import { ProfileInformationProps } from "@/app/(site)/(auth)/dashboard/profile/page";

const ProfileInformation = (props: ProfileInformationProps) => {
  const formik = useFormik({
    initialValues: {
      ...props,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
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
                  variant="filled"
                  placeholder="first name"
                  onChange={formik.handleChange}
                  value={formik.values.given_name}
                  flex={"2"}
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
                  variant="filled"
                  placeholder="last name"
                  onChange={formik.handleChange}
                  value={formik.values.family_name}
                  flex={"2"}
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
                Mobile:{" "}
              </Text>

              <Input
                isReadOnly={false}
                type="tel"
                variant={false ? "unstyled" : "filled"}
                placeholder="Phone number"
                onChange={formik.handleChange}
                value={formik.values.contact_number}
                flex={"2"}
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
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color={"gray.700"}
                  fontWeight="bold"
                  me="10px"
                  flex={"1"}
                >
                  Company Name:{" "}
                </Text>
                <Input
                  w={"100%"}
                  variant="filled"
                  placeholder="company name"
                  onChange={formik.handleChange}
                  value={formik.values.company_name}
                  flex={"2"}
                />
              </Flex>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color={"gray.700"}
                  fontWeight="bold"
                  flex={"1"}
                >
                  Industry:{" "}
                </Text>
                <Stack flex={"2"}>
                  <Select
                    variant="outline"
                    placeholder="select industry"
                    onChange={formik.handleChange}
                    value={formik.values.industry}
                  >
                    <option value="information_technology">
                      Information Technology
                    </option>
                    <option value="health_care">Health Care</option>
                    <option value="education">Education</option>
                    <option value="legal_service">Legal Service</option>
                  </Select>
                </Stack>
              </Flex>
            </Grid>
          </VStack>

          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <Flex align="center" mb="18px">
              <Text
                fontSize="md"
                color={"gray.700"}
                fontWeight="bold"
                flex={"1"}
              >
                Company Size:{" "}
              </Text>
              <Stack flex={"2"}>
                <Select
                  variant="outline"
                  placeholder="select company size"
                  onChange={formik.handleChange}
                  value={formik.values.company_size}
                >
                  <option value="2_10_small">2-10 small</option>
                  <option value="11_20_medium">11-20 medium</option>
                  <option value="21_50_large">21-50 large</option>
                  <option value="50_200">50-200</option>
                </Select>
              </Stack>
            </Flex>
            <Flex align="center" mb="18px">
              <Text
                fontSize="md"
                color={"gray.700"}
                fontWeight="bold"
                flex={"1"}
              >
                Revenue:{" "}
              </Text>
              <Stack flex={"2"}>
                <Select
                  variant="outline"
                  placeholder="select annual revenue"
                  onChange={formik.handleChange}
                  value={formik.values.annual_revenue}
                >
                  <option value="500_1000">500-1000</option>
                  <option value="option2">1000-5000</option>
                  <option value="option3">5000-10000</option>
                  <option value="option3">10000-50000</option>
                  <option value="option3">over 50000</option>
                </Select>
              </Stack>
            </Flex>
          </Grid>

          <Flex align="center" mb="18px">
            <Text
              fontSize="md"
              color={"gray.700"}
              fontWeight="bold"
              me="10px"
              flex={"1"}
            >
              Website:{" "}
            </Text>
            <Input
              type={"url"}
              variant="filled"
              placeholder="website"
              onChange={formik.handleChange}
              value={formik.values.website_url}
              flex={"5.5"}
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
              Location:{" "}
            </Text>
            <Input
              type={"address"}
              variant="filled"
              placeholder="location"
              onChange={formik.handleChange}
              value={formik.values.location}
              flex={"5.5"}
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
              Description:{" "}
            </Text>
            <Textarea
              variant="filled"
              placeholder="description of your company"
              onChange={formik.handleChange}
              value={formik.values.description}
              flex={"5.5"}
            />
          </Flex>
        </CardBody>
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
        <Button p="0px" bg="transparent" _hover={{ bg: "none" }}>
          <Flex
            align="center"
            w={{ sm: "100%", lg: "135px" }}
            bg="hsla(0,0%,100%,.3)"
            borderRadius="15px"
            justifyContent="center"
            py="10px"
            boxShadow="inset 0 0 1px 1px hsl(0deg 0% 100% / 90%), 0 20px 27px 0 rgb(0 0 0 / 5%)"
            border="1px solid gray.200"
            cursor="pointer"
          >
            <FaRegEdit />
            <Text fontSize="xs" color={"black"} fontWeight="bold" ms="6px">
              Edit
            </Text>
          </Flex>
        </Button>
        <Button p="0px" bg="transparent" _hover={{ bg: "none" }} type="submit">
          <Flex
            align="center"
            w={{ sm: "100%", lg: "135px" }}
            bg="hsla(0,0%,100%,.3)"
            borderRadius="15px"
            justifyContent="center"
            py="10px"
            boxShadow="inset 0 0 1px 1px hsl(0deg 0% 100% / 90%), 0 20px 27px 0 rgb(0 0 0 / 5%)"
            border="1px solid gray.200"
            cursor="pointer"
          >
            <FaRegEdit />
            <Text fontSize="xs" color={"black"} fontWeight="bold" ms="6px">
              Save
            </Text>
          </Flex>
        </Button>
      </Flex>
    </form>
  );
};

export default ProfileInformation;
