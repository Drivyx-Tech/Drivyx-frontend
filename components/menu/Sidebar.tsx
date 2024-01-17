"use client";

import {
  Box,
  Flex,
  Link,
  Text,
  HStack,
  Button,
  VStack,
  Image,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { NAV_DASHBOARD } from "@/constants/NAV_DASHBOARD";
import LogoFullWhite from "../../ui/SVG/LogoFullWhite";
import { useRouter, usePathname } from "next/navigation";
import smLogoWhite from "@/public/svg/logomark_white.svg";
import { FiLogOut } from "react-icons/fi";
import { Separator } from "@/ui/Separator";
import { useAppDispatch } from "@/services/redux/hooks";
import { tokenAction } from "@/services/redux/tokens.reducer";
import { tmpStoreAction } from "@/services/redux/tmpStore.reducer";
import { ChevronLeftIcon, WarningIcon } from "@chakra-ui/icons";
import { useAppSlector } from "@/services/redux/hooks";
import { ROUTE_PATH } from "@/constants/ROUTE_PATH";

type Props = {
  isCollapsed: boolean;
  setIsCollapsed: any;
};

function Sidebar({ isCollapsed, setIsCollapsed }: Props) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const user = useAppSlector((state) => state.tmpStore.user);
  const { company } = user;

  const handleButtonClick = (prop: any) => {
    router.push(prop.href);
  };

  return (
    <HStack pos={"fixed"} h={"100%"} zIndex={10}>
      <Flex
        py={8}
        backgroundColor={"secondary.900"}
        w={isCollapsed ? "90px" : "230px"}
        justifyContent={"center"}
        alignContent={"center"}
        h={"100%"}
      >
        <VStack justifyContent={"space-between"}>
          <VStack w={"100%"} justifyContent={"center"}>
            <VStack gap={7} pos={"relative"}>
              <Stack
                style={{
                  zIndex: 1,
                }}
                h={"24px"}
                w={"24px"}
                rounded={"full"}
                bg={"-webkit-linear-gradient(left, #fdbb2d, #22c1c3)"}
                pos={"absolute"}
                right={-6}
                top={6}
                justify={"center"}
                align={"center"}
                shadow={"lg"}
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                <ChevronLeftIcon w={5} h={5} color={"secondary.900"} />
              </Stack>

              <Link
                href={ROUTE_PATH.NON_AUTH.HOME}
                target="_blank"
                display="flex"
              >
                {isCollapsed ? (
                  <Stack justifyContent={"center"} overflow={"hidden"}>
                    <Image src={smLogoWhite.src} width={"60px"} alt="logo" />
                  </Stack>
                ) : (
                  <LogoFullWhite />
                )}
              </Link>

              <Separator />
            </VStack>

            <VStack mt={6}>
              {NAV_DASHBOARD.map((prop, key) => {
                return (
                  <Button
                    key={key}
                    px={isCollapsed ? 2 : 4}
                    my={1}
                    w={isCollapsed ? "auto" : "170px"}
                    h={"38px"}
                    justifyContent={"left"}
                    border={"1px"}
                    borderRadius={"4px"}
                    borderColor={"transparent"}
                    zIndex={1}
                    _hover={{
                      transition: "all 0.5s ease-in-out",
                      cursor: "pointer",
                      background:
                        "linear-gradient(#1E2A13, #1E2A13) padding-box, linear-gradient(to left, #fdbb2d, #22c1c3) border-box",
                      borderRadius: "4px",
                      border: "1px solid transparent",
                    }}
                    background={
                      prop.href === pathname
                        ? "linear-gradient(#1E2A13, #1E2A13) padding-box, linear-gradient(to left, #fdbb2d, #22c1c3) border-box"
                        : "#1E2A13"
                    }
                    onClick={() => handleButtonClick(prop)}
                    pos={"relative"}
                  >
                    <HStack>
                      <Flex mr={isCollapsed ? 0 : 4}>{prop.icon}</Flex>
                      {!isCollapsed && (
                        <Text fontSize="12px" fontWeight={400} color={"white"}>
                          {prop.name.toUpperCase()}
                        </Text>
                      )}
                    </HStack>

                    {/* notification */}
                    {company.status === "inactive" &&
                      prop.name === "Profile" && (
                        <WarningIcon
                          color="orange"
                          style={{
                            position: "absolute",
                            right: isCollapsed ? "-5px" : "6px",
                            top: isCollapsed ? "-4px" : "10px",
                          }}
                        />
                      )}
                  </Button>
                );
              })}
            </VStack>
          </VStack>

          <VStack w={"100%"}>
            <Separator />

            <HStack
              mt={4}
              h={"30px"}
              align={"center"}
              justifyContent={"center"}
              _hover={{
                cursor: "pointer",
              }}
              onClick={() => {
                localStorage.clear();
                dispatch(tokenAction.clearToken());
                dispatch(tmpStoreAction.clearState());
                router.push(ROUTE_PATH.NON_AUTH.HOME);
              }}
            >
              <FiLogOut color={"white"} />
              <Text
                display={isCollapsed ? "none" : "block"}
                fontSize="12px"
                fontWeight={400}
                color={"white"}
              >
                Sign Out
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </Flex>

      <Box
        pos={"absolute"}
        bgGradient="linear(to-b, #fdbb2d, #22c1c3)"
        h={"100%"}
        w={0.5}
      />
      <Box
        pos={"absolute"}
        right={0}
        bgGradient="linear(to-b, #fdbb2d, #22c1c3)"
        h={"100%"}
        w={0.5}
      />
    </HStack>
  );
}

export default Sidebar;
