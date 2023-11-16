"use client";

import * as React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  FormHelperText,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { signup } from "@/services/endpoints/auth";
import { ConfirmSignupReq, SignupReq } from "@/services/endpoints/type";

function validatePassword(password: string) {
  // Regular expression for password validation
  const passwordRegex =
    /^(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;<>,.?/"'~`\\|]).*(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  // Test the password against the regex
  return passwordRegex.test(password);
}

type TSignupValue = {
  email: string;
  password: string;
  userId: string;
};

type Props = {
  step: number;
  setStep: (step: number) => void;
  setProgress: (progress: number) => void;
  signupValue: ConfirmSignupReq;
  setSignupValue: ({ email, password, userId }: ConfirmSignupReq) => void;
};

export default function Signup({
  step,
  setStep,
  setProgress,
  signupValue,
  setSignupValue,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [validPsw, setValidPsw] = useState(false);
  const [value, setValue] = useState<SignupReq>({
    given_name: "",
    family_name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (
      value.given_name.length > 0 &&
      value.family_name.length > 0 &&
      value.email.length > 0 &&
      value.password.length > 7 &&
      validatePassword(value.password)
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [value]);

  const handleSignup = async () => {
    setStep(step + 1);
    setProgress(100);

    const res = await signup(value);
    setSignupValue({
      email: value.email,
      password: value.password,
      userId: res.result.userId,
      code: "",
    });
  };

  return (
    <>
      <Heading textAlign={"center"} fontWeight="normal" mb="2%">
        Sign up to Drixyv
      </Heading>

      <Box p={8}>
        <Stack spacing={4}>
          <HStack>
            <Box>
              <FormControl id="given_name" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  onChange={(e) => {
                    setValue({
                      ...value,
                      given_name: e.target.value,
                    });
                  }}
                  value={value.given_name}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="family_name" isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  onChange={(e) => {
                    setValue({
                      ...value,
                      family_name: e.target.value,
                    });
                  }}
                  value={value.family_name}
                />
              </FormControl>
            </Box>
          </HStack>

          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              onChange={(e) => {
                setValue({
                  ...value,
                  email: e.target.value,
                });
              }}
              value={value.email}
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                onChange={(e) => {
                  setValue({
                    ...value,
                    password: e.target.value,
                  });
                }}
                value={value.password}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormHelperText>
              at least 8 characters with 1 number, 1 special character, 1
              uppercase and 1 lowercase.
            </FormHelperText>
          </FormControl>

          <Stack pt={6}>
            <Flex justify={"center"}>
              <Button
                w="20rem"
                colorScheme="teal"
                variant="solid"
                isDisabled={isDisabled}
                onClick={handleSignup}
              >
                Verify Email
              </Button>
            </Flex>

            <Text align={"center"}>
              Already a user?{" "}
              <Link color={"blue.400"} fontWeight={"bold"}>
                Login
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
