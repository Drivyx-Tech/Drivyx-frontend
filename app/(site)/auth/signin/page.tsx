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
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

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
          Don't have account?
        </Text>

        <Text textColor={"white"} textStyle={"subheading"} fontWeight={400}>
          Get started with a free account {""}
          <Link
            href="/auth/signup"
            bgGradient="linear(to-l, #fdbb2d, #22c1c3)"
            bgClip="text"
            fontWeight={600}
          >
            SIGN UP
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
          spacing={8}
          h={"auto"}
          maxW={"lg"}
          minW={{ base: "100%", md: "400px" }}
          py={6}
          px={10}
          bg="rgba(0, 0, 0, 0.6)"
        >
          <VStack align={"center"} display={{ base: "none", md: "flex" }}>
            <Text
              textColor={"white"}
              textAlign={"center"}
              textStyle={"heading"}
              fontWeight={600}
            >
              Welcome Back
            </Text>
          </VStack>

          <Stack spacing={6}>
            <FormControl id="email">
              <FormLabel fontSize={"sm"} fontWeight={400} color={"gray.300"}>
                Email
              </FormLabel>
              <Input
                h={"36px"}
                rounded={"reset"}
                type="email"
                placeholder="your email"
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
              <FormLabel fontSize={"sm"} fontWeight={400} color={"gray.300"}>
                Password
              </FormLabel>

              <InputGroup>
                <Input
                  h={"36px"}
                  rounded={"reset"}
                  type={showPassword ? "text" : "password"}
                  placeholder="your password"
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
                  forgot password?
                </Link>
              </Stack>
            </FormControl>

            <Stack pt={6}>
              <Button
                h={"36px"}
                rounded={"reset"}
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
                SIGN IN
              </Button>

              <Text fontSize={"xs"} textColor={"white"} align={"center"}>
                Don't have account?{" "}
                <Link
                  color={"tertiary.400"}
                  fontWeight={"bold"}
                  href={ROUTE_PATH.AUTH.SIGNUP}
                >
                  SIGN UP
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
