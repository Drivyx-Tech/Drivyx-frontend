"use client";

import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  Heading,
  VStack,
  Flex,
  Text,
  Checkbox,
  Box,
} from "@chakra-ui/react";
import SectionContainer from "@/ui/SectionContainer";
import { useEffect, useState } from "react";

// A simple email validation
const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

function Contact() {
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
    <SectionContainer my={{ base: 10, lg: 16 }}>
      <Container maxW="5xl" py={10} px={{ base: 5, md: 8 }}>
        <Stack spacing={10}>
          <VStack
            as="form"
            spacing={8}
            w="100%"
            bg={"white"}
            rounded="lg"
            boxShadow="lg"
            p={{ base: 5, sm: 10 }}
          >
            <Flex align="center" justify="center" direction="column" mb={4}>
              <Text
                textTransform={"uppercase"}
                color={"primary.700"}
                fontWeight={600}
                fontSize={"md"}
                py={1}
                px={2}
                alignSelf={"flex-start"}
                rounded={"md"}
                w={"100%"}
                textAlign="center"
              >
                Contact
              </Text>
              <Heading fontSize="4xl" mb={2}>
                Get in Touch
              </Heading>
              <Text fontSize="md" textAlign="center">
                Have a question? Need assistance? We are here to help.
              </Text>
            </Flex>

            <VStack spacing={8} w="100%" alignItems={"left"}>
              <Stack
                w="100%"
                spacing={3}
                direction={{ base: "column", md: "row" }}
              >
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Javed"
                    rounded="md"
                    value={name}
                    onChange={(event: any) => setName(event.target.value)}
                    onBlur={() => {
                      if (name.length === 0) {
                        return (
                          <Text
                            pos={"absolute"}
                            bottom={-6}
                            left={0}
                            fontSize={"sm"}
                            color="red"
                          >
                            Please enter a your name
                          </Text>
                        );
                      }
                    }}
                  />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="javed@gmail.com"
                    rounded="md"
                    value={email}
                    onChange={(event: any) => {
                      setEmail(event.target.value);
                    }}
                    pos="relative"
                    onBlur={() => {
                      if (!email.length && isValid) {
                        setError(true);
                      } else {
                        setError(false);
                      }
                    }}
                  />
                  {error && (
                    <Text
                      pos={"absolute"}
                      bottom={-6}
                      left={0}
                      fontSize={"sm"}
                      color="red"
                    >
                      Please enter a valid email address
                    </Text>
                  )}
                </FormControl>
              </Stack>
              <FormControl id="message">
                <FormLabel>Message</FormLabel>
                <Textarea
                  size="lg"
                  placeholder="Enter your message"
                  rounded="md"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  onBlur={() => {
                    if (message.length === 0) {
                      return (
                        <Text
                          pos={"absolute"}
                          bottom={-6}
                          left={0}
                          fontSize={"sm"}
                          color="red"
                        >
                          Please input message
                        </Text>
                      );
                    }
                  }}
                />
              </FormControl>
              <Checkbox
                isChecked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              >
                <Button
                  variant={"link"}
                  textColor={"primary.700"}
                  size={"md"}
                  onClick={() => {}}
                >
                  I agree to the terms
                </Button>
              </Checkbox>
            </VStack>
            <VStack w="100%">
              <Button
                bg="primary.600"
                color="white"
                _hover={{
                  bg: "primary.700",
                }}
                rounded="md"
                w={{ base: "100%", md: "max-content" }}
                onClick={handleSubmit}
                isDisabled={!isChecked}
              >
                Submit
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Container>
    </SectionContainer>
  );
}

export default Contact;
