"use client";

import { useEffect, useState } from "react";
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
  Text,
  Link,
  FormHelperText,
  useToast,
  Highlight,
  Checkbox,
  Spinner,
  Alert,
  AlertIcon,
  CloseButton,
  VStack,
} from "@chakra-ui/react";
import {
  CheckIcon,
  ViewIcon,
  ViewOffIcon,
  WarningIcon,
} from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { forgetPassword, resetPassword } from "@/services/endpoints/auth";
import { ROUTE_PATH } from "@/constants/ROUTE_PATH";

export default function ResetPassword() {
  const toast = useToast();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirm: false,
  });
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [value, setValue] = useState({
    email: "",
    password: "",
    code: "",
  });

  const handleSendCode = async () => {
    setIsLoading(true);

    const res = await forgetPassword({ email: value.email });

    if (res.statusCode === 404) {
      setErrorMessage(res.detail.message);
      return;
    }

    if (res.statusCode === 500) {
      toast({
        title: "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
      });

      setIsLoading(false);
      return;
    }

    if (res.statusCode === 200) {
      setIsLoading(false);
      setStep(2);
    }
  };

  const handleResetPassword = async () => {
    setIsLoading(true);

    const res = await resetPassword({
      email: value.email,
      password: value.password,
      code: value.code,
    });

    if (res.statusCode === 200) {
      setIsLoading(false);
      toast({
        title: "Reset password successfully",
        description: "Reset password successfully. You can sign in now.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      router.push(ROUTE_PATH.AUTH.SIGNIN);
    }
  };

  return (
    <Flex h={"100vh"} justify={"center"} align="center" pos={"relative"}>
      {errorMessage && (
        <Alert status="warning" pos={"absolute"} top={0} width={"fit-content"}>
          <AlertIcon />
          {errorMessage}
          <CloseButton
            ml={4}
            size={"sm"}
            alignSelf="flex-start"
            onClick={() => setErrorMessage("")}
          />
        </Alert>
      )}

      <Box
        rounded="lg"
        width={{ base: "100%", md: 580 }}
        p={6}
        m="10px auto"
        as="form"
      >
        <Text
          textAlign={"center"}
          textStyle={"heading"}
          fontWeight={600}
          mb="2%"
        >
          Forgot Your Password?
        </Text>
        <Text
          textAlign={"center"}
          textColor={"gray.600"}
          fontSize={"sm"}
          mb="2%"
        >
          No worries, we'll send you the verification code to reset your
          password.
        </Text>

        {step === 1 && (
          <Box p={8}>
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"secondary.800"}
                >
                  Email
                </FormLabel>
                <Input
                  type="email"
                  placeholder="email"
                  bgColor={"gray.100"}
                  fontSize={"xm"}
                  onChange={(e) => {
                    setValue({ ...value, email: e.target.value });
                  }}
                  value={value.email}
                />
              </FormControl>

              <Stack pt={6}>
                <Flex justify={"center"}>
                  <Button
                    w="full"
                    color={"white"}
                    bg={"secondary.500"}
                    _hover={{
                      bg: "secondary.default",
                    }}
                    transition={"all .25s ease-in-out"}
                    variant="solid"
                    isDisabled={!value.email}
                    onClick={handleSendCode}
                    isLoading={isLoading}
                  >
                    Send code to email
                  </Button>
                </Flex>

                <Text align={"center"}>
                  <Link
                    color={"primary.600"}
                    fontWeight={"bold"}
                    href={ROUTE_PATH.AUTH.SIGNIN}
                  >
                    Back to Sign In
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        )}

        {step === 2 && (
          <Box p={8}>
            <Stack spacing={4}>
              <FormControl id="password" isRequired>
                <FormLabel
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"secondary.800"}
                >
                  New Password
                </FormLabel>

                <HStack>
                  <InputGroup>
                    <Input
                      type={showPassword.password ? "text" : "password"}
                      placeholder="password"
                      bgColor={"gray.100"}
                      fontSize={"xm"}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      value={password}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword({
                            ...showPassword,
                            password: !showPassword.password,
                          })
                        }
                      >
                        {showPassword.password ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </HStack>
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"secondary.800"}
                >
                  Confirm Password
                </FormLabel>

                <HStack>
                  <InputGroup>
                    <Input
                      type={showPassword.confirm ? "text" : "password"}
                      placeholder="password"
                      bgColor={"gray.100"}
                      fontSize={"xm"}
                      onChange={(e) => {
                        setConfirm(e.target.value);
                        setValue({ ...value, password: e.target.value });
                      }}
                      value={confirm}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword({
                            ...showPassword,
                            confirm: !showPassword.confirm,
                          })
                        }
                      >
                        {showPassword.confirm ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>

                  {password && confirm && (
                    <CheckIcon
                      display={password === confirm ? "block" : "none"}
                      color={"green"}
                    />
                  )}
                </HStack>
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"secondary.800"}
                >
                  Verification Code
                </FormLabel>

                <HStack>
                  <Input
                    flex={2}
                    type="number"
                    maxLength={6}
                    placeholder="6-digit code"
                    bgColor={"gray.100"}
                    fontSize={"xm"}
                    onChange={(e) =>
                      setValue({
                        ...value,
                        code: e.target.value,
                      })
                    }
                    value={value.code}
                  />
                </HStack>
              </FormControl>

              <Flex justify={"center"}>
                <Button
                  w="full"
                  color={"white"}
                  bg={"secondary.500"}
                  _hover={{
                    bg: "secondary.default",
                  }}
                  transition={"all .25s ease-in-out"}
                  variant="solid"
                  isDisabled={
                    !(
                      value.code.length > 0 &&
                      value.password.length > 0 &&
                      password === confirm
                    )
                  }
                  onClick={handleResetPassword}
                  isLoading={isLoading}
                >
                  Confirm to Reset Password
                </Button>
              </Flex>
            </Stack>
          </Box>
        )}
      </Box>
    </Flex>
  );
}
