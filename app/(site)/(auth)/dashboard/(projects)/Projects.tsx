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
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useFormik } from "formik";
import CustomInput from "@/ui/Form/CustomInput";
import CustomSelection from "@/ui/Form/CustomSelection";
import { INDUSTRY_ITEMS } from "@/constants/INDUSTRY_ITEMS";
import { Category } from "@/services/endpoints/type";
import { getCategories } from "@/services/endpoints/category";
import CustomMultipleDropdown from "@/ui/Form/CustomMultipleDropdown";
import CustomTextarea from "@/ui/Form/CustomTextarea";

function Projects() {
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      project_name: "",
      category_name: "",
      subCategory_name: "",
      tags: [],
      excerpt: "",
      description: "",
      goals: "",
      expected_outcomes: "",
      funding_goals: "",
      contributions: "",
    },
    onSubmit: async (values) => {
      // const res = await updateCompany(values);

      // // TODO: need handle error

      // dispatch(
      //   tmpStoreAction.setState((state) => {
      //     state.company = res.result.detail;

      //     return state;
      //   })
      // );

      toast({
        title: "Project is sending for review.",
        description: "Project is sending for review.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // setIsReadOnly(true);
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
                Create a New Project
              </Text>
              <Grid templateColumns="repeat(2, 1fr)" gap={6} w={"100%"}>
                <CustomInput
                  id="project_name"
                  title="Project name:"
                  placeholder="company name"
                  onChange={formik.handleChange}
                  value={formik.values.project_name}
                />
              </Grid>
            </VStack>

            <CustomMultipleDropdown />

            <CustomTextarea
              id="funding_goals"
              title="Funding goals:"
              placeholder=" Clearly outline the funding goals for your project."
              onChange={formik.handleChange}
              value={formik.values.funding_goals}
            />

            <Grid templateColumns="repeat(2, 1fr)" gap={6}></Grid>

            <CustomTextarea
              id="excerpt"
              title="Excerpt:"
              placeholder="Short summary of the project"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
            <CustomTextarea
              id="goals"
              title="Project goals:"
              placeholder="Describe goals of the project"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
            <CustomTextarea
              id="description"
              title="Description:"
              placeholder="Description of the project"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
            <CustomTextarea
              id="expected_outcomes"
              title="Expected outcomes:"
              placeholder="Expected outcomes of the project"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
            <CustomTextarea
              id="contributions"
              title="Contributions:"
              placeholder="Specify how contributions will be utilized to drive sustainability."
              onChange={formik.handleChange}
              value={formik.values.description}
            />
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
          <Button
            w={{ sm: "100%", lg: "135px" }}
            bg="primary.500"
            borderRadius="15px"
            py="10px"
            boxShadow="xl"
            border="1px solid gray.200"
            cursor="pointer"
            transition={"all .3s ease"}
            _hover={{
              bg: "primary.600",
              boxShadow: "md",
            }}
            leftIcon={<FaRegEdit />}
          >
            Edit
          </Button>

          <Button
            type="submit"
            w={{ sm: "100%", lg: "135px" }}
            bg="primary.500"
            borderRadius="15px"
            py="10px"
            boxShadow="xl"
            border="1px solid gray.200"
            cursor="pointer"
            transition={"all .3s ease"}
            _hover={{
              bg: "primary.600",
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

export default Projects;
