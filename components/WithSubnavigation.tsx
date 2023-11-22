"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
  Image,
  Grid,
  Link,
  GridItem,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import logo from "public/svg/logo_background.svg";
import { ChildrenNavItems, NAV_ITEMS } from "@/constants/NAV_ITEMS";
import MenuLogo from "./SVG/LogoTurbine";
import LogoFull from "./SVG/LogoFull";
import { useEffect, useState } from "react";
import { useAppSlector } from "@/services/redux/hooks";
import ProfileMenu from "./menu/ProfileMenu";
import NormalMenu from "./menu/NormalMenu";

export default function WithSubnavigation() {
  const token = useAppSlector((state) => state.tokens.currentToken);
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      boxShadow={"xl"}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={999}
    >
      <Flex
        bg={"white"}
        color={"text.darkest"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4, md: 8, lg: 12, xl: 16 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link w="200px" h="50px" href={"/"}>
            <LogoFull />
          </Link>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {!token ? <NormalMenu /> : <ProfileMenu />}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>

      <Box bgGradient="linear(to-r, #22c1c3, #fdbb2d)" h={0.5} w={"100%"} />
    </Box>
  );
}

const DesktopNav = () => {
  // const linkColor = useColorModeValue('text.darkest', 'text.darkest');
  // const linkHoverColor = useColorModeValue('secondary.900', 'secondary.900');
  // const popoverContentBgColor = useColorModeValue('white', 'white');

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
                color={"text.darkest"}
                _hover={{
                  textDecoration: "none",
                  color: "secondary.900",
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
  return (
    <Stack bg={"white"} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

// TODO: mobile nav
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
        <Text fontWeight={600} color={"gray.600"}>
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

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={"gray.200"}
          align={"start"}
        >
          {/* TODO: mobile nav */}
          {/* {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))} */}
        </Stack>
      </Collapse>
    </Stack>
  );
};
