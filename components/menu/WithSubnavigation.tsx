/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
  Grid,
  Link,
  GridItem,
  VStack,
  Divider,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { ChildrenNavItems, NAV_ITEMS } from "@/constants/NAV_ITEMS";
import { useAppSlector } from "@/services/redux/hooks";
import LogoFull from "@/ui/SVG/LogoFull";
import NormalMenu from "./NormalMenu";
import ProfileMenu from "./ProfileMenu";
import { ROUTE_PATH } from "@/constants/ROUTE_PATH";
import { useEffect, useRef, useState } from "react";
import ScrollLogo from "@/ui/SVG/ScrollLogo";

type NavThemeProps = {
  navTheme: "light" | "dark";
};

export default function WithSubnavigation({
  navTheme = "light",
}: NavThemeProps) {
  const token = useAppSlector((state) => state.tokens.currentToken);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [isScroll, setIsScroll] = useState(false);
  const handleIsScroll = () => {
    window.scrollY <= 200 ? setIsScroll(false) : setIsScroll(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", onClose);
    window.addEventListener("scroll", handleIsScroll, false);
    return () => {
      window.removeEventListener("scroll", onClose);
      window.addEventListener("scroll", handleIsScroll, false);
    };
  }, []);

  return (
    <Stack position="relative" px={"24px"}>
      <Stack
        w={"full"}
        h={"80px"}
        position={"absolute"}
        top={0}
        left={0}
        right={0}
        zIndex={9999}
        justify={"center"}
        align={"center"}
      >
        <VStack
          position={"absolute"}
          w={"full"}
          maxW={"1364px"}
          px={8}
          display={"block"}
          transition="all 1s ease"
          align={"center"}
          justify={"center"}
        >
          <Flex justify={"space-between"}>
            <Flex display={{ base: "flex", lg: "none" }} align={"center"}>
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
                backgroundColor={"#27272b"}
                color={"white"}
                border={"1px"}
                borderColor={"rgba(255, 255, 255, 0.1)"}
                _hover={{
                  backgroundColor: "rgba(42, 82, 0, 0.7)",
                }}
              />
            </Flex>

            <Flex>
              <Link overflow={"hidden"} w="200px" h="50px" href={"/"}>
                {navTheme === "dark" ? <ScrollLogo /> : <LogoFull />}
              </Link>

              <Flex
                color={navTheme === "dark" ? "secondary.800" : "white"}
                display={{ base: "none", lg: "flex" }}
                ml={10}
              >
                <DesktopNav />
              </Flex>
            </Flex>

            <Stack justify={"flex-end"} direction={"row"} spacing={6}>
              {!token ? <NormalMenu /> : <ProfileMenu />}
            </Stack>
          </Flex>
        </VStack>

        <Stack position={"absolute"} top={"80px"} w={"full"}>
          <Collapse in={isOpen} animateOpacity>
            <MobileNav />
          </Collapse>
        </Stack>
      </Stack>

      {/* scroll navbar */}
      <Stack
        w={"full"}
        h={"80px"}
        position={"fixed"}
        top={isScroll ? 2 : "-350px"}
        transition={"all ease-in-out .5s"}
        left={0}
        right={0}
        zIndex={999}
        justify={"center"}
        align={"center"}
        borderColor={{
          backgroundGradient: "",
        }}
      >
        <VStack
          display={"block"}
          w={"full"}
          maxW={"1364px"}
          px={8}
          py={4}
          rounded={30}
          shadow={"lg"}
          transition="all 1s ease"
          align={"center"}
          bgColor={"white"}
        >
          <Stack w={"full"} justify={"space-between"}>
            <Flex w={"full"} justify={"space-between"}>
              <Flex display={{ base: "flex", lg: "none" }} align={"center"}>
                <IconButton
                  onClick={onToggle}
                  icon={
                    isOpen ? (
                      <CloseIcon w={3} h={3} />
                    ) : (
                      <HamburgerIcon w={5} h={5} />
                    )
                  }
                  variant={"ghost"}
                  aria-label={"Toggle Navigation"}
                  backgroundColor={"#27272b"}
                  color={"white"}
                  border={"1px"}
                  borderColor={"rgba(255, 255, 255, 0.1)"}
                  _hover={{
                    backgroundColor: "rgba(42, 82, 0, 0.7)",
                  }}
                />
              </Flex>

              <Flex>
                <Link overflow={"hidden"} w="200px" h="50px" href={"/"}>
                  <ScrollLogo />
                </Link>

                <Flex
                  color={"secondary.800"}
                  display={{ base: "none", lg: "flex" }}
                  ml={10}
                >
                  <DesktopNav />
                </Flex>
              </Flex>

              <Stack justify={"flex-end"} direction={"row"} spacing={6}>
                {!token ? <NormalMenu /> : <ProfileMenu />}
              </Stack>
            </Flex>
          </Stack>
        </VStack>

        <Stack position={"absolute"} top={"80px"} w={"full"}>
          <Collapse in={isOpen} animateOpacity>
            <MobileNav />
          </Collapse>
        </Stack>
      </Stack>
    </Stack>
  );
}

const DesktopNav = () => {
  return (
    <Stack align={"center"} direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"md"}
                fontWeight={500}
                _hover={{
                  textDecoration: "none",
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                width={"100vw"}
                border={0}
                boxShadow={"xl"}
                bg={"white"}
                p={8}
                rounded={"xl"}
              >
                <Grid templateColumns="repeat(4, 1fr)" gap={2}>
                  {navItem.children.map((child: any) => {
                    return (
                      <GridItem key={child.tag} w="100%">
                        <Text fontWeight={600} mb={2}>
                          {child.tag}
                        </Text>
                        {child.othersNav.map((item: ChildrenNavItems) => {
                          return (
                            <DesktopSubNav
                              key={item.label}
                              label={item.label}
                              subLabel={item.subLabel}
                              iconLabel={item.iconLabel}
                              href={item.href}
                            />
                          );
                        })}
                      </GridItem>
                    );
                  })}
                </Grid>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({
  label,
  href,
  subLabel,
  iconLabel,
}: ChildrenNavItems) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={4}
      rounded={"md"}
      _hover={{ bg: "primary.50" }}
    >
      <Stack direction={"row"} align={"center"} gap={1}>
        <Icon as={iconLabel} w={8} h={8} />
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "primary.700" }}
            fontWeight={700}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-5px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"primary.700"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  const token = useAppSlector((state) => state.tokens.currentToken);

  return (
    <VStack bg={"white"} p={4} display={{ lg: "none" }} my={0} mx={4}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}

      <VStack>
        <Divider />
        <Text
          as={Link}
          href={ROUTE_PATH.NON_AUTH.MARKETPLACE.HOME}
          fontSize={"sm"}
          fontWeight={700}
          textTransform={"uppercase"}
          textColor={"primary.500"}
          textDecoration={"none"}
        >
          Marketplace
        </Text>
        {!token && (
          <Text
            as={Link}
            href={ROUTE_PATH.AUTH.SIGNIN}
            fontSize={"sm"}
            fontWeight={600}
            bgGradient="linear(to-l, #fdbb2d, #22c1c3)"
            bgClip="text"
            textDecoration={"none"}
          >
            SIGN UP / LOG IN
          </Text>
        )}
      </VStack>
    </VStack>
  );
};

const MobileNavItem = ({ label, children, href }: any) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text textAlign={"center"} fontWeight={600} color={"gray.600"}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>
    </Stack>
  );
};
