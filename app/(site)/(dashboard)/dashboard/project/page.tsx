"use client";

import {
  Button,
  Card,
  CardBody,
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
  Progress,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomInput from "@/ui/Form/CustomInput";
import CustomMultipleDropdown from "@/ui/Form/CustomMultipleDropdown";
import CustomTextarea from "@/ui/Form/CustomTextarea";
import { createProject } from "@/services/endpoints/project";
import { useRouter } from "next/navigation";
import ProjectCoverUpload from "@/components/uploadFile/ProjectCoverUpload";
import { ImgFile } from "@/services/endpoints/type";
import NewProjectForm from "@/components/project/NewProjectForm";
import UploadMediaForm from "@/components/project/UploadMediaForm";
import ProjectReview from "@/components/project/ProjectReview";

export type IStep = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
};

function ProjectForm() {
  const [progress, setProgress] = useState(25);
  const [step, setStep] = useState(1);
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const router = useRouter();
  // const toast = useToast();
  // const [coverFile, setCoverFile] = useState<ImgFile>({
  //   base64: "",
  //   ext: "",
  //   type: "",
  //   name: "cover_image",
  //   size: "",
  // });
  // const [selections, setSelections] = useState({
  //   category_id: "",
  //   subCategory_id: "",
  //   tag_ids: [],
  // });

  // const formik = useFormik({
  //   initialValues: {
  //     project_name: "",
  //     funding_goal: "",
  //     excerpt: "",
  //     project_goal: "",
  //     desc: "",
  //     outcome: "",
  //     contributions: "",
  //     ...selections,
  //   },
  //   validationSchema: Yup.object({
  //     tags: Yup.array().min(1, "Select at least one tag"),
  //   }),
  //   onSubmit: async (values) => {
  //     const data = {
  //       ...selections,
  //       project: { ...values },
  //       coverFile: coverFile,
  //     };

  //     const res = await createProject(data);
  //     if (res.result.statusCode !== 200)
  //       return console.log("error in create project");

  //     toast({
  //       title: "Project is sending for review.",
  //       description: "Project is sending for review.",
  //       status: "success",
  //       duration: 3000,
  //       isClosable: true,
  //     });

  //     router.push("/dashboard");
  //   },
  // });

  const randerStep = (step: number) => {
    switch (step) {
      case 1:
        return (
          <NewProjectForm
            step={step}
            setStep={setStep}
            setProgress={setProgress}
          />
        );
      case 2:
        return (
          <UploadMediaForm
            step={step}
            setStep={setStep}
            setProgress={setProgress}
          />
        );
      case 3:
        return (
          <ProjectReview
            step={step}
            setStep={setStep}
            setProgress={setProgress}
          />
        );
    }
  };

  return (
    <Flex direction="column" mx={12}>
      <Progress hasStripe value={progress} isAnimated></Progress>
      {randerStep(step)}
    </Flex>
  );
}

export default ProjectForm;
