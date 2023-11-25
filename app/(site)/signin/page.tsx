"use client";

import { refreshToken, signin } from "@/services/endpoints/auth";
import { SigninReq } from "@/services/endpoints/type";
import { getUser } from "@/services/endpoints/user";
import { useAppDispatch, useAppSlector } from "@/services/redux/hooks";
import { tmpStoreAction } from "@/services/redux/tmpStore.reducer";
import { tokenAction } from "@/services/redux/tokens.reducer";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signin() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isDisabled, setIsDisabled] = useState(false);
  const [signinValue, setSigninValue] = useState<SigninReq>({
    email: "",
    password: "",
  });

  const token = useAppSlector((state) => state.tokens.currentToken);

  const company = useAppSlector((state) => state.tmpStore.company);
  console.log("check user data from tmpStore", company);

  const handleSignin = async () => {
    const res = await signin(signinValue);
    //TODO: handle signin error

    console.log("tokens", res);
    localStorage.setItem("accessToken", res.AccessToken);
    localStorage.setItem("refreshToken", res.RefreshToken);
    dispatch(tokenAction.setToken(res.AccessToken));
    dispatch(tokenAction.setRefresh(res.RefreshToken));

    let userResp = await getUser();
    if (!userResp) return;

    dispatch(
      tmpStoreAction.setState((state) => {
        state.user = userResp?.result.detail.user;
        state.company = userResp?.result.detail.company;

        return state;
      })
    );

    router.push("/");
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to Drixyv</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
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
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e) => {
                  setSigninValue({
                    ...signinValue,
                    password: e.target.value,
                  });
                }}
                value={signinValue.password}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Text color={"blue.400"}>Forgot password?</Text>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                isDisabled={isDisabled}
                onClick={handleSignin}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
