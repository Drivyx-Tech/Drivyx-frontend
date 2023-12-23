import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

export default function InfoAlert() {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });

  //   setTimeout(onClose, 10000);

  return (
    isVisible && (
      <Stack h={"40px"} justify={"center"}>
        <Alert
          status="warning"
          variant="subtle"
          colorScheme="orange"
          justifyContent={"center"}
        >
          <AlertIcon color="orange" />
          <Box>
            <AlertDescription fontSize={"sm"} color={"gray.600"}>
              You have to complete the organization profile before creating
              projects.
            </AlertDescription>
          </Box>
          <CloseButton onClick={onClose} size="sm" color={"gray.600"} />
        </Alert>
      </Stack>
    )
  );
}
