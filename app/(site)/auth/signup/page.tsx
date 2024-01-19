"use client";

import { useEffect, useState } from "react";
import {
  Flex,
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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, WarningIcon } from "@chakra-ui/icons";
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
import smLogoColorful from "@/public/svg/logomark_background.svg";
import turbineBg from "@/public/images/turbine-bg.jpg";

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
      signupValue.code.length === 6 &&
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
    <Flex>
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

      <VStack
        display={{ base: "none", md: "flex" }}
        flex={1}
        w={"full"}
        h={"full"}
        justify={"center"}
        spacing={{ base: 2, sm: 4, md: 8 }}
        maxW={{ base: "100%", sm: "2xl", md: "3xl" }}
        px={4}
      >
        <Text textColor={"white"} textStyle={"heading"}>
          Already have an account?
        </Text>

        <Text textColor={"white"} textStyle={"subheading"} fontWeight={400}>
          Back to{" "}
          <Link
            href="/auth/signin"
            bgGradient="linear(to-l, #fdbb2d, #22c1c3)"
            bgClip="text"
            fontWeight={600}
          >
            SIGN IN
          </Link>
        </Text>

        <Text textStyle={"subheading"} fontWeight={400} textColor={"white"}>
          To browse the diverse range of sustainability projects on the Drivyx
          marketplace.
        </Text>
        <Text textStyle={"subheading"} fontWeight={400} textColor={"white"}>
          Become a part of Drivyx ESG Marketplace and shape a sustainable
          future.
        </Text>
      </VStack>

      <VStack
        flex={1}
        h={"full"}
        w={"full"}
        align={"center"}
        justify={"center"}
      >
        <Stack
          spacing={4}
          h={"auto"}
          maxW={"lg"}
          minW={{ base: "100%", md: "400px" }}
          py={6}
          px={10}
          bg="rgba(0, 0, 0, 0.6)"
        >
          <HStack>
            <FormControl id="given_name" isRequired>
              <FormLabel fontSize={"sm"} fontWeight={400} color={"gray.300"}>
                First Name
              </FormLabel>
              <Input
                h={"36px"}
                rounded={"reset"}
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

            <FormControl id="family_name" isRequired>
              <FormLabel fontSize={"sm"} fontWeight={400} color={"gray.300"}>
                Last Name
              </FormLabel>
              <Input
                h={"36px"}
                rounded={"reset"}
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
          </HStack>

          <FormControl id="email" isRequired>
            <FormLabel fontSize={"sm"} fontWeight={400} color={"gray.300"}>
              Email
            </FormLabel>
            <Input
              h={"36px"}
              rounded={"reset"}
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

          <Stack spacing={4}>
            <FormControl id="password" isRequired>
              <FormLabel fontSize={"sm"} fontWeight={400} color={"gray.300"}>
                Password
              </FormLabel>

              <HStack pos={"relative"}>
                <InputGroup>
                  <Input
                    h={"36px"}
                    rounded={"reset"}
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
                      h={"36px"}
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>

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
                      At least 8 characters with 1 number, 1 special character,
                      1 uppercase and 1 lowercase.
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </HStack>
            </FormControl>
          </Stack>

          <FormControl id="email" isRequired>
            <FormLabel fontSize={"sm"} fontWeight={400} color={"gray.300"}>
              Verification Code
            </FormLabel>

            <HStack>
              <Input
                h={"36px"}
                rounded={"reset"}
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
                h={"36px"}
                rounded={"reset"}
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
            colorTheme="light"
          />

          <Stack pt={6} zIndex={10}>
            <Button
              h={"36px"}
              rounded={"reset"}
              w={"full"}
              bg={"secondary.400"}
              color={"white"}
              _hover={{
                bg: isDisabled ? "secondary.400" : "secondary.600",
              }}
              transition={"all .25s ease-in-out"}
              isDisabled={isDisabled}
              onClick={handleSignup}
              isLoading={isLoading}
            >
              Confirm to Register
            </Button>

            <Text fontSize={"xs"} textColor={"white"} align={"center"}>
              Already have an account?{" "}
              <Link
                color={"tertiary.400"}
                fontWeight={"bold"}
                href={ROUTE_PATH.AUTH.SIGNIN}
              >
                SIGN IN
              </Link>
            </Text>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
