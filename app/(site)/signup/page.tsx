"use client";

import { useState } from "react";
import { Progress, Box, Flex } from "@chakra-ui/react";
import Signup from "@/components/signup/Signup";
import VerifyCode from "@/components/signup/VerifyCode";
import { ConfirmSignupReq } from "@/services/endpoints/type";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Drivyx | Signup",
//   // description: '...',
// };

export default function Multistep() {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(50);
  const [signupValue, setSignupValue] = useState<ConfirmSignupReq>({
    userId: "",
    email: "",
    password: "",
    code: "",
  });

  return (
    <Flex h={"100vh"} justify={"center"} align="center">
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        width={580}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? (
          <Signup
            step={step}
            setStep={setStep}
            setProgress={setProgress}
            signupValue={signupValue}
            setSignupValue={setSignupValue}
          />
        ) : (
          <VerifyCode
            step={step}
            setStep={setStep}
            setProgress={setProgress}
            signupValue={signupValue}
            setSignupValue={setSignupValue}
          />
        )}
      </Box>
    </Flex>
  );
}
