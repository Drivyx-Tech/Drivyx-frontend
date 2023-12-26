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
  Checkbox,
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
    //TODO: handle signin error
    router.push(ROUTE_PATH.DASHBOARD.HOME);

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
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack
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
              Sign in to Drivyx
            </Highlight>
          </Text>
        </Stack>
        <Box rounded={"lg"} p={8}>
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
                <Checkbox
                  // onChange={() => setIsChecked(!isChecked)}
                  isChecked={true}
                >
                  remember me
                </Checkbox>
                {/* <Text color={"blue.400"}>Forgot password?</Text> */}
              </Stack>
              <Button
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
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}