"use client";

import NewProjectForm from "@/components/dashboard/project/NewProjectForm";
import ProjectReview from "@/components/dashboard/project/ProjectReview";
import UploadMediaForm from "@/components/dashboard/project/UploadMediaForm";
import { GeneralStepper } from "@/ui/Stepper/GeneralStepper";
import { Flex, Text, Progress, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

export type IStep = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

function ProjectForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);

  const randerStep = (step: number) => {
    switch (step) {
      case 1:
        return (
          <NewProjectForm
            step={step}
            setStep={setStep}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        );
      case 2:
        return (
          <UploadMediaForm
            step={step}
            setStep={setStep}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        );
      case 3:
        return (
          <ProjectReview
            step={step}
            setStep={setStep}
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
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        );
    }
  };

  return (
    <Flex direction="column" px={12} w={"100%"} h={"100%"} gap={4}>
      <GeneralStepper step={step} />
      {/* <Progress hasStripe value={progress} isAnimated></Progress> */}
      {randerStep(step)}
    </Flex>
  );
}

export default ProjectForm;
