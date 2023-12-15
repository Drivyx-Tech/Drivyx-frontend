"use client";

import {
  Button,
  Card,
  CardBody,
  Spinner,
  Flex,
  Grid,
  Text,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomInput from "@/ui/Form/CustomInput";
import CustomMultipleDropdown from "@/ui/Form/CustomMultipleDropdown";
import CustomTextarea from "@/ui/Form/CustomTextarea";
import { createProject } from "@/services/endpoints/project";
import { useRouter } from "next/navigation";
import ProjectCoverUpload from "@/components/uploadFile/ProjectCoverUpload";
import { ImgFile } from "@/services/endpoints/type";

function ProjectForm() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [coverFile, setCoverFile] = useState<ImgFile>({
    base64: "",
    ext: "",
    type: "",
    name: "cover_image",
    size: "",
  });
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
      ...selections,
    },
    validationSchema: Yup.object({
      tags: Yup.array().min(1, "Select at least one tag"),
    }),
    onSubmit: (values) => {
      try {
        const data = {
          ...selections,
          project: { ...values },
          coverFile: coverFile,
        };

        toast.promise(
          createProject(data).then((res) => {
            if (res.result.statusCode === 200) {
              formik.resetForm();
              router.push("/dashboard");
            }
          }),
          {
            success: {
              title: "Create a project",
              description: "Project created successfully",
            },
            error: { title: "Error", description: "Error in creating project" },
            loading: {
              title: "Creating project",
              description: "Please wait...",
            },
          }
        );
      } catch (error) {
        toast({
          title: "Error",
          description: "Error in creating project",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    },
  });

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
            <ModalHeader>Create a New Project</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Do you want to create a project?</Text>
            </ModalBody>

            <ModalFooter>
              <Button
                variant="ghost"
                mr={3}
                onClick={() => {
                  onClose();
                }}
              >
                No
              </Button>
              <Button
                colorScheme="blue"
                onClick={() => {
                  formik.handleSubmit();
                  onClose();
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
            Create
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
      </form>
    </Flex>
  );
}

export default ProjectForm;
