"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { useFormik } from "formik";
import { createVisitorQuery } from "@/services/endpoints/visitorQuery";

function ContactForm() {
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      given_name: "",
      family_name: "",
      message: "",
    },
    onSubmit: async (values) => {
      try {
        const res = await createVisitorQuery({ ...values });
        if (res.result.statusCode === 200) {
          toast({
            title: "Success",
            description: "Your message has been sent successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
          });

          formik.resetForm();
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Flex align="center" justify="center" flex={1}>
      <Box
        minW={{ base: "90%", md: "80%" }}
        borderRadius="lg"
        p={8}
        shadow="xl"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          <VStack spacing={5}>
            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>

              <InputGroup>
                <InputLeftElement>
                  <BsPerson />
                </InputLeftElement>
                <Input
                  id="given_name"
                  type="text"
                  name="given_name"
                  placeholder="Your Given Name"
                  onChange={formik.handleChange}
                  value={formik.values.given_name}
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
                  id="family_name"
                  type="text"
                  name="family_name"
                  placeholder="Your Family Name"
                  onChange={formik.handleChange}
                  value={formik.values.family_name}
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>

              <InputGroup>
                <InputLeftElement>
                  <MdOutlineEmail />
                </InputLeftElement>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </InputGroup>
            </FormControl>

            <FormControl>
              <FormLabel>Phone</FormLabel>

              <InputGroup>
                <InputLeftElement>
                  <MdOutlineEmail />
                </InputLeftElement>
                <Input
                  id="phone"
                  type="phone"
                  name="phone"
                  placeholder="Your Phone Number"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Message</FormLabel>

              <Textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={6}
                resize="none"
                onChange={formik.handleChange}
                value={formik.values.message}
              />
            </FormControl>

            <Button
              type={"submit"}
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
        </form>
      </Box>
    </Flex>
  );
}

export default ContactForm;
