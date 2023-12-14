"use client";

import { Flex, Text, Progress, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
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
      case 4:
        return (
          <Stack w={"full"} h={"100%"} justifyContent={"center"}>
            <Text>
              Thank you, the new project has submitted successfully. Our team
              will review your project within 24 hours.
            </Text>
          </Stack>
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
