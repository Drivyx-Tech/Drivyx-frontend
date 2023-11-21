"use client";

import { signin } from "@/services/endpoints/auth";
import { SigninReq } from "@/services/endpoints/type";
import { useAppDispatch } from "@/services/redux/hooks";
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

  const handleSignin = async () => {
    const res = await signin(signinValue);

    //TODO: handle error
    console.log("tokens", res);
    localStorage.setItem("accessToken", res.AccessToken);
    localStorage.setItem("refreshToken", res.RefreshToken);
    dispatch(tokenAction.setToken(res.AccessToken));
    dispatch(tokenAction.setRefresh(res.RefreshToken));

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
