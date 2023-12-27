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
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { ConfirmSignupReq, SignupReq } from "@/services/endpoints/type";
import { useAppDispatch } from "@/services/redux/hooks";
import { useRouter } from "next/navigation";
import { Utiles } from "@/services/utils";
import { confirmSignup, signup } from "@/services/endpoints/auth";
import { ROUTE_PATH } from "@/constants/ROUTE_PATH";
import { tokenAction } from "@/services/redux/tokens.reducer";
import { getUser } from "@/services/endpoints/user";
import { tmpStoreAction } from "@/services/redux/tmpStore.reducer";
import TermsAndPrivacyCheckbox from "@/components/TermsAndPrivacyCheckbox";

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const toast = useToast();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isCodeDisabled, setIsCodeDisabled] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [value, setValue] = useState<SignupReq>({
    given_name: "",
    family_name: "",
    email: "",
    password: "",
  });
  const [signupValue, setSignupValue] = useState<ConfirmSignupReq>({
    userId: "",
    email: "",
    password: "",
    code: "",
  });

  useEffect(() => {
    if (
      value.given_name.length > 0 &&
      value.family_name.length > 0 &&
      value.email.length > 0 &&
      value.password.length > 7 &&
      Utiles.validatePassword(value.password)
    ) {
      setIsCodeDisabled(false);
    } else {
      setIsCodeDisabled(true);
    }

    if (
      value.given_name.length > 0 &&
      value.family_name.length > 0 &&
      value.email.length > 0 &&
      value.password.length > 7 &&
      isChecked &&
      signupValue.code.length > 0 &&
      Utiles.validatePassword(value.password)
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [value, isChecked, signupValue.code]);

  const handleGetCode = async () => {
    const res = await signup(value);

    if (res.result.statusCode === 402) {
      setErrorMessage(
        "This email is already registered. Please choose another one."
      );
      return;
    }

    if (res.result.statusCode === 405) {
      // TODO: when user not active, to resend verification code or something else
      toast({
        title: res.result.title,
        description: "Please check your email to activate your account.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });

      return;
    }

    if (res.result.statusCode === 500) {
      toast({
        title: "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (res.result.statusCode === 200) {
      toast({
        title: "Send code successfully",
        description: `We have sent a verification code to the email ${value.email}, please find the verification code in your email`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setSignupValue({
        userId: res.result.detail.userId,
        email: value.email,
        password: value.password,
        code: "",
      });
    }
  };

  const handleSignup = async () => {
    setIsLoading(true);
    const res = await confirmSignup(signupValue);

    // NEED TAKE TIME GET INTO THIS LATER - dont understand the logic here (localStorage and redux storage)
    localStorage.setItem("accessToken", res.detail.AccessToken);
    localStorage.setItem("refreshToken", res.detail.RefreshToken);
    dispatch(tokenAction.setToken(res.detail.AccessToken));
    dispatch(tokenAction.setRefresh(res.detail.RefreshToken));

    let userResp = await getUser();
    if (userResp.result.statusCode === 200) {
      dispatch(
        tmpStoreAction.setState((state) => {
          state.user = userResp?.result.detail;
          return state;
        })
      );
    }

    //TODO: redirect to dashboard page
    router.push(ROUTE_PATH.DASHBOARD.PROFILE);
  };

  return (
    <Flex h={"100vh"} justify={"center"} align="center" pos={"relative"}>
      {isLoading && (
        <Stack
          w={"full"}
          h={"full"}
          pos={"absolute"}
          bg={"rgba(255, 255, 255, .5)"}
          z-index={10}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            pos={"absolute"}
            top={0}
            left={0}
            right={0}
            bottom={0}
            m="auto"
          />
        </Stack>
      )}

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
        zIndex={isLoading ? -1 : 0}
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
          <Highlight
            query={"Drivyx"}
            styles={{
              background: "-webkit-linear-gradient(left, #fdbb2d, #22c1c3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hi, welcome to Drivyx
          </Highlight>
        </Text>

        <Box p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="given_name" isRequired>
                  <FormLabel
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"secondary.800"}
                  >
                    First Name
                  </FormLabel>
                  <Input
                    size={"md"}
                    type="text"
                    placeholder="first name"
                    bgColor={"gray.100"}
                    fontSize={"xm"}
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
                  <FormLabel
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"secondary.800"}
                  >
                    Last Name
                  </FormLabel>
                  <Input
                    type="text"
                    placeholder="last name"
                    bgColor={"gray.100"}
                    fontSize={"xm"}
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
                  setValue({
                    ...value,
                    email: e.target.value,
                  });
                }}
                value={value.email}
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel
                fontSize={"sm"}
                fontWeight={600}
                color={"secondary.800"}
              >
                Password
              </FormLabel>

              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  bgColor={"gray.100"}
                  fontSize={"xm"}
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
              <FormHelperText color={"gray.400"} fontSize="xs" mt={0.5}>
                At least 8 characters with 1 number, 1 special character, 1
                uppercase and 1 lowercase.
              </FormHelperText>
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
                    setSignupValue({
                      ...signupValue,
                      code: e.target.value,
                    })
                  }
                  value={signupValue.code}
                />
                <Button
                  flex={1}
                  colorScheme="green"
                  fontSize="sm"
                  fontWeight={500}
                  isDisabled={isCodeDisabled}
                  onClick={handleGetCode}
                >
                  get code
                </Button>
              </HStack>
            </FormControl>

            <TermsAndPrivacyCheckbox
              isChecked={isChecked}
              setIsChecked={setIsChecked}
            />

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
                  isDisabled={isDisabled}
                  onClick={handleSignup}
                >
                  Confirm to Register
                </Button>
              </Flex>

              <Text align={"center"}>
                Already have an account?{" "}
                <Link
                  color={"primary.600"}
                  fontWeight={"bold"}
                  href={ROUTE_PATH.AUTH.SIGNIN}
                >
                  Sign In
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
}
