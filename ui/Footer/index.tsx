"use client";

import { ReactNode } from "react";

import {
  Box,
  Container,
  Divider,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ROUTE_PATH } from "@/constants/ROUTE_PATH";
import LogoFull from "../SVG/LogoFull";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bgGradient="linear(to-r, #112D27,#0B1E1A, #112D27)">
      <Box h={"2px"} bgGradient="linear(to-r, #22c1c3, #fdbb2d)" w={"100%"} />
      <Container as={Stack} maxW={"6xl"} py={10} textColor={"white"}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6} align={"center"}>
            <Link overflow={"hidden"} w="200px" h="50px" href={"/"}>
              <LogoFull />
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Product</ListHeader>
            {/* <Box as="a" href={"/overview"}>
              Overview
            </Box> */}
            {/* <Box as="a" href={"/features"}>
              Features
            </Box> */}
            <Box as="a" href={ROUTE_PATH.NON_AUTH.HOW_TO}>
              How to
            </Box>
            <Box as="a" href={ROUTE_PATH.NON_AUTH.PRICING}>
              Pricing
            </Box>
            <Box as="a" href={ROUTE_PATH.NON_AUTH.ROADEMAP}>
              Roadmap
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={ROUTE_PATH.NON_AUTH.ABOUT}>
              About
            </Box>
            <Box as="a" href={ROUTE_PATH.NON_AUTH.CAREERS}>
              Careers
            </Box>
            <Box as="a" href={ROUTE_PATH.NON_AUTH.CONTACT}>
              Contact
            </Box>
            <Box as="a" href={ROUTE_PATH.NON_AUTH.PARTNERS}>
              Partners
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Box
              as="a"
              target="_blank"
              href={ROUTE_PATH.NON_AUTH.TERMS_AND_CONDITIONS}
            >
              Terms and Conditions
            </Box>
            <Box
              as="a"
              target="_blank"
              href={ROUTE_PATH.NON_AUTH.PRIVACY_POLICY}
            >
              Privacy Policy
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Follow Us</ListHeader>
            <Box as="a" href={"https://twitter.com/DrivyxESG"}>
              Twitter
            </Box>
            <Box as="a" href={"https://www.linkedin.com/company/drivyx"}>
              LinkedIn
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>

      <Stack w={"100%"} justify={"center"} align={"center"}>
        <Divider maxW={"6xl"} />
        <Text textAlign={"center"} fontSize={"sm"} my={2} textColor={"gray"}>
          © 2024 Drivyx. All rights reserved
        </Text>
      </Stack>
    </Box>
  );
}
