import {
  Box,
  Image,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Heading,
  Button,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import logo from "public/svg/logomark.svg";
import {
  BiAnalyse,
  BiNetworkChart,
  BiLoaderCircle,
  BiWater,
  BiDonateHeart,
} from "react-icons/bi";
import { NAV_DASHBOARD } from "@/constants/NAV_DASHBOARD";

function Sidebar(props: any) {
  const { logoText, routes, sidebarVariant } = props;

  return (
    <Box>
      <Box display={{ sm: "none", xl: "block" }} position="fixed">
        <Box
          transition={"0.2s linear"}
          w="260px"
          maxW="260px"
          ms={{
            sm: "16px",
          }}
          my={{
            sm: "16px",
          }}
          h="calc(100vh - 32px)"
          ps="20px"
          pe="20px"
          m={"16px 0px 16px 16px"}
          borderRadius={"16px"}
        >
          <Box w={"100%"} mb="12px">
            <Link
              href={`/`}
              target="_blank"
              display="flex"
              lineHeight="100%"
              mb="30px"
              fontWeight="bold"
              justifyContent="center"
              alignItems="center"
              fontSize="11px"
            >
              <Image w={"64px"} src={logo.src} alt="logo" />
            </Link>
          </Box>
          <Stack direction="column" mb="40px">
            {NAV_DASHBOARD.map((prop, key) => {
              return (
                <Button
                  key={key}
                  as={Link}
                  href={prop.path}
                  boxSize="initial"
                  justifyContent="flex-start"
                  alignItems="center"
                  bg={"primary.500"}
                  mb={{
                    xl: "12px",
                  }}
                  mx={{
                    xl: "auto",
                  }}
                  ps={{
                    sm: "10px",
                    xl: "16px",
                  }}
                  py="12px"
                  borderRadius="15px"
                  // _hover="none" // check this later
                  w="100%"
                  _active={{
                    bg: "inherit",
                    transform: "none",
                    borderColor: "transparent",
                  }}
                  _focus={{
                    boxShadow: "none",
                  }}
                >
                  <Flex w={"100%"}>
                    {prop.icon}
                    <Text
                      w={"100%"}
                      textAlign="center"
                      color={"secondary.500"}
                      my="auto"
                      fontSize="sm"
                    >
                      {prop.name}
                    </Text>
                  </Flex>
                </Button>
              );
            })}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
