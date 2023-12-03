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
import { useRouter } from "next/navigation";
import UploadImageCard from "@/ui/Cards/UploadImageCard";

function ProjectForm() {
  const router = useRouter();
  const toast = useToast();
  const [selections, setSelections] = useState({
    category_id: "",
    subCategory_id: "",
    tag_ids: [],
  });

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

      router.push("/dashboard");
    },
  });

  return (
    <Flex direction="column" mx={12}>
      <form onSubmit={formik.handleSubmit}>
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
            Send
          </Button>
        </Flex>

        <Card
          boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
          border="2px solid"
          borderColor={"white"}
          px="16px"
          mb={4}
        >
          <Text
            w={"100%"}
            fontSize="xl"
            color={"gray.700"}
            fontWeight="bold"
            mb={6}
            pl={6}
          >
            Create a New Project
          </Text>
          <CardBody>
            <Grid templateColumns="repeat(2, 1fr)" gap={6} w={"100%"}>
              <Grid templateRows="repeat(1, 1fr)" w={"100%"}>
                <CustomInput
                  id="project_name"
                  title="Project name:"
                  placeholder="company name"
                  onChange={formik.handleChange}
                  value={formik.values.project_name}
                />

                <CustomMultipleDropdown
                  selections={selections}
                  setSelections={setSelections}
                />
              </Grid>

              <UploadImageCard />
            </Grid>

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
      </form>
    </Flex>
  );
}

export default ProjectForm;
