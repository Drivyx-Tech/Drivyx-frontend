import { Button, Card, CardBody, Flex, Grid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import CustomInput from "@/ui/Form/CustomInput";
import CustomMultipleDropdown from "@/ui/Form/CustomMultipleDropdown";
import CustomTextarea from "@/ui/Form/CustomTextarea";
import ProjectCoverUpload from "@/components/uploadFile/ProjectCoverUpload";
import { ImgFile } from "@/services/endpoints/type";
import { IStep } from "@/app/(site)/(dashboard)/dashboard/project/page";
import { useAppDispatch, useAppSlector } from "@/services/redux/hooks";
import { tmpStoreAction } from "@/services/redux/tmpStore.reducer";

function NewProjectForm({ step, setStep, setProgress }: IStep) {
  const dispatch = useAppDispatch();
  const newProject = useAppSlector((state) => state.tmpStore.project);
  const [coverFile, setCoverFile] = useState<ImgFile>({
    base64: newProject?.coverFile?.base64 || "",
    ext: newProject?.coverFile?.ext || "",
    type: newProject?.coverFile?.type || "",
    name: "cover_image",
    size: newProject?.coverFile?.size || "",
  });
  const [selections, setSelections] = useState({
    category_id: newProject?.category_id,
    subCategory_id: newProject?.subCategory_id,
    tag_ids: newProject?.tag_ids,
  });

  const formik = useFormik({
    initialValues: {
      project_name: newProject?.project_name,
      funding_goal: newProject?.funding_goal,
      excerpt: newProject?.excerpt,
      project_goal: newProject?.project_goal,
      desc: newProject?.desc,
      outcome: newProject?.outcome,
      contributions: newProject?.contributions,
      ...selections,
      imageFiles: newProject?.imageFiles,
    },

    onSubmit: (values) => {
      const data = {
        ...selections,
        ...values,
        coverFile,
      };
      console.log(values);
      dispatch(
        tmpStoreAction.setState((state) => {
          state.project = data;
          return state;
        })
      );

      setStep(step + 1);
      setProgress(50);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit();
      }}
    >
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
          Create a New Project - fill up project details
        </Text>
        <CardBody>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
            gap={6}
            w={"100%"}
          >
            <Grid templateRows="repeat(1, 1fr)" w={"100%"}>
              <CustomInput
                id="project_name"
                title="Project name:"
                placeholder="project name"
                onChange={formik.handleChange}
                value={formik.values.project_name}
              />

              <CustomMultipleDropdown
                selections={selections}
                setSelections={setSelections}
              />
            </Grid>

            <ProjectCoverUpload
              coverFile={coverFile}
              setCoverFile={setCoverFile}
            />
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
            title="Abstract:"
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

      <Flex justify="center" mx={10} mb={10}>
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
          rightIcon={<ChevronRightIcon />}
          size={"sm"}
          fontSize={"12px"}
          fontWeight={"400"}
        >
          Next
        </Button>
      </Flex>
    </form>
  );
}

export default NewProjectForm;
