import React from "react";
import {
  Avatar,
  Button,
  Divider,
  Flex,
  HStack,
  Text,
  VStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useAppSlector } from "@/services/redux/hooks";
import { MdEmail } from "react-icons/md";
import CardContainer from "@/ui/Cards/CardContainer";

function UserProfileCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useAppSlector((state) => state.tmpStore.user);

  return (
    <CardContainer>
      <Avatar
        src={"https://bit.ly/broken-link"}
        w="80px"
        h="80px"
        borderRadius={5}
        overflow={"hidden"}
        rounded={"full"}
      />
      <VStack justify={"center"} w={"full"} align="left">
        <HStack align={"flex-end"}>
          <Text fontSize={"md"} fontWeight={"bold"} textColor={"secondary.800"}>
            {user?.given_name + " " + user?.family_name}
          </Text>
          <Text fontSize={"sm"} color={"gray.500"}>
            Project Manager
          </Text>
        </HStack>

        <HStack gap={1}>
          <Flex align={"center"} gap={1} color={"gray.500"}>
            <MdEmail />
          </Flex>
          <Text fontSize={"sm"} color={"gray.500"}>
            {user?.email}
          </Text>
        </HStack>

        <Text
          fontSize={"sm"}
          cursor={"pointer"}
          textDecoration={"underline"}
          onClick={onOpen}
        >
          Edit profile
        </Text>
      </VStack>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              You can scroll the content behind the modal
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </CardContainer>
  );
}

export default UserProfileCard;
