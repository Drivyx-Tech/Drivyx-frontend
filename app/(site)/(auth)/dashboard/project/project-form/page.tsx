"use client";

import {
  Button,
  Card,
  CardBody,
  Flex,
  Grid,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useFormik } from "formik";
import CustomInput from "@/ui/Form/CustomInput";
import CustomMultipleDropdown, {
  SelectionsProps,
} from "@/ui/Form/CustomMultipleDropdown";
import CustomTextarea from "@/ui/Form/CustomTextarea";
import { createProject } from "@/services/endpoints/project";

function ProjectForm() {
  const toast = useToast();
  const [selections, setSelections] = useState({
    category_id: "",
    subCategory_id: "",
    tag_ids: [],
  });
  // console.log("get selections:", selections);

  const formik = useFormik({
    initialValues: {
      project_name: "",
      funding_goal: "",
      excerpt: "",
      project_goal: "",
      desc: "",
      outcome: "",
      contributions: "",
    },
    onSubmit: async (values) => {
      const data = {
        ...selections,
        project: { ...values },
      };

      const res = await createProject(data);
      console.log("if new project susccessful", res);
      if (res.result.statusCode !== 200)
        return console.log("error in create project");

      // TODO: need handle error

      toast({
        title: "Project is sending for review.",
        description: "Project is sending for review.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
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

            <CustomMultipleDropdown
              selections={selections}
              setSelections={setSelections}
            />

            <CustomTextarea
              id="funding_goal"
              title="Funding goals:"
              placeholder=" Clearly outline the funding goals for your project."
              onChange={formik.handleChange}
              value={formik.values.funding_goal}
            />

            <Grid templateColumns="repeat(2, 1fr)" gap={6}></Grid>

            <CustomTextarea
              id="excerpt"
              title="Excerpt:"
              placeholder="Short summary of the project"
              onChange={formik.handleChange}
              value={formik.values.excerpt}
            />
            <CustomTextarea
              id="project_goal"
              title="Project goals:"
              placeholder="Describe goals of the project"
              onChange={formik.handleChange}
              value={formik.values.project_goal}
            />
            <CustomTextarea
              id="desc"
              title="Description:"
              placeholder="Description of the project"
              onChange={formik.handleChange}
              value={formik.values.desc}
            />
            <CustomTextarea
              id="outcome"
              title="Expected outcomes:"
              placeholder="Expected outcomes of the project"
              onChange={formik.handleChange}
              value={formik.values.outcome}
            />
            <CustomTextarea
              id="contributions"
              title="Contributions:"
              placeholder="Specify how contributions will be utilized to drive sustainability."
              onChange={formik.handleChange}
              value={formik.values.contributions}
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
            Send
          </Button>
        </Flex>
      </form>
    </Flex>
  );
}

export default ProjectForm;
