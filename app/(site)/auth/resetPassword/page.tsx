"use client";

import { useState } from "react";
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
  useToast,
  Alert,
  AlertIcon,
  CloseButton,
  VStack,
  Image,
  PopoverTrigger,
  Popover,
  PopoverContent,
  PopoverCloseButton,
  PopoverArrow,
  PopoverBody,
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
import smLogoColorful from "@/public/svg/logomark_background.svg";
import { Utiles } from "@/services/utils";

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

    if (res.statusCode === 200) {
      if (res.detail?.errorCode === 404) {
        setErrorMessage(res.detail.message);
        setValue({ ...value, email: "" });
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      toast({
        title: "Sent validation code successfully",
        description: "Please check the validation code in your email.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setStep(2);
    }

    if (res.statusCode === 500) {
      setIsLoading(false);
      toast({
        title: "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
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
      if (res.detail?.errorCode === 404) {
        setIsLoading(false);
        setErrorMessage(res.detail.message);
        setValue({ ...value, code: "" });
        return;
      }

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

    if (res.statusCode === 500) {
      setIsLoading(false);
      toast({
        title: "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    setIsLoading(false);
  };

  return (
    <Flex
      flexDir={"column"}
      h={"100vh"}
      justify={"center"}
      align="center"
      pos={"relative"}
    >
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

      <VStack mx={4} gap={6}>
        <HStack align={"flex-end"} gap={{ base: 0, md: 6 }}>
          <Stack justifyContent={"center"} overflow={"hidden"}>
            <Image src={smLogoColorful.src} width={"100px"} alt="logo" />
          </Stack>
          <Text
            textAlign={"center"}
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight={600}
          >
            Forgot Your Password?
          </Text>
        </HStack>
        <Text textAlign={"center"} textColor={"gray.600"} fontSize={"md"}>
          No worries, we'll send you the verification code to reset your
          password.
        </Text>
      </VStack>

      <Box
        rounded="lg"
        width={{ base: "100%", md: 580 }}
        p={6}
        m="10px auto"
        as="form"
      >
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

                <HStack pos={"relative"}>
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
                      isInvalid={
                        !Utiles.isPasswordValid(password) && !!password
                      }
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"text"}
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

                  {!Utiles.isPasswordValid(password) && (
                    <Popover>
                      <PopoverTrigger>
                        <WarningIcon
                          pos={"absolute"}
                          right={"-30px"}
                          top={"12px"}
                          color={"orange"}
                        />
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody fontSize={"xs"}>
                          At least 8 characters with 1 number, 1 special
                          character, 1 uppercase and 1 lowercase.
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  )}
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

                <HStack pos={"relative"}>
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
                        variant={"text"}
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
                      pos={"absolute"}
                      right={"-30px"}
                      top={"12px"}
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
                    isDisabled={
                      !(
                        value.code.length > 0 &&
                        value.password.length > 0 &&
                        value.code.length === 6 &&
                        password === confirm &&
                        Utiles.isPasswordValid(password)
                      )
                    }
                    onClick={handleResetPassword}
                    isLoading={isLoading}
                  >
                    Confirm to Reset Password
                  </Button>
                </Flex>
                <Text align={"center"}>
                  <Link
                    color={"primary.600"}
                    fontWeight={"bold"}
                    onClick={() => {
                      setStep(1);
                      setValue({ email: "", password: "", code: "" });
                      setPassword("");
                      setConfirm("");
                    }}
                  >
                    Back
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        )}
      </Box>
    </Flex>
  );
}
