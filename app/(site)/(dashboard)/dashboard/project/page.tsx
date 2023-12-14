"use client";

import { Flex, Text, Progress, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import NewProjectForm from "@/components/project/NewProjectForm";
import UploadMediaForm from "@/components/project/UploadMediaForm";
import ProjectReview from "@/components/project/ProjectReview";

export type IStep = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

function ProjectForm() {
  const [isLoading, setIsLoading] = useState(false);
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
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        );
      case 2:
        return (
          <UploadMediaForm
            step={step}
            setStep={setStep}
            setProgress={setProgress}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        );
      case 3:
        return (
          <ProjectReview
            step={step}
            setStep={setStep}
            setProgress={setProgress}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        );
      case 4:
        return (
          <VStack w={"100%"} h={"100%"} justify={"center"} align="center">
            <Text>
              Thank you, the new project has submitted successfully. Our team
              will review your project within 24 hours.
            </Text>
            <Text>
              To create more projects, please{" "}
              <Text
                as="span"
                color="blue.500"
                cursor="pointer"
                onClick={() => {
                  setStep(1);
                  setProgress(25);
                }}
              >
                click here
              </Text>
            </Text>
          </VStack>
        );
      default:
        return (
          <NewProjectForm
            step={step}
            setStep={setStep}
            setProgress={setProgress}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        );
    }
  };

  return (
    <Flex direction="column" px={12} w={"100%"} h={"100%"}>
      <Progress hasStripe value={progress} isAnimated></Progress>
      {randerStep(step)}
    </Flex>
  );
}

export default ProjectForm;
