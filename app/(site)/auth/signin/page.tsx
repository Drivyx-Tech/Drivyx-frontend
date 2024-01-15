"use client";

import { ROUTE_PATH } from "@/constants/ROUTE_PATH";
import { signin } from "@/services/endpoints/auth";
import { SigninReq } from "@/services/endpoints/type";
import { getUser } from "@/services/endpoints/user";
import { useAppDispatch } from "@/services/redux/hooks";
import { tmpStoreAction } from "@/services/redux/tmpStore.reducer";
import { tokenAction } from "@/services/redux/tokens.reducer";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Highlight,
  Text,
  Alert,
  AlertIcon,
  VStack,
  Link,
  CloseButton,
  Image,
  Spinner,
  HStack,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import smLogoColorful from "@/public/svg/logomark_background.svg";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import turbineBg from "@/public/images/turbine-bg.jpg";

export default function Signin() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isDisabled, setIsDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [signinValue, setSigninValue] = useState<SigninReq>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignin = async () => {
    setIsLoading(true);
    const res = await signin(signinValue);

    if (res.statusCode === 200) {
      if (res.detail.errorCode && res.detail.errorCode === 404) {
        setIsLoading(false);
        setErrorMessage(res.detail.message);
        return;
      }

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

      router.push(ROUTE_PATH.DASHBOARD.HOME);
    } else {
      console.log("something wrong");
    }
  };

  return (
    <HStack px={8} h={"100vh"} w={"100vw"} justify={"center"} pos={"relative"}>
      <Box
        bgImage={`url(${turbineBg.src})`}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPos="center"
        w="100%"
        h="100%"
        position="absolute"
        zIndex={-1}
      />
      <Box
        position="absolute"
        w="100%"
        h="100%"
        bg="rgba(0, 0, 0, 0.5)"
        zIndex={-1}
      />

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

      <HStack minH={"70vh"} w={"full"} maxW={"7xl"} justify={"center"}>
        <VStack
          flex={1}
          w={"full"}
          h={"full"}
          justify={"center"}
          spacing={8}
          maxW={"3xl"}
        >
          <Text textColor={"white"} textStyle={"heading"}>
            Join us today
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
          pos={"relative"}
          rounded={0}
          h={"full"}
          w={"full"}
          align={"center"}
          justify={"center"}
        >
          <Stack
            zIndex={isLoading ? -1 : 0}
            spacing={8}
            mx={"auto"}
            h={"full"}
            maxW={"lg"}
            minW={{ base: "100%", md: "400px" }}
          >
            <VStack
              rounded={"lg"}
              h={"full"}
              w={"full"}
              py={6}
              bg="rgba(0, 0, 0, 0.4)"
              justify={"center"}
            >
              <VStack align={"center"}>
                <Text
                  textColor={"white"}
                  textAlign={"center"}
                  textStyle={"heading"}
                  fontWeight={600}
                >
                  Sign In
                </Text>
              </VStack>
              <Stack spacing={6}>
                <FormControl id="email">
                  <FormLabel
                    fontSize={"sm"}
                    fontWeight={400}
                    color={"gray.300"}
                  >
                    Email
                  </FormLabel>
                  <Input
                    type="email"
                    placeholder="email"
                    fontSize={"xm"}
                    bgColor={"gray.100"}
                    onChange={(e) => {
                      setSigninValue({
                        ...signinValue,
                        email: e.target.value,
                      });
                    }}
                    value={signinValue.email}
                  />
                </FormControl>

                <FormControl id="password">
                  <FormLabel
                    fontSize={"sm"}
                    fontWeight={400}
                    color={"gray.300"}
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
                        setSigninValue({
                          ...signinValue,
                          password: e.target.value,
                        });
                      }}
                      value={signinValue.password}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"text"}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>

                  <Stack mt={1} align={"end"}>
                    <Link
                      fontSize={"xs"}
                      w={"fit-content"}
                      color={"tertiary.400"}
                      fontWeight={600}
                      href={ROUTE_PATH.AUTH.RESETPASSWORD}
                    >
                      Forgot password?
                    </Link>
                  </Stack>
                </FormControl>

                <Stack spacing={10}>
                  <Stack pt={6}>
                    <Flex justify={"center"}>
                      <Button
                        w={"full"}
                        bg={"secondary.400"}
                        color={"white"}
                        _hover={{
                          bg: "secondary.600",
                        }}
                        transition={"all .25s ease-in-out"}
                        isDisabled={isDisabled}
                        onClick={handleSignin}
                        isLoading={isLoading}
                      >
                        Sign in
                      </Button>
                    </Flex>

                    <Text textColor={"white"} align={"center"}>
                      Don't have account?{" "}
                      <Link
                        color={"tertiary.400"}
                        fontWeight={"bold"}
                        href={ROUTE_PATH.AUTH.SIGNUP}
                      >
                        sign up
                      </Link>
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </VStack>
          </Stack>
        </VStack>
      </HStack>
    </HStack>
  );
}
