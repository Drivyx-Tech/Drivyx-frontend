/* eslint-disable react-hooks/exhaustive-deps */
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box,
} from "@chakra-ui/react";
import { useEffect } from "react";

const steps = [
  { title: "First", description: "Project Details" },
  { title: "Second", description: "Upload Project Images" },
  { title: "Third", description: "Review Project" },
  { title: "Fourth", description: "Confirm Submit" },
];

export function GeneralStepper({ step }: { step: number }) {
  const { activeStep, setActiveStep } = useSteps({
    index: step,
    count: steps.length,
  });

  useEffect(() => {
    setActiveStep(step);
  }, [step]);

  return (
    <Stepper size="md" index={activeStep} w={"7xl"}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
}
