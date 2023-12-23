import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import react, { useRef } from "react";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export default function AlertDialogModal({ isOpen, onOpen, onClose }: Props) {
  const cancelRef = useRef<any>();

  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        // isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Create a New Project</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            You haven't completed the organization profile. Please complete it
            before creating a new project.
          </AlertDialogBody>
          <AlertDialogFooter>
            {/* <Button ref={cancelRef} onClick={onClose}>
              No
            </Button> */}
            <Button
              size={"sm"}
              ref={cancelRef}
              onClick={onClose}
              colorScheme="blue"
              ml={3}
            >
              Sure
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
