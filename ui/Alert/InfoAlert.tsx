"use client";

import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  CloseButton,
  HStack,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

export default function InfoAlert() {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });

  return isVisible ? (
    <HStack w={"full"} justify={"center"} bg={"gray.300"}>
      <Stack h={"40px"} justify={"center"} pos={"absolute"} top={0}>
        <Alert
          status="warning"
          variant="subtle"
          colorScheme="orange"
          justifyContent={"center"}
        >
          <AlertIcon color="orange" />
          <Box>
            <AlertDescription fontSize={"sm"} color={"gray.600"}>
              Please complete your organization profile to create projects.
            </AlertDescription>
          </Box>
          <CloseButton onClick={onClose} size="sm" color={"gray.600"} ml={2} />
        </Alert>
      </Stack>
    </HStack>
  ) : null;
}
