"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import SectionContainer from "@/ui/SectionContainer";
import { ReactElement, useEffect, useState } from "react";
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";

// A simple email validation
const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

function ContactForm() {
  const { hasCopied, onCopy } = useClipboard("example@example.com");
  const [isChecked, setIsChecked] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [value, setValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    console.log(value);
    console.log("email", isValid);
  };

  useEffect(() => {
    // to check if any of the value is empty
    // if (!value.name || !value.email || !value.message) {
    //   setValueCheck(true);
    //   return;
    // }

    setIsValid(validateEmail(value.email));
  }, [value]);

  return (
    <Flex align="center" justify="center" flex={1}>
      <Box
        minW={{ base: "90%", md: "80%" }}
        borderRadius="lg"
        p={8}
        shadow="xl"
      >
        <VStack spacing={5}>
          <FormControl isRequired>
            <FormLabel>First Name</FormLabel>

            <InputGroup>
              <InputLeftElement>
                <BsPerson />
              </InputLeftElement>
              <Input
                type="text"
                name="first name"
                placeholder="Your First Name"
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Last Name</FormLabel>

            <InputGroup>
              <InputLeftElement>
                <BsPerson />
              </InputLeftElement>
              <Input
                type="text"
                name="last name"
                placeholder="Your Last Name"
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>

            <InputGroup>
              <InputLeftElement>
                <MdOutlineEmail />
              </InputLeftElement>
              <Input type="email" name="email" placeholder="Your Email" />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Message</FormLabel>

            <Textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              resize="none"
            />
          </FormControl>

          <Button
            colorScheme="blue"
            bg="blue.400"
            color="white"
            _hover={{
              bg: "blue.500",
            }}
            width="full"
          >
            Send Message
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
}

export default ContactForm;
