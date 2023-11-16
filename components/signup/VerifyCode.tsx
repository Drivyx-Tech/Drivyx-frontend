import React from "react";
import {
  VStack,
  HStack,
  ButtonGroup,
  Button,
  Flex,
  PinInput,
  PinInputField,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { ConfirmSignupReq, SignupReq } from "@/services/endpoints/type";
import { confirmSignup } from "@/services/endpoints/auth";
import { useRouter } from "next/navigation";

type Props = {
  step: number;
  setStep: (step: number) => void;
  setProgress: (progress: number) => void;
  signupValue: ConfirmSignupReq;
  setSignupValue: ({ email, password, userId, code }: ConfirmSignupReq) => void;
};

function VerifyCode({
  step,
  setStep,
  setProgress,
  signupValue,
  setSignupValue,
}: Props) {
  const toast = useToast();
  const router = useRouter();

  const handleVerifyCode = async () => {
    const res = await confirmSignup(signupValue);

    //TODO: save token to local storage
    console.log(res);

    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    //TODO: redirect to dashboard page
    router.push("/");
  };

  return (
    <VStack>
      <Heading textAlign={"center"} fontWeight="normal" mb="2%">
        Verify Your Account
      </Heading>

      <Text>We emailed you the six digit code to {signupValue.email}</Text>
      <Text>Enter the code below to confirm your email address to Sign In</Text>

      <HStack>
        <PinInput
          size="lg"
          onChange={(value: string) => {
            setSignupValue({ ...signupValue, code: value });
          }}
        >
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>

      <ButtonGroup mt="5%" w="100%">
        <Flex w="100%" justifyContent="space-between">
          {/* TODO: remove on after dev */}
          <Flex>
            <Button
              onClick={() => {
                setStep(step - 1);
                setProgress(50);
              }}
              isDisabled={step === 1}
              colorScheme="teal"
              variant="solid"
              w="7rem"
              mr="5%"
            >
              Back
            </Button>
            <Button
              w="7rem"
              isDisabled={step === 2}
              onClick={() => {
                setStep(step + 1);

                setProgress(100);
              }}
              colorScheme="teal"
              variant="outline"
            >
              Next
            </Button>
          </Flex>
          {step === 2 ? (
            <Button
              w="7rem"
              colorScheme="blue"
              variant="solid"
              onClick={handleVerifyCode}
            >
              Sign In
            </Button>
          ) : null}
        </Flex>
      </ButtonGroup>
    </VStack>
  );
}

export default VerifyCode;
