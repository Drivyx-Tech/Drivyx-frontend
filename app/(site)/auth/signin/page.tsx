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
  Spinner,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signin() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isDisabled, setIsDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [signinValue, setSigninValue] = useState<SigninReq>({
    email: "",
    password: "",
  });

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
    <Stack pos={"relative"}>
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

      <VStack
        pos={"relative"}
        minH={"100vh"}
        align={"center"}
        justify={"center"}
      >
        {errorMessage && (
          <Alert
            status="warning"
            pos={"absolute"}
            top={0}
            width={"fit-content"}
          >
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

        <Stack
          zIndex={isLoading ? -1 : 0}
          spacing={8}
          mx={"auto"}
          maxW={"lg"}
          py={12}
          px={6}
          minW={{ base: "100%", md: "600px" }}
        >
          <Stack align={"center"}>
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
                Welcome back to Drivyx
              </Highlight>
            </Text>
          </Stack>

          <Box rounded={"lg"} p={8}>
            <Stack spacing={6}>
              <FormControl id="email">
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
                  fontWeight={600}
                  color={"secondary.800"}
                >
                  Password
                </FormLabel>
                <Input
                  type="password"
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

                <Stack mt={1} align={"end"}>
                  <Link
                    fontSize={"xs"}
                    w={"fit-content"}
                    color={"secondary.800"}
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
                      bg={"secondary.500"}
                      color={"white"}
                      _hover={{
                        bg: "secondary.default",
                      }}
                      transition={"all .25s ease-in-out"}
                      isDisabled={isDisabled}
                      onClick={handleSignin}
                    >
                      Sign in
                    </Button>
                  </Flex>

                  <Text align={"center"}>
                    Don't have account?{" "}
                    <Link
                      color={"primary.600"}
                      fontWeight={"bold"}
                      href={ROUTE_PATH.AUTH.SIGNUP}
                    >
                      sign up
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </VStack>
    </Stack>
  );
}
