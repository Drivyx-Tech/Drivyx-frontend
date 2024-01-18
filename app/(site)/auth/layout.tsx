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
import Navbar from "@/components/menu/WithSubnavigation";
import globeBg from "@/public/images/bulb-turbine-bg.jpg";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Navbar navTheme="light" />

      <HStack
        px={8}
        h={"100vh"}
        w={"100vw"}
        justify={"center"}
        align={"flex-end"}
        pos={"relative"}
      >
        <Box
          bgImage={`url(${globeBg.src})`}
          bgSize="cover"
          bgRepeat="no-repeat"
          bgPos="center"
          w="100%"
          h="100%"
          position="absolute"
          zIndex={-1}
        />
        <Box
          position="absolute"
          w="100%"
          h="100%"
          bg="rgba(0, 0, 0, 0.5)"
          zIndex={-1}
        />
        <HStack
          h={"calc(100vh - 80px)"}
          w={"full"}
          maxW={"7xl"}
          justify={"center"}
        >
          {children}
        </HStack>
      </HStack>
    </section>
  );
}

export default layout;
